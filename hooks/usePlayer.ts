import { useState, useRef, useEffect } from "react";

type Action = "rewind" | "forward" | null;

const usePlayer = () => {
  // State Variables
  const [isPlaying, setIsPlaying] = useState(false);
  const [showToggleIcon, setShowToggleIcon] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [volume, setVolume] = useState(1);
  const [lastVolume, setLastVolume] = useState(1);
  const [showControls, setShowControls] = useState(true);
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [currentAction, setCurrentAction] = useState<Action>(null);
  const [showEndScreen, setShowEndScreen] = useState(false);
  const [loopStart, setLoopStart] = useState<number | null>(null);
  const [loopEnd, setLoopEnd] = useState<number | null>(null);
  const [isLoopModalOpen, setIsLoopModalOpen] = useState(false);

  // Refs
  const playerRef = useRef<HTMLMediaElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const controlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const toggleIconTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const actionIconTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Effect: Handle player events
  useEffect(() => {
    const player = playerRef.current;

    const handleTimeUpdate = () => {
      if (player) {
        setCurrentTime(player.currentTime);
        if (
          loopStart !== null &&
          loopEnd !== null &&
          player.currentTime >= loopEnd
        ) {
          handleSeek(loopStart);
        }
      }
    };

    const handleLoadedMetadata = () => {
      if (player) {
        setDuration(player.duration);
      }
    };

    const handleEnded = () => {
      setShowEndScreen(true);
      setIsPlaying(false);
    };

    if (player) {
      player.addEventListener("timeupdate", handleTimeUpdate);
      player.addEventListener("loadedmetadata", handleLoadedMetadata);
      player.addEventListener("ended", handleEnded);
    }

    return () => {
      if (player) {
        player.removeEventListener("timeupdate", handleTimeUpdate);
        player.removeEventListener("loadedmetadata", handleLoadedMetadata);
        player.removeEventListener("ended", handleEnded);
      }
    };
  }, [loopStart, loopEnd]);

  // Effect: Show controls on mouse movement
  useEffect(() => {
    const handleMouseMove = () => {
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, []);

  // Cleanup timeouts on unmount
  useEffect(() => {
    return () => {
      if (toggleIconTimeoutRef.current) {
        clearTimeout(toggleIconTimeoutRef.current);
      }
      if (actionIconTimeoutRef.current) {
        clearTimeout(actionIconTimeoutRef.current);
      }
    };
  }, []);

  // Play/Pause Toggle
  const togglePlayPause = () => {
    const player = playerRef.current;
    if (player) {
      if (isPlaying) {
        player.pause();
      } else {
        player.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  // Seek to a specific time
  const handleSeek = (newTime: number) => {
    const player = playerRef.current;
    if (player) {
      player.currentTime = newTime;
      setCurrentTime(newTime);
    }
  };

  // Volume Change Handler
  const handleVolumeChange = (newVolume: number) => {
    const player = playerRef.current;
    if (player) {
      player.volume = newVolume;
      setVolume(newVolume);
      if (newVolume > 0) {
        setLastVolume(newVolume);
      }
    }
  };

  // Playback Speed Change Handler
  const handlePlaybackSpeedChange = () => {
    const speeds = [0.5, 0.75, 1, 1.25, 1.5, 2];
    const currentIndex = speeds.indexOf(playbackSpeed);
    const nextIndex = (currentIndex + 1) % speeds.length;
    const newSpeed = speeds[nextIndex];
    setPlaybackSpeed(newSpeed);
    if (playerRef.current) {
      playerRef.current.playbackRate = newSpeed;
    }
  };

  // Format Time for Display
  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  // Fullscreen Toggle Handler
  const handleFullscreen = () => {
    if (containerRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        containerRef.current.requestFullscreen();
      }
    }
  };

  // Container Click Handler
  const handleContainerClick = () => {
    togglePlayPause();
    setShowToggleIcon(true);
    if (toggleIconTimeoutRef.current) {
      clearTimeout(toggleIconTimeoutRef.current);
    }
    toggleIconTimeoutRef.current = setTimeout(() => {
      setShowToggleIcon(false);
    }, 1000); // Show icon for 1 second
  };

  // Mute/Unmute Handler
  const toggleMute = () => {
    if (volume > 0) {
      setLastVolume(volume);
      handleVolumeChange(0);
    } else {
      handleVolumeChange(lastVolume);
    }
  };

  // Rewind Handler
  const handleRewind = () => {
    handleSeek(Math.max(currentTime - 10, 0));
    setCurrentAction("rewind");
    if (actionIconTimeoutRef.current) {
      clearTimeout(actionIconTimeoutRef.current);
    }
    actionIconTimeoutRef.current = setTimeout(() => {
      setCurrentAction(null);
    }, 1000);
  };

  // Forward Handler
  const handleForward = () => {
    handleSeek(Math.min(currentTime + 10, duration));
    setCurrentAction("forward");
    if (actionIconTimeoutRef.current) {
      clearTimeout(actionIconTimeoutRef.current);
    }
    actionIconTimeoutRef.current = setTimeout(() => {
      setCurrentAction(null);
    }, 1000);
  };

  // Open Loop Modal
  const openLoopModal = () => {
    setIsLoopModalOpen(true);
  };

  // Close Loop Modal
  const closeLoopModal = () => {
    setIsLoopModalOpen(false);
  };

  // Clear Loop Settings
  const clearLoop = () => {
    setLoopStart(null);
    setLoopEnd(null);
  };

  // Determine if Loop is Enabled
  const loopEnabled = loopStart !== null && loopEnd !== null;

  return {
    // Refs
    playerRef,
    containerRef,

    // State
    isPlaying,
    showToggleIcon,
    currentTime,
    duration,
    volume,
    showControls,
    playbackSpeed,
    currentAction,
    showEndScreen,
    loopStart,
    loopEnd,
    isLoopModalOpen,
    loopEnabled,

    // State Setters
    setIsPlaying,
    setShowEndScreen,
    setLoopStart,
    setLoopEnd,

    // Handlers
    togglePlayPause,
    handleSeek,
    handleVolumeChange,
    handlePlaybackSpeedChange,
    formatTime,
    handleFullscreen,
    handleContainerClick,
    toggleMute,
    handleRewind,
    handleForward,
    openLoopModal,
    closeLoopModal,
    clearLoop,
  };
};

export default usePlayer;
