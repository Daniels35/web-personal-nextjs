import React from 'react';

interface ModalProps {
  onClose: () => void;
  children: React.ReactNode;
  maxWidth?: string;
}

export default function Modal({ onClose, children, maxWidth = "max-w-3xl" }: ModalProps) {
  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 backdrop-blur-sm bg-black/70 transition-opacity"
      onClick={onClose}
    >
      <div 
        className={`relative w-full ${maxWidth} max-h-[90vh] overflow-y-auto bg-white dark:bg-[#151515] rounded-xl shadow-2xl custom-scrollbar transition-all`}
        style={{ 
          boxShadow: '0 0 25px var(--skin-color)', 
          border: '1px solid var(--skin-color)' 
        }}
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          onClick={onClose}
          className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-200 hover:bg-red-500 hover:text-white transition-colors z-10"
        >
          <i className="fa fa-times text-xl"></i>
        </button>

        {children}
      </div>
    </div>
  );
}