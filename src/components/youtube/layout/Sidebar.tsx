import {
  PlaySquare,
  Clock,
  ThumbsUp,
  AlignJustify,
  History,
} from 'lucide-react';
import { twMerge } from 'tailwind-merge';
import LogoSVG from '@assets/youtube/logo.svg';
import Home from '@assets/youtube/icons/home.svg';
import Shorts from '@assets/youtube/icons/shorts.svg';
import Subscription from '@assets/youtube/icons/subscription.svg';
import SidebarYou from '@assets/youtube/icons/sidebar-you.svg';
import YourChannel from '@assets/youtube/icons/your-channel.svg';
import Playlist from '@assets/youtube/icons/playlist.svg';
import { IconButton } from '../buttons';

// SidebarItem Component
interface SidebarItemProps {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, text, active }) => (
  <IconButton
    className={twMerge(
      'flex items-center space-x-6 px-3 py-2 rounded-xl w-full text-sm hover:bg-white/10 active:bg-gray-600/70',
      'duration-100',
      active ? 'bg-white/10' : 'bg-transparent '
    )}
    title={text}
  >
    <div className="w-[1.45rem] flex justify-center">{icon}</div>
    <span>{text}</span>
  </IconButton>
);

// Sidebar Component
interface SidebarProps {
  isOpen?: boolean;
}

export const SideBar: React.FC<SidebarProps> = ({ isOpen }) => {
  return (
    <aside
      className={'dark:bg-youtube-primary-dark text-white/90 font-medium '}
    >
      <div className="2xl:block hidden overflow-y-auto">
        {isOpen ? <SidebarContent /> : <SidebarCollapsed />}
      </div>
      <div className="block 2xl:hidden">
        <SidebarCollapsed />
      </div>
    </aside>
  );
};

// SidebarContent Component
const SidebarContent = () => (
  <div className="px-3 pt-3 h-full scrollbar-appear scrollbar-gutter">
    <SidebarItem icon={<Home />} text="Home" active />
    <SidebarItem icon={<Shorts />} text="Shorts" />
    <SidebarItem icon={<Subscription />} text="Subscriptions" />
    <hr className="my-2 border-gray-700" />

    <SidebarItem icon={<YourChannel />} text="Your Channel" />
    <SidebarItem icon={<Playlist />} text="Playlists" />
    <SidebarItem
      icon={<History size={32} strokeWidth={1.75} />}
      text="History"
    />

    <SidebarItem
      icon={<ThumbsUp size={32} strokeWidth={0.75} />}
      text="Likes"
    />
    <hr className="my-2 border-gray-700" />

    <SidebarItem icon={<Shorts />} text="Shorts" />
    <SidebarItem icon={<Subscription />} text="Subscriptions" />
    <hr className="my-2 border-gray-700" />

    <SidebarItem icon={<Shorts />} text="Shorts" />
    <SidebarItem icon={<Subscription />} text="Subscriptions" />
    <hr className="my-2 border-gray-700" />

    <SidebarItem icon={<PlaySquare size={24} />} text="Your channel" />
    <SidebarItem icon={<Clock size={24} />} text="History" />
    <SidebarItem icon={<PlaySquare size={24} />} text="Your videos" />
    <SidebarItem icon={<Clock size={24} />} text="Watch later" />
    <SidebarItem icon={<ThumbsUp size={24} />} text="Liked videos" />
    <hr className="my-2 border-gray-700" />
    <h3 className="font-semibold mt-2 mb-2">Subscriptions</h3>
    {/* Add subscription items here */}
  </div>
);

// SidebarCollapsed Component
const SidebarCollapsed = () => (
  <div className="w-20 pr-3 pt-1 flex flex-col gap-1 justify-start h-full pl-1 text-[0.625rem]">
    {icons.map(({ Component, label }, index) => (
      <IconButton
        key={index}
        className="w-full py-4 rounded-lg flex justify-center hover:bg-white/10 duration-100"
      >
        <div className="h-fit w-6 flex flex-col gap-[0.35rem] items-center text-center">
          <Component />
          <span>{label}</span>
        </div>
      </IconButton>
    ))}
  </div>
);

// SidebarPanal2 Component
interface SidebarPanal2Props {
  toggleSidebar: () => void;
}

export const SidebarPanal2: React.FC<SidebarPanal2Props> = ({
  toggleSidebar,
}) => {
  return (
    <div
      className={twMerge(
        'w-60 pt-2 h-[100dvh] font-youtube dark:bg-youtube-primary-dark text-white/90 font-medium '
      )}
    >
      <div className="flex items-center space-x-4 pl-4">
        <IconButton onClick={toggleSidebar}>
          <AlignJustify size={24} color="#ffffff" strokeWidth={0.75} />
        </IconButton>
        <div className="w-24 overflow-hidden text-white">
          <LogoSVG />
        </div>
      </div>
      <div className="pt-2 h-full">
        <SidebarContent />
      </div>
    </div>
  );
};

// Icons Array
const icons = [
  { Component: Home, label: 'Home' },
  { Component: Shorts, label: 'Shorts' },
  { Component: Subscription, label: 'Subscriptions' },
  { Component: SidebarYou, label: 'You' },
];
