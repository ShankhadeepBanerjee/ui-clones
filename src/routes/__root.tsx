import React, {
  useState,
  useCallback,
  DetailedHTMLProps,
  MouseEvent,
} from 'react';
import { createRootRoute, Link, Outlet } from '@tanstack/react-router';
import { TanStackRouterDevtools } from '@tanstack/router-devtools';
import { Home, GripVertical } from 'lucide-react';

const DraggableNavigation = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });

  const handleMouseDown = useCallback(
    (e: MouseEvent) => {
      setIsDragging(true);
      setDragStart({
        x: e.clientX - position.x,
        y: e.clientY - position.y,
      });
    },
    [position]
  );

  const handleMouseMove = useCallback(
    (e: any) => {
      if (isDragging) {
        setPosition({
          x: e.clientX - dragStart.x,
          y: e.clientY - dragStart.y,
        });
      }
    },
    [isDragging, dragStart]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  React.useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [handleMouseMove, handleMouseUp]);

  return (
    <nav
      className="p-2 flex items-center gap-2 fixed z-50 rounded-2xl bg-white shadow-lg opacity-60 hover:opacity-100"
      style={{
        top: `${position.y}px`,
        left: `${position.x}px`,
      }}
    >
      <div
        className="flex justify-center items-center cursor-move"
        onMouseDown={handleMouseDown}
      >
        <GripVertical size={20} />
      </div>
      <Link
        to={'/'}
        className="group [&.active]:font-bold flex gap-2 items-center w-6 hover:w-28 transition-all duration-300 ease-in-out"
      >
        <div className="w-8 flex justify-center items-center">
          <Home size={20} />
        </div>
        <span className="whitespace-nowrap group-hover:opacity-100 group-hover:translate-x-0 group-hover:scale-100 scale-0 opacity-0 -translate-x-full transition-all duration-300">
          Go Home
        </span>
      </Link>
    </nav>
  );
};

const RootLayout = () => (
  <div className="h-screen">
    <DraggableNavigation />
    <Outlet />
    <TanStackRouterDevtools />
  </div>
);

export const Route = createRootRoute({
  component: RootLayout,
});
