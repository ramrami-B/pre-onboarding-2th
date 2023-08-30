import { useRef } from 'react';

const useIntersectionObserver = (callback: any) => {
  const observer = useRef(
    new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          callback();
        }
      });
    }),
  );

  const observe = (element: any) => {
    observer.current.observe(element);
  };

  const unobserve = (element: any) => {
    observer.current.unobserve(element);
  };
  return [observe, unobserve];
};

export default useIntersectionObserver;
