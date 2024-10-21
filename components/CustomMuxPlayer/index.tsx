"use client";
import React from "react";
import MuxPlayer from "@mux/mux-player-react";
import { Pause } from "lucide-react";
import usePlayer from "../../hooks/usePlayer";
import { ForwardIcon } from "./ForwardIcon";
import { OverlayIcon } from "./OverlayIcon";
import { PlayerControls } from "./PlayerControls";
import { RewindIcon } from "./RewindIcon";
import { Button } from "../ui/Button";
import { LoopModal } from "./LoopModal";

interface CustomMuxPlayerProps {
  playbackId: string;
  videoId: string;
  videoTitle: string;
}

export default function CustomMuxPlayer({
  playbackId,
  videoId,
  videoTitle,
}: CustomMuxPlayerProps) {
  const {
    playerRef,
    containerRef,
    isPlaying,
    showToggleIcon,
    currentTime,
    duration,
    volume,
    showControls,
    playbackSpeed,
    currentAction,
    togglePlayPause,
    handleVolumeChange,
    handlePlaybackSpeedChange,
    formatTime, // Ensure formatTime is destructured
    handleFullscreen,
    handleContainerClick,
    toggleMute,
    handleRewind,
    handleForward,
    handleSeek,
    showEndScreen,
    loopEnabled,
    loopStart,
    loopEnd,
    isLoopModalOpen,
    openLoopModal,
    closeLoopModal,
    setLoopStart,
    setLoopEnd,
    setIsPlaying,
    setShowEndScreen,
    clearLoop,
  } = usePlayer();

  // Placeholder for handleNextVideo function
  const handleNextVideo = () => {
    // Implement logic to load the next video
    console.log("Funzione per il prossimo video chiamata");
  };

  const handleRestart = () => {
    handleSeek(0);
    setIsPlaying(true);
    playerRef.current?.play();
    setShowEndScreen(false);
  };

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-video bg-black cursor-pointer rounded-xl overflow-hidden"
      onClick={handleContainerClick}
    >
      <MuxPlayer
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        ref={playerRef as any}
        playbackId={playbackId}
        metadata={{
          video_id: videoId,
          video_title: videoTitle,
          viewer_user_id: "user-id-007",
        }}
        streamType="on-demand"
        style={{ "--controls": "none" } as React.CSSProperties}
      />
      {showControls && (
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 pointer-events-none" />
      )}

      {showToggleIcon && !isPlaying && (
        <OverlayIcon>
          <Pause className="h-12 w-12 text-white opacity-75" />
        </OverlayIcon>
      )}

      {currentAction === "rewind" && (
        <OverlayIcon>
          <RewindIcon />
        </OverlayIcon>
      )}
      {currentAction === "forward" && (
        <OverlayIcon>
          <ForwardIcon />
        </OverlayIcon>
      )}

      {showEndScreen && (
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-75 z-30">
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleRestart();
            }}
            className="mb-2"
          >
            Riavvia Video
          </Button>
          <Button
            onClick={(e) => {
              e.stopPropagation();
              handleNextVideo();
            }}
          >
            Prossimo Video
          </Button>
        </div>
      )}

      <PlayerControls
        isPlaying={isPlaying}
        togglePlayPause={togglePlayPause}
        handleRewind={handleRewind}
        handleForward={handleForward}
        handlePlaybackSpeedChange={handlePlaybackSpeedChange}
        playbackSpeed={playbackSpeed}
        currentTime={currentTime}
        duration={duration}
        volume={volume}
        handleVolumeChange={handleVolumeChange}
        toggleMute={toggleMute}
        handleFullscreen={handleFullscreen}
        showControls={showControls}
        openLoopModal={openLoopModal}
        loopEnabled={loopEnabled}
        handleSeek={handleSeek}
        clearLoop={clearLoop}
        formatTime={formatTime} // **Added this line**
      />

      {isLoopModalOpen && (
        <LoopModal
          loopStart={loopStart}
          loopEnd={loopEnd}
          setLoopStart={setLoopStart}
          setLoopEnd={setLoopEnd}
          closeModal={closeLoopModal}
          duration={duration}
          formatTime={formatTime}
          handleSeek={handleSeek}
        />
      )}
    </div>
  );
}
