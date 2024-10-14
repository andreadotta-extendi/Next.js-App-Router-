import React, { useState, useEffect } from "react";
import { Slider } from "../ui/Slider";
import { Button } from "../ui/Button";

interface LoopModalProps {
  loopStart: number | null;
  loopEnd: number | null;
  setLoopStart: (value: number | null) => void;
  setLoopEnd: (value: number | null) => void;
  closeModal: () => void;
  duration: number;
  formatTime: (time: number) => string;
  handleSeek: (value: number) => void;
}

export function LoopModal({
  loopStart,
  loopEnd,
  setLoopStart,
  setLoopEnd,
  closeModal,
  duration,
  formatTime,
  handleSeek,
}: LoopModalProps) {
  const [localLoopStart, setLocalLoopStart] = useState(loopStart || 0);
  const [localLoopEnd, setLocalLoopEnd] = useState(loopEnd || duration);
  const [startInput, setStartInput] = useState(formatSeconds(loopStart || 0));
  const [endInput, setEndInput] = useState(formatSeconds(loopEnd || duration));
  const [startError, setStartError] = useState("");
  const [endError, setEndError] = useState("");

  useEffect(() => {
    setLocalLoopEnd(loopEnd || duration);
    setEndInput(formatSeconds(loopEnd || duration));
  }, [duration, loopEnd]);

  // Helper function to format seconds to hh:mm:ss
  function formatSeconds(seconds: number): string {
    const hrs = Math.floor(seconds / 3600);
    const mins = Math.floor((seconds % 3600) / 60);
    const secs = Math.floor(seconds % 60);
    return [hrs, mins, secs]
      .map((v) => v.toString().padStart(2, "0"))
      .join(":");
  }

  // Helper function to parse hh:mm:ss to seconds using regex
  function parseTime(input: string): number | null {
    const regex = /^(\d{1,2}):([0-5]?\d):([0-5]?\d)$/;
    const match = input.match(regex);
    if (!match) return null;
    const [_, hours, minutes, seconds] = match;
    console.log(_);
    const totalSeconds =
      parseInt(hours, 10) * 3600 +
      parseInt(minutes, 10) * 60 +
      parseInt(seconds, 10);
    return totalSeconds;
  }

  const handleApply = () => {
    const parsedStart = parseTime(startInput);
    const parsedEnd = parseTime(endInput);

    console.log("Parsed Start:", parsedStart);
    console.log("Parsed End:", parsedEnd);

    let valid = true;

    // Validate Start Time
    if (parsedStart === null) {
      setStartError("Formato non valido. Usa HH:MM:SS.");
      valid = false;
    } else if (parsedStart < 0 || parsedStart >= duration) {
      setStartError("Tempo di inizio fuori dall'intervallo.");
      valid = false;
    } else {
      setStartError("");
    }

    // Validate End Time
    if (parsedEnd === null) {
      setEndError("Formato non valido. Usa HH:MM:SS.");
      valid = false;
    } else if (parsedEnd <= 0 || parsedEnd > duration) {
      setEndError("Tempo di fine fuori dall'intervallo.");
      valid = false;
    } else {
      setEndError("");
    }

    // Validate Logical Order
    if (parsedStart !== null && parsedEnd !== null) {
      if (parsedStart >= parsedEnd) {
        setStartError(
          "Tempo di inizio deve essere inferiore al tempo di fine."
        );
        setEndError("Tempo di fine deve essere superiore al tempo di inizio.");
        valid = false;
      }
    }

    if (!valid) return;

    setLoopStart(parsedStart);
    setLoopEnd(parsedEnd);
    handleSeek(parsedStart || 0);
    closeModal();
  };

  const handleStartInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartInput(e.target.value);
    const parsed = parseTime(e.target.value);
    if (parsed !== null) {
      setLocalLoopStart(parsed);
      setStartError("");
    } else {
      setStartError("Formato non valido. Usa HH:MM:SS.");
    }
  };

  const handleEndInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndInput(e.target.value);
    const parsed = parseTime(e.target.value);
    if (parsed !== null) {
      setLocalLoopEnd(parsed);
      setEndError("");
    } else {
      setEndError("Formato non valido. Usa HH:MM:SS.");
    }
  };

  return (
    <div
      className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-75 z-30"
      onClick={(e) => e.stopPropagation()}
    >
      <div className="bg-white dark:bg-gray-800 p-6 rounded-md w-96">
        <h2 className="text-lg font-bold mb-4 text-gray-900 dark:text-white">
          Imposta Punti di Loop
        </h2>
        {/* Slider for Loop Points */}
        <div className="mb-4">
          <Slider
            min={0}
            max={duration}
            step={0.1}
            value={[localLoopStart, localLoopEnd]}
            onValueChange={(values) => {
              setLocalLoopStart(values[0]);
              setLocalLoopEnd(values[1]);
              setStartInput(formatSeconds(values[0]));
              setEndInput(formatSeconds(values[1]));
            }}
            className="w-full h-3"
          />
          <div className="flex justify-between text-sm text-gray-600 mt-2">
            <span>{formatTime(localLoopStart)}</span>
            <span>{formatTime(localLoopEnd)}</span>
          </div>
        </div>
        {/* Manual Input for Loop Points */}
        <div className="flex justify-between items-center mb-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tempo Inizio (A)
            </label>
            <input
              type="text"
              value={startInput}
              onChange={handleStartInputChange}
              className={`border rounded p-1 w-24 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                startError ? "border-red-500" : ""
              }`}
              placeholder="HH:MM:SS"
            />
            {startError && (
              <p className="text-red-500 text-xs mt-1">{startError}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 dark:text-gray-300">
              Tempo Fine (B)
            </label>
            <input
              type="text"
              value={endInput}
              onChange={handleEndInputChange}
              className={`border rounded p-1 w-24 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                endError ? "border-red-500" : ""
              }`}
              placeholder="HH:MM:SS"
            />
            {endError && (
              <p className="text-red-500 text-xs mt-1">{endError}</p>
            )}
          </div>
        </div>
        {/* Action Buttons */}
        <div className="flex justify-end space-x-2">
          <Button variant="outline" onClick={closeModal}>
            Annulla
          </Button>
          <Button onClick={handleApply}>Applica</Button>
        </div>
      </div>
    </div>
  );
}
