// src/components/ScrollHandler.jsx
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollHandler() {
  const { search, hash, state } = useLocation();

  useEffect(() => {
    // determine target: query param ?scroll=contact OR hash (#contact) OR state.scrollTo
    const params = new URLSearchParams(search);
    const target = params.get("scroll") || (hash ? hash.replace("#", "") : null) || (state && state.scrollTo);

    if (!target) return;

    // small delay to ensure page content mounted (50ms is usually fine)
    const t = setTimeout(() => {
      const el = document.querySelector(`#${target}`);
      if (el) {
        el.scrollIntoView({ behavior: "smooth", block: "start" });
        // optional: update history to remove query so repeated loads not triggered
        try {
          const url = new URL(window.location.href);
          url.searchParams.delete("scroll");
          window.history.replaceState({}, "", url.pathname + url.hash);
        } catch (e) {
          // ignore
        }
      } else {
        // fallback: scroll to top if element not found
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    }, 60);

    return () => clearTimeout(t);
  }, [search, hash, state]);

  return null;
}
