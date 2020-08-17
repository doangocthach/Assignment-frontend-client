import React from "react";

export default ({ size }) => {
  return (
    <div
      className="spinning-wrapper"
      style={{ margin: "auto", textAlign: "center", fontSize: size || "1rem" }}
    >
      <i className="fa fa-spinner fa-spin"></i>
    </div>
  );
};
