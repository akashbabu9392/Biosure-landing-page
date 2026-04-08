import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const NAVBAR_OFFSET_PX = 80;
const MAX_ATTEMPTS = 24;

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return false;

  const y = window.scrollY + el.getBoundingClientRect().top - NAVBAR_OFFSET_PX;
  window.scrollTo({ top: Math.max(0, y), behavior: "smooth" });
  return true;
}

export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    const hash = location.hash?.replace(/^#/, "");
    if (!hash) {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      return;
    }

    const id = decodeURIComponent(hash);
    let attempts = 0;

    const tryScroll = () => {
      attempts += 1;
      if (scrollToId(id)) return;
      if (attempts >= MAX_ATTEMPTS) return;
      requestAnimationFrame(tryScroll);
    };

    requestAnimationFrame(tryScroll);
  }, [location.hash, location.pathname]);

  return null;
}

