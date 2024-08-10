import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from '@headlessui/react';
import { Fragment, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

// Define the props interface with TypeScript
interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: ReactNode;
  classNames?: {
    panel?: string;
    container?: string;
  };
}

export const Modal: React.FC<ModalProps> = ({
  isOpen,
  onClose,
  children,
  classNames,
}) => {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10 " onClose={onClose}>
        <TransitionChild
          as={Fragment}
          appear
          enter="ease-out duration-200"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-100"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 transition-all bg-black/40 backdrop-blur-xs" />
        </TransitionChild>

        <div
          className={twMerge(
            'fixed inset-0 z-10 overflow-y-auto flex justify-center items-center h-full overflow-hidden',
            classNames?.container
          )}
        >
          <DialogPanel className={classNames?.panel}>{children}</DialogPanel>
        </div>
      </Dialog>
    </Transition>
  );
};
