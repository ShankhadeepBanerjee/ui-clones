import React, { useState, useRef, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { CategoryButton, IconButton } from './buttons';

type Props = {};

export const CategoryStrip = (props: Props) => {
  const categories = [
    'All',
    'News',
    'Music',
    'APIs',
    'Computer programming',
    'Sadhguru',
    'Consciousness',
    'Live',
    'Mixes',
    'Ancient History',
    'Practice',
    'Intelligence',
    'Mantras',
    'APIs',
    'Computer programming',
    'Sadhguru',
    'Consciousness',
    'Sadhguru',
    'Consciousness',
    'Live',
    'Mixes',
    'Ancient History',
    'Practice',
  ];

  const [showLeftArrow, setShowLeftArrow] = useState(false);
  const [showRightArrow, setShowRightArrow] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkScroll = () => {
      if (containerRef.current) {
        const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
        setShowLeftArrow(scrollLeft > 0);
        setShowRightArrow(scrollLeft < scrollWidth - clientWidth);
      }
    };

    checkScroll();
    window.addEventListener('resize', checkScroll);
    return () => window.removeEventListener('resize', checkScroll);
  }, []);

  const handleScroll = () => {
    if (containerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = containerRef.current;
      setShowLeftArrow(scrollLeft > 0);
      setShowRightArrow(scrollLeft < scrollWidth - clientWidth - 1);
    }
  };

  const scroll = (direction: 'left' | 'right') => {
    if (containerRef.current) {
      const scrollAmount = containerRef.current.clientWidth / 4;
      containerRef.current.scrollBy({
        left: direction === 'left' ? -scrollAmount : scrollAmount,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="flex items-center justify-between relative h-full w-full">
      <div
        ref={containerRef}
        className="flex space-x-2 overflow-x-auto no-scrollbar relative"
        onScroll={handleScroll}
      >
        {categories.map((category, index) => (
          <CategoryButton key={index} text={category} isActive={index === 0} />
        ))}
      </div>

      {/* Left Arrow */}
      {showLeftArrow && (
        <div className="h-full absolute left-0 flex w-24">
          <div className="pl-2 flex-1 flex justify-center items-center dark:bg-youtube-primary-dark">
            <IconButton
              className="flex justify-center items-center"
              onClick={() => scroll('left')}
            >
              <ChevronLeft size={20} />
            </IconButton>
          </div>
          <div className="flex-1 h-full bg-gradient-to-r from-youtube-primary-dark from-30% to-transparent"></div>
        </div>
      )}

      {/* Right Arrow */}
      {showRightArrow && (
        <div className="h-full absolute right-0 flex w-24">
          <div className="flex-1 h-full bg-gradient-to-r to-youtube-primary-dark from-70% from-transparent"></div>
          <div className="pr-2 flex-1 flex justify-center items-center dark:bg-youtube-primary-dark">
            <IconButton
              className="flex justify-center items-center"
              onClick={() => scroll('right')}
            >
              <ChevronRight size={20} />
            </IconButton>
          </div>
        </div>
      )}
    </div>
  );
};
