import React from "react";
import "./RoundCard.scss";

type RoundCardProps = {
  label: string;
  imgUrl?: string;
};

export const RoundCard: React.FC<RoundCardProps> = ({
  label,
  imgUrl = "https://picsum.photos/800/600?random=2",
}) => {
  return (
    <div className="round-card">
      <img src={imgUrl} alt="" />
      <p>{label}</p>
    </div>
  );
};
