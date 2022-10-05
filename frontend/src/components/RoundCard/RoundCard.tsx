import React from "react";
import { Link } from "react-router-dom";
import "./RoundCard.scss";

type RoundCardProps = {
  label: string;
  imgUrl?: string;
  path?: string;
};

export const RoundCard: React.FC<RoundCardProps> = ({
  label,
  // imgUrl = "https://picsum.photos/800/600?random=2",
  imgUrl,
  path,
}) => {
  return path ? (
    <Link to={path} className="round-card">
      <img src={imgUrl} alt="" />
      <p>{label}</p>
    </Link>
  ) : (
    <div className="round-card">
      <img src={imgUrl} alt="" />
      <p>{label}</p>
    </div>
  );
};
