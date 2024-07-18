import { useEffect, useState } from "react";

export const useMediaQuery = (query: string): boolean => {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const resizeLister = () => setMatches(media.matches);
    window.addEventListener("resize", resizeLister);
    return () => {
      window.removeEventListener("resize", resizeLister);
    };
  }, [query, matches]);
  return matches;
};
