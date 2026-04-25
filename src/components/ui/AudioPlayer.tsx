"use client";

import { useRef, useState } from "react";
import { Play, Pause } from "lucide-react";

export function AudioPlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    if (!audioRef.current) return;

    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play().catch(() => {
        // Autoplay may be blocked by browser
      });
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed top-6 right-6 z-[9998] flex items-center gap-3">
      <audio ref={audioRef} src="/audio/lofi-beat.mp3" loop preload="none" />

      <div className="flex items-center gap-3 rounded-full border border-white/10 bg-white/5 backdrop-blur-xl px-4 py-2.5">
        <div className="flex flex-col items-end">
          <span className="text-[10px] font-heading uppercase tracking-[0.2em] text-text">
            Vibe Check
          </span>
          <span className="text-[9px] uppercase tracking-[0.15em] text-muted">
            {isPlaying ? "Playing" : "Paused"}
          </span>
        </div>

        <button
          onClick={togglePlay}
          className="relative flex h-10 w-10 items-center justify-center rounded-full bg-accent text-bg transition-transform duration-300 hover:scale-110"
          aria-label={isPlaying ? "Pause music" : "Play music"}
        >
          {isPlaying && (
            <span className="absolute inset-0 rounded-full bg-accent animate-pulse-ring" />
          )}
          {isPlaying ? (
            <Pause className="relative z-10 h-4 w-4 fill-current" />
          ) : (
            <Play className="relative z-10 h-4 w-4 fill-current ml-0.5" />
          )}
        </button>
      </div>
    </div>
  );
}
