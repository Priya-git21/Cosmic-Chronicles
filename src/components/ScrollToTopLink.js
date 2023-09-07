import React from "react";
import { Link } from "react-router-dom";

const ScrollToTopLink = ({ to, children, ...rest }) => {
  const scrollToTop = (e) => {
    if (rest.onClick) {
      rest.onClick(e); // Call the provided onClick handler if it exists
    }
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <Link to={to} onClick={scrollToTop}>
      {children}
    </Link>
  );
};

export default ScrollToTopLink;
