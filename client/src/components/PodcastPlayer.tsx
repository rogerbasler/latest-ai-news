import { Play, Pause } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import type { PodcastEpisode } from "@/types/news";
import { formatDay } from "@/lib/date";

interface PodcastPlayerProps {
  episode: PodcastEpisode;
}

export default function PodcastPlayer({ episode }: PodcastPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener("timeupdate", updateTime);
    audio.addEventListener("loadedmetadata", updateDuration);
    audio.addEventListener("ended", handleEnded);

    return () => {
      audio.removeEventListener("timeupdate", updateTime);
      audio.removeEventListener("loadedmetadata", updateDuration);
      audio.removeEventListener("ended", handleEnded);
    };
  }, []);

  const togglePlay = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      try {
        await audio.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error playing audio:", error);
        setIsPlaying(false);
      }
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const audio = audioRef.current;
    if (!audio) return;

    const time = parseFloat(e.target.value);
    audio.currentTime = time;
    setCurrentTime(time);
  };

  const formatTime = (seconds: number) => {
    if (isNaN(seconds)) return "0:00";
    const mins = Math.floor(seconds / 60);
    const secs = Math.floor(seconds % 60);
    return `${mins}:${secs.toString().padStart(2, "0")}`;
  };

  const progress = duration ? (currentTime / duration) * 100 : 0;

  return (
    <div className="scrap tape border border-foreground/80 p-6 sm:p-8">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <span className="kicker">The podcast</span>
        <span className="text-xs font-bold uppercase tracking-[0.08em] text-muted-foreground">
          {formatDay(episode.publishedAt)} · {episode.duration}
        </span>
      </div>
      <h3 className="font-display mt-5 text-3xl sm:text-4xl">{episode.title}</h3>
      <p className="mt-4 max-w-3xl text-sm leading-relaxed text-foreground/80 sm:text-base">{episode.description}</p>

      {episode.audioPending ? (
        <p className="font-marker mt-6 text-lg text-accent">
          The audio for this episode is being produced and will appear here shortly.
        </p>
      ) : (
        <>
          <audio ref={audioRef} src={episode.audioUrl} preload="metadata" />
          <div className="mt-6 flex items-center gap-4">
            <button
              onClick={togglePlay}
              className="flex h-14 w-14 shrink-0 items-center justify-center bg-primary text-primary-foreground transition-opacity hover:opacity-85"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? <Pause className="h-6 w-6" /> : <Play className="ml-0.5 h-6 w-6" />}
            </button>
            <div className="flex-1">
              <input
                type="range"
                min="0"
                max={duration || 0}
                value={currentTime}
                onChange={handleSeek}
                aria-label="Seek"
                style={{
                  background: `linear-gradient(to right, var(--cobalt) ${progress}%, var(--muted) ${progress}%)`,
                }}
                className="h-1.5 w-full cursor-pointer appearance-none [&::-moz-range-thumb]:h-4 [&::-moz-range-thumb]:w-4 [&::-moz-range-thumb]:border-0 [&::-moz-range-thumb]:bg-foreground [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-foreground"
              />
              <div className="mt-2 flex justify-between text-xs font-semibold text-muted-foreground">
                <span>{formatTime(currentTime)}</span>
                <span>{episode.duration}</span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}
