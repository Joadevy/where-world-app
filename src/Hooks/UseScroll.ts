import { useEffect } from "react";

// It'll save the scroll position state
const scrollPositions: any = {};

/* custom hook which will save the scroll state and also set  
the scroll position of the page */
const useScroll = (page: string) => {
  useEffect(() => {
    const pageScrollPosition = scrollPositions[page];

    if (pageScrollPosition) {
      setTimeout(() => {
        window.scrollTo(0, pageScrollPosition);
      }, 75);
    }

    const save = () => {
      scrollPositions[page] = window.scrollY;
    };

    window.addEventListener("scroll", save);

    return () => {
      window.removeEventListener("scroll", save);
    };
  }, [page]);
};

export default useScroll;
