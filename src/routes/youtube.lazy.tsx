import { createLazyFileRoute } from '@tanstack/react-router';
import { useEffect, useState } from 'react';

import {
  SideBar,
  VideoCard,
  Header,
  SidebarPanal2,
  CategoryStrip,
} from '@components/youtube';

import '@assets/youtube/styles/styles.css';
import { Modal } from '@components/common';
import { TransitionChild } from '@headlessui/react';

export const Route = createLazyFileRoute('/youtube')({
  component: Index,
});

function Index() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isScreen2XL, setIsScreen2XL] = useState(window.innerWidth >= 1536);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1536) {
        setIsScreen2XL(true);
      } else {
        setIsScreen2XL(false);
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="dark:bg-youtube-primary-dark w-full h-screen text-white flex flex-col font-youtube">
      <Header toggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />
      <main className="flex flex-1 overflow-hidden">
        {/* Sidebar */}
        <nav>
          <SideBar isOpen={isSidebarOpen} />

          <div className="block 2xl:hidden">
            <Modal
              isOpen={!isScreen2XL && isSidebarOpen}
              onClose={() => setIsSidebarOpen(false)}
              classNames={{
                container: 'justify-start items-start',
              }}
            >
              <TransitionChild
                appear
                as="div"
                enter="transform transition-transform ease-in duration-200"
                enterFrom="-translate-x-full"
                enterTo="translate-x-0"
                leave="transform transition-transform ease-out duration-200"
                leaveFrom="translate-x-0"
                leaveTo="-translate-x-full"
              >
                <SidebarPanal2 toggleSidebar={() => setIsSidebarOpen(false)} />
              </TransitionChild>
            </Modal>
          </div>
        </nav>

        <div className="flex-1 overflow-y-auto flex flex-col relative pt-16x">
          {/* Category strip */}
          <div className="py-5 flex items-center w-full px-6 sticky z-10 top-0 left-0 dark:bg-youtube-primary-dark">
            <CategoryStrip />
          </div>

          {/* Videos grid */}
          <div className="grid grid-cols-3 2xl:grid-cols-4 gap-x-4 gap-y-8 p-6">
            {videosList.map((video, index) => (
              <VideoCard
                key={index}
                thumbnailUrl={video.thumbnailUrl}
                title={video.title}
                channelData={video.channelData}
                views={video.views}
                uploadTime={video.uploadTime}
                duration={video.duration}
              />
            ))}
          </div>
        </div>
      </main>
    </div>
  );
}

const thumbnailImage =
  'https://i.ytimg.com/vi/qCuly5ZAQmc/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDvoZ8yMERFtr6bAS-GCaPTGS2-9Q';
const channelImage =
  'https://yt3.ggpht.com/ytc/AIdro_lxmhK5QWC6aJ0L6zCL2S97AMOAcAEKEBFIhbLMPDxjRVc=s68-c-k-c0x00ffffff-no-rj';

const videosList = [
  {
    thumbnailUrl: thumbnailImage,
    title:
      'Reliable and high performance cloud services performance cloud services performance cloud services performance cloud services',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '18K',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  {
    thumbnailUrl: thumbnailImage,
    title: 'From Zero to Six Figures salary: The ultimate guide',
    channelData: { name: 'Deven U Pandey', image: channelImage },
    views: '23',
    uploadTime: '12 days ago',
    duration: '2:22',
  },
  // Add more video objects here
];
