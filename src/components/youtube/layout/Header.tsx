import { AlignJustify, Search, Bell } from 'lucide-react';
import { IconButton } from '../buttons';
import LogoSVG from '@assets/youtube/logo.svg';
import MicSVG from '@assets/youtube/icons/mic.svg';
import VidCreateSVG from '@assets/youtube/icons/vid-create.svg';

interface HeaderProps {
  toggleSidebar: () => void;
}

export const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <header className="flex items-center justify-between px-4 py-2">
      <div className="flex items-center space-x-4">
        <IconButton onClick={toggleSidebar}>
          <AlignJustify size={24} color="#ffffff" strokeWidth={0.75} />
        </IconButton>
        <div className="w-24 overflow-hidden text-white">
          <LogoSVG />
        </div>
      </div>
      <div className="flex gap-2 items-center w-2/5 mx-4">
        <div className="flex flex-1">
          <input
            type="text"
            placeholder="Search"
            className="w-full bg-[#121212] border border-[#303030] text-white px-4 py-2 rounded-l-full focus:outline-none focus:border-blue-500"
          />
          <button className="bg-[#222222] px-5 rounded-r-full border border-[#303030] border-l-0 hover:bg-[#313131]">
            <Search size={20} strokeWidth={1.5} />
          </button>
        </div>
        <IconButton className="bg-[#272727] hover:bg-gray-600">
          <MicSVG />
        </IconButton>
      </div>
      <div className="flex items-center space-x-4">
        <IconButton>
          <VidCreateSVG />
        </IconButton>
        <IconButton>
          <Bell size={22} strokeWidth={1.5} />
        </IconButton>
        <div className="w-8 h-8 bg-purple-500 rounded-full"></div>
      </div>
    </header>
  );
};
