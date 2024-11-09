import React, { useEffect } from 'react';
import ReactDOM from 'react-dom';

const RemoveChapter = ({ closeModal }) => {
  useEffect(() => {
    document.body.style.overflowY = 'hidden';
    return () => {
      document.body.style.overflowY = 'scroll';
    };
  }, []);

  return ReactDOM.createPortal(
    <div className="fixed top-0 left-0 w-screen h-screen bg-gray-800 bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
      <div className="bg-gray-900 text-white p-6 rounded-lg max-w-lg w-full sm:w-[500px] z-50 flex flex-col text-center shadow-lg hover:border-2 hover:border-white hover:shadow-2xl hover:shadow-gray-500 transition-all" onClick={(e) => e.stopPropagation()}>
        <h3 className="font-black underline text-white text-lg my-3">Remove Chapter</h3>
        <p className="text-sm mb-4">Are you sure you want to remove this chapter? This action cannot be undone.</p>
        <div className="flex justify-center space-x-4 mt-4">
          <button className="bg-red-500 text-white py-2 px-4 rounded-lg hover:bg-red-700 transition-colors font-bold" onClick={closeModal}>
            Remove
          </button>
          <button className="bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-700 transition-colors font-bold" onClick={closeModal}>
            Cancel
          </button>
        </div>
      </div>
    </div>,
    document.querySelector('.myPortalModalDiv')
  );
};

export default RemoveChapter;
