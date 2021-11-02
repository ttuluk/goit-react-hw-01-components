import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

function TransactionHistory({ trans }) {
  return (
    <table className={styles.transaction_history}>
      <thead className={styles.transaction_head}>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {trans.map(transEl => {
        return (
          <tbody key={transEl.id} className={styles.transaction_body}>
            <tr>
              <td>{transEl.type}</td>
              <td>{transEl.amount}</td>
              <td>{transEl.currency}</td>
            </tr>
          </tbody>
        );
      })}
    </table>
  );
}

TransactionHistory.propTypes = {
  type: PropTypes.string.isRequired,
  currency: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
};

export default TransactionHistory;
