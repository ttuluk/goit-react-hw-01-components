import PropTypes from 'prop-types';

function TransactionHistory({ trans }) {
  return (
    <table className="transaction-history">
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      {trans.map(transEl => {
        return (
          <tbody key={transEl.id}>
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
