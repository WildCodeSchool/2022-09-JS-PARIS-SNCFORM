import React from "react";
import { Link } from "react-router-dom";
import "./RedirectLink.scss";

type RedirectLinkProps = {
  message: string;
  span: string;
  path: string;
};

export const RedirectLink: React.FC<RedirectLinkProps> = ({
  message,
  span,
  path,
}) => {
  return (
    <div className="redirect-link">
      <p>
        {message}
        <span>
          <Link to={path}>{span}</Link>
        </span>
      </p>
    </div>
  );
};
