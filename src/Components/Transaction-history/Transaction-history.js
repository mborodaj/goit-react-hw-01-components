import React from 'react';
import propTypes from 'prop-types';
import styles from './Transaction-history.module.css';

const TransactionHistory = ({ transactions }) => {
  console.log(transactions);
  return (
    <table className={styles.transaction__table}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {transactions.map(transaction => {
          return (
            <tr key={transaction.id}>
              <td>{transaction.type}</td>
              <td>{transaction.amount}</td>
              <td>{transaction.currency}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
