import React from "react";

const StatisticalData = ({ title, children }) => {
  return (
    <section class="statistics">
      <h2 class="title">{title}</h2>
      {children}
    </section>
  );
};

export default StatisticalData;
