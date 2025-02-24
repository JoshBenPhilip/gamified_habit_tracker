import "./game_comp_lib.css";

import React from "react";

interface ProgressBarProps {
  progress: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({ progress }) => {
  return (
    <div className="progress-bar">
      <div className="inner-prog-bar" style={{ width: `${progress}%` }}></div>
    </div>
  );
};
