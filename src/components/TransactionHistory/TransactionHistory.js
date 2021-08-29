import PropTypes from 'prop-types';
import TransactionLine from './TransactionLine';
import s from './TransactionHistory.module.css';

function TransactionHistory({ data }) {
  return (
    <table className={s.transactionHistory}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>
        {data.map(operation => (
          <TransactionLine
            type={operation.type}
            amount={operation.amount}
            currency={operation.currency}
          />
        ))}
      </tbody>
    </table>
  );
}

TransactionHistory.propTypes = {};

export default TransactionHistory;
