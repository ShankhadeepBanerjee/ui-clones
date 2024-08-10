import React from 'react';
import { Clock, EllipsisVertical } from 'lucide-react';
import { IconButton } from './buttons';

interface VideoCardProps {
  thumbnailUrl: string;
  title: string;
  channelData: { name: string; image: string };
  views: string;
  uploadTime: string;
  duration: string;
}

export const VideoCard: React.FC<VideoCardProps> = ({
  thumbnailUrl,
  title,
  channelData,
  views,
  uploadTime,
  duration,
}) => {
  return (
    <div className="w-full rounded overflow-hidden shadow-lg text-white">
      <div className="relative">
        <img className="w-full rounded-xl" src={thumbnailUrl} alt={title} />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-75 px-1 rounded">
          <p className="text-xs">{duration}</p>
        </div>
      </div>
      <div className="flex py-4">
        <div className="flex-1 flex justify-start items-start max-w-fit">
          <img
            src={channelData?.image}
            alt=""
            className="rounded-full w-10 aspect-square"
          />
        </div>
        <div className="flex-[5] px-2">
          <div className="w-full font-medium mb-1 line-clamp-2">{title}</div>
          <div className="text-xs text-gray-400">{channelData?.name}</div>
          <div className="text-xs text-gray-400">
            {views} views • {uploadTime}
          </div>
        </div>
        <div className="flex-1 flex justify-start items-start max-w-fit">
          <IconButton>
            <EllipsisVertical fill="white" size={20} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};
