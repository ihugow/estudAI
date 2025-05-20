import React from "react";
import { Link, Route } from "react-router-dom";

const EstudAI = ({ className = "" }) => {
  return (
    <Link to="/">
      <div className={`flex items-center gap-2.5 w-fit ${className}`} href="#">
        <span className="text-white text-3xl font-extrabold">
          Estud<span className="main-gradient">AI</span>
        </span>
      </div>
    </Link>
  );
};

const EstudAINav = ({ className = "" }) => {
  return (
    <Link to="/">
      <div className={`flex items-center gap-2.5 w-fit ${className}`} href="#">
        <span className="text-white text-3xl font-extrabold ">
          Estud<span className="main-gradient">AI</span>
        </span>
      </div>
    </Link>
  );
};

export { EstudAI, EstudAINav };
