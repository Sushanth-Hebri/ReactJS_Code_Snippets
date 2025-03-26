import React from "react";
import "../css/SkeletonCard.css"; // Import styles

const SkeletonCard = () => {
  return (
    <div className="skeleton-card">
      <div className="skeleton-image"></div>
      <div className="skeleton-title"></div>
      <div className="skeleton-text"></div>
    </div>
  );
};

export default SkeletonCard;
