import { useLayoutEffect, useState } from 'react';

export const useWindowPosition = () => {
  const [scrollPosition, setPosition] = useState<number>(0);
  
   useLayoutEffect(() => {
    const updatePosition = () => {
      setPosition(window.scrollY);
    }
    window.addEventListener('scroll', updatePosition);
    return () => window.removeEventListener('scroll', updatePosition);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return {
    scrollPosition,
    scrollToTop,
  };
};