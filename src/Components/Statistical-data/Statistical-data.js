import React from "react";

const StatisticalData = ({ title, children }) => {
  return (
    <section className="statistics">
      <h2 className="title">{title}</h2>
      {children}
    </section>
  );
};

export default StatisticalData;
