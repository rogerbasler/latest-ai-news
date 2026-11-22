import { useEffect, useState } from "react";
import { X } from "lucide-react";

const KEY = "privacy-note-seen";
const BASE = import.meta.env.BASE_URL;

// Small information note (not a consent banner): the site sets no cookies and does no tracking.
export default function PrivacyNote() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setShow(true);
    } catch {
      setShow(true);
    }
  }, []);

  const close = () => {
    setShow(false);
    try {
      localStorage.setItem(KEY, "1");
    } catch {
      /* storage unavailable: the note shows again on the next visit */
    }
  };

  if (!show) return null;

  return (
    <div
      role="region"
      aria-label="Privacy information"
      className="scrap fixed inset-x-4 bottom-4 z-[60] border border-foreground/80 p-4 pr-11 text-sm leading-relaxed sm:inset-x-auto sm:left-6 sm:max-w-sm"
    >
      <p className="font-extrabold">Privacy, in short</p>
      <p className="mt-1 text-foreground/85">
        No cookies, no tracking. Spotify and Substack players load only when you click them.{" "}
        <a href={`${BASE}?page=legal#privacy`} className="font-bold text-primary underline-offset-4 hover:underline">
          Privacy notice
        </a>
      </p>
      <button
        onClick={close}
        className="mt-3 bg-primary px-4 py-2 text-xs font-extrabold uppercase tracking-[0.06em] text-primary-foreground transition-opacity hover:opacity-85"
      >
        OK
      </button>
      <button
        onClick={close}
        aria-label="Close"
        className="absolute right-3 top-3 flex h-7 w-7 items-center justify-center hover:text-primary"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}
