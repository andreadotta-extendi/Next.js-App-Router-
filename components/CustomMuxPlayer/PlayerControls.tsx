import React, { useRef, useState } from "react";
import {
  Play,
  Pause,
  Volume2,
  VolumeX,
  Subtitles,
  Cast,
  Maximize,
  Repeat,
} from "lucide-react";
import { Button } from "../ui/Button";
import { Slider } from "../ui/Slider";
import { Tooltip } from "../ui/Tooltip";
import { RewindIcon } from "./RewindIcon";
import { ForwardIcon } from "./ForwardIcon";

interface PlayerControlsProps {
  isPlaying: boolean;
  togglePlayPause: () => void;
  handleRewind: () => void;
  handleForward: () => void;
  handlePlaybackSpeedChange: () => void;
  playbackSpeed: number;
  currentTime: number;
  duration: number;
  volume: number;
  handleVolumeChange: (value: number) => void;
  toggleMute: () => void;
  handleFullscreen: () => void;
  showControls: boolean;
  openLoopModal: () => void;
  loopEnabled: boolean;
  clearLoop: () => void;
  handleSeek: (value: number) => void;
  formatTime: (time: number) => string;
}

export function PlayerControls({
  isPlaying,
  handleSeek,
  togglePlayPause,
  handleRewind,
  handleForward,
  handlePlaybackSpeedChange,
  playbackSpeed,
  currentTime,
  duration,
  volume,
  handleVolumeChange,
  toggleMute,
  handleFullscreen,
  showControls,
  openLoopModal,
  loopEnabled,
  clearLoop,
  formatTime,
}: PlayerControlsProps) {
  const [isVolumeSliderVisible, setIsVolumeSliderVisible] = useState(false);
  const hideVolumeSliderTimeout = useRef<NodeJS.Timeout | null>(null);

  return (
    <div
      className={`absolute bottom-0 left-0 right-0 z-10 transition-opacity duration-300 ${
        showControls ? "opacity-100" : "opacity-0"
      }`}
    >
      {/* Progress Slider */}
      <div onClick={(e) => e.stopPropagation()}>
        <Slider
          min={0}
          max={duration}
          step={0.1}
          value={[currentTime]}
          onValueChange={(value) => handleSeek(value[0])}
          className="w-full h-3"
        />
      </div>
      {/* Controls */}
      <div className="flex items-center justify-between p-4">
        {/* Left Controls */}
        <div className="flex items-center space-x-4">
          <Tooltip content={isPlaying ? "Pausa" : "Riproduci"}>
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                togglePlayPause();
              }}
              className="text-white hover:text-white/80"
            >
              {isPlaying ? (
                <Pause className="h-6 w-6" />
              ) : (
                <Play className="h-6 w-6" />
              )}
            </Button>
          </Tooltip>
          <Tooltip content="Riavvolgi 10s">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleRewind();
              }}
              className="text-white hover:text-white/80"
            >
              <RewindIcon />
            </Button>
          </Tooltip>
          <Tooltip content="Avanza 10s">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleForward();
              }}
              className="text-white hover:text-white/80"
            >
              <ForwardIcon />
            </Button>
          </Tooltip>
          <Tooltip content="Cambia Velocità di Riproduzione">
            <Button
              variant="ghost"
              onClick={(e) => {
                e.stopPropagation();
                handlePlaybackSpeedChange();
              }}
              className="text-white hover:text-white/80 text-sm"
            >
              {playbackSpeed}x
            </Button>
          </Tooltip>
          <Tooltip content={loopEnabled ? "Disabilita Loop" : "Imposta Loop"}>
            <Button
              variant={loopEnabled ? "default" : "ghost"}
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                if (loopEnabled) {
                  clearLoop();
                } else {
                  openLoopModal();
                }
              }}
              className="text-white hover:text-white/80"
            >
              <Repeat className="h-6 w-6" />
            </Button>
          </Tooltip>
        </div>

        {/* Center Controls: Current Time / Total Time */}
        <div className="text-white text-sm font-medium">
          {formatTime(currentTime)} / {formatTime(duration)}
        </div>

        {/* Right Controls */}
        <div className="flex items-center space-x-4">
          {/* Volume Control */}
          <div
            className="relative"
            onMouseEnter={() => {
              // Clear any existing timeout
              if (hideVolumeSliderTimeout.current) {
                clearTimeout(hideVolumeSliderTimeout.current);
                hideVolumeSliderTimeout.current = null;
              }
              setIsVolumeSliderVisible(true);
            }}
            onMouseLeave={() => {
              // Start a timeout to hide the volume slider after 300ms
              hideVolumeSliderTimeout.current = setTimeout(() => {
                setIsVolumeSliderVisible(false);
              }, 300);
            }}
          >
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                toggleMute();
              }}
              className="text-white hover:text-white/80"
            >
              {volume > 0 ? (
                <Volume2 className="h-6 w-6" />
              ) : (
                <VolumeX className="h-6 w-6" />
              )}
            </Button>
            {/* Volume Slider */}
            {isVolumeSliderVisible && (
              <div className="absolute bottom-full right-0 transform translate-y-8 -translate-x-12">
                <div className="bg-gray-800 rounded p-2">
                  <Slider
                    min={0}
                    max={1}
                    step={0.05}
                    value={[volume]}
                    onValueChange={(value) => handleVolumeChange(value[0])}
                    className="w-24 h-3"
                    onClick={(e) => e.stopPropagation()}
                  />
                </div>
              </div>
            )}
          </div>

          <Tooltip content="Sottotitoli">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                // Implement subtitles toggle
              }}
              className="text-white hover:text-white/80"
            >
              <Subtitles className="h-6 w-6" />
            </Button>
          </Tooltip>
          <Tooltip content="Trasmetti">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                // Implement cast functionality
              }}
              className="text-white hover:text-white/80"
            >
              <Cast className="h-6 w-6" />
            </Button>
          </Tooltip>
          <Tooltip content="Schermo Intero">
            <Button
              variant="ghost"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                handleFullscreen();
              }}
              className="text-white hover:text-white/80"
            >
              <Maximize className="h-6 w-6" />
            </Button>
          </Tooltip>
        </div>
      </div>
    </div>
  );
}
