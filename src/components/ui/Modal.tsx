import { Dialog, Transition } from "@headlessui/react";
import { Fragment, ReactNode } from "react";

interface ModalProps {
  open: boolean;
  onClose: (v: boolean) => void;
  title?: ReactNode;
  children: ReactNode;
  size?: "sm" | "md" | "lg";
  footer?: ReactNode;
}

const sizeMap = {
  sm: "sm:max-w-sm",
  md: "sm:max-w-lg",
  lg: "sm:max-w-2xl",
};

function CloseIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

function Modal({ open, onClose, title, children, size = "md", footer }: ModalProps) {
  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="relative z-50" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-forest-700/60 backdrop-blur-sm transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 sm:items-center sm:p-6 font-nunito">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-6 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-6 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel
                className={`relative w-full ${sizeMap[size]} overflow-hidden rounded-3xl bg-cream-50 text-left shadow-[0_40px_80px_-30px_rgba(19,41,26,0.55)] ring-1 ring-black/5`}
              >
                {(title || true) && (
                  <div className="flex items-start justify-between gap-4 px-6 pt-5">
                    <div className="flex-1">
                      {title && (
                        <Dialog.Title className="text-lg font-display font-bold text-forest-700">
                          {title}
                        </Dialog.Title>
                      )}
                    </div>
                    <button
                      type="button"
                      aria-label="Close"
                      onClick={() => onClose(false)}
                      className="rounded-full bg-white/80 text-forest-700 p-2 ring-1 ring-black/5 hover:bg-white focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-600/40"
                    >
                      <CloseIcon />
                    </button>
                  </div>
                )}

                <div className="px-6 pb-6 pt-4">{children}</div>

                {footer && (
                  <div className="border-t border-forest-700/5 bg-white/50 px-6 py-4">
                    {footer}
                  </div>
                )}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default Modal;
