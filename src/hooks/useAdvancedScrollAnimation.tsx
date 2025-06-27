
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

interface AdvancedScrollAnimationOptions {
  threshold?: number;
  triggerOnce?: boolean;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade';
  distance?: number;
  immediatelyVisible?: boolean;
}

export const useAdvancedScrollAnimation = (options: AdvancedScrollAnimationOptions = {}) => {
  const { 
    threshold = 0.1, 
    triggerOnce = true, 
    delay = 0,
    direction = 'up',
    distance = 50,
    immediatelyVisible = false
  } = options;
  
  const [isVisible, setIsVisible] = useState(immediatelyVisible);
  const timeoutRef = useRef<NodeJS.Timeout>();

  const { ref, inView } = useInView({
    threshold,
    triggerOnce,
  });

  useEffect(() => {
    if (immediatelyVisible) {
      setIsVisible(true);
      return;
    }

    if (inView && !isVisible) {
      if (delay > 0) {
        timeoutRef.current = setTimeout(() => {
          setIsVisible(true);
        }, delay);
      } else {
        setIsVisible(true);
      }
    }

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [inView, isVisible, delay, immediatelyVisible]);

  const getAnimationProps = () => {
    const baseProps = {
      initial: {} as any,
      animate: {} as any,
      transition: {
        duration: 0.8,
        ease: "easeOut" as const,
        delay: delay / 1000,
      },
    };

    // If immediately visible, start with visible state
    if (immediatelyVisible) {
      switch (direction) {
        case 'up':
          baseProps.initial = { opacity: 1, y: 0 };
          baseProps.animate = { opacity: 1, y: 0 };
          break;
        case 'down':
          baseProps.initial = { opacity: 1, y: 0 };
          baseProps.animate = { opacity: 1, y: 0 };
          break;
        case 'left':
          baseProps.initial = { opacity: 1, x: 0 };
          baseProps.animate = { opacity: 1, x: 0 };
          break;
        case 'right':
          baseProps.initial = { opacity: 1, x: 0 };
          baseProps.animate = { opacity: 1, x: 0 };
          break;
        case 'scale':
          baseProps.initial = { opacity: 1, scale: 1 };
          baseProps.animate = { opacity: 1, scale: 1 };
          break;
        case 'fade':
          baseProps.initial = { opacity: 1 };
          baseProps.animate = { opacity: 1 };
          break;
        default:
          baseProps.initial = { opacity: 1, y: 0 };
          baseProps.animate = { opacity: 1, y: 0 };
      }
    } else {
      // Normal scroll-triggered animation
      switch (direction) {
        case 'up':
          baseProps.initial = { opacity: 0, y: distance };
          baseProps.animate = isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: distance };
          break;
        case 'down':
          baseProps.initial = { opacity: 0, y: -distance };
          baseProps.animate = isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: -distance };
          break;
        case 'left':
          baseProps.initial = { opacity: 0, x: distance };
          baseProps.animate = isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: distance };
          break;
        case 'right':
          baseProps.initial = { opacity: 0, x: -distance };
          baseProps.animate = isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: -distance };
          break;
        case 'scale':
          baseProps.initial = { opacity: 0, scale: 0.8 };
          baseProps.animate = isVisible ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 };
          break;
        case 'fade':
          baseProps.initial = { opacity: 0 };
          baseProps.animate = isVisible ? { opacity: 1 } : { opacity: 0 };
          break;
        default:
          baseProps.initial = { opacity: 0, y: distance };
          baseProps.animate = isVisible ? { opacity: 1, y: 0 } : { opacity: 0, y: distance };
      }
    }

    return baseProps;
  };

  return { ref, isVisible, inView, animationProps: getAnimationProps() };
};

export const useStaggeredScrollAnimation = (itemCount: number, baseDelay = 100, direction: 'up' | 'down' | 'left' | 'right' | 'scale' | 'fade' = 'up') => {
  const [visibleItems, setVisibleItems] = useState<boolean[]>(new Array(itemCount).fill(false));
  const { ref, inView } = useInView({
    threshold: 0.1,
    triggerOnce: true,
  });

  useEffect(() => {
    if (inView) {
      visibleItems.forEach((_, index) => {
        setTimeout(() => {
          setVisibleItems(prev => {
            const newArray = [...prev];
            newArray[index] = true;
            return newArray;
          });
        }, index * baseDelay);
      });
    }
  }, [inView, baseDelay, itemCount]);

  const getItemAnimationProps = (index: number, distance = 50) => {
    const baseProps = {
      initial: {} as any,
      animate: {} as any,
      transition: {
        duration: 0.6,
        ease: "easeOut" as const,
        delay: (index * baseDelay) / 1000,
      },
    };

    switch (direction) {
      case 'up':
        baseProps.initial = { opacity: 0, y: distance };
        baseProps.animate = visibleItems[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: distance };
        break;
      case 'down':
        baseProps.initial = { opacity: 0, y: -distance };
        baseProps.animate = visibleItems[index] ? { opacity: 1, y: 0 } : { opacity: 0, y: -distance };
        break;
      case 'left':
        baseProps.initial = { opacity: 0, x: distance };
        baseProps.animate = visibleItems[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: distance };
        break;
      case 'right':
        baseProps.initial = { opacity: 0, x: -distance };
        baseProps.animate = visibleItems[index] ? { opacity: 1, x: 0 } : { opacity: 0, x: -distance };
        break;
      case 'scale':
        baseProps.initial = { opacity: 0, scale: 0.8 };
        baseProps.animate = visibleItems[index] ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 };
        break;
      case 'fade':
        baseProps.initial = { opacity: 0 };
        baseProps.animate = visibleItems[index] ? { opacity: 1 } : { opacity: 0 };
        break;
    }

    return baseProps;
  };

  return { ref, visibleItems, getItemAnimationProps };
};
