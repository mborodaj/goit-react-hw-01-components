import React from "react";

const TransactionHistory = ({ children }) => {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <>{children}</>
    </table>
  );
};

export default TransactionHistory;
