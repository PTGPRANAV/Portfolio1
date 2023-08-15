import React from 'react';
import './ScrollPreviewWindow.css'; // Import your CSS file

const ScrollPreviewWindow = ({ content, scrollPosition }) => {
  const handlePreviewScroll = (e) => {
    const { scrollTop, scrollHeight, clientHeight } = e.target;
    const scrollPercentage = (scrollTop / (scrollHeight - clientHeight)) * 100;
    const previewScroll = (scrollPercentage / 100) * (scrollHeight - clientHeight);
    // scrollPosition(previewScroll);
  };

  return (
    <div className="scroll-preview-window" onScroll={handlePreviewScroll}>
      {content}
    </div>
  );
};

export default ScrollPreviewWindow;
