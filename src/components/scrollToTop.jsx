import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useLenis } from "lenis/react";

export default function ScrollToTop() {
  const { pathname } = useLocation();
  const lenis = useLenis();

  useEffect(() => {
    if (lenis) {
      // instantly jump to top (no animation)
      lenis.scrollTo(0, { immediate: true });
    }
  }, [pathname, lenis]);

  return null;
}
