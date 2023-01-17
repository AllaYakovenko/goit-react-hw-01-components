import PropTypes from 'prop-types';
import css from 'components/transactionHistory/TransactionHistory.module.css';

const TransactionHistory = ({ items }) => {
    return (
        <table className={css.transactionHistory}>
            <thead className={css.transactionProperty}>
                <tr>
                    <th className={css.transactionType}>Type</th>
                    <th className={css.transactionAmount}>Amount</th>
                    <th className={css.transactionCurrency}>Currency</th>
                </tr>
            </thead>

            <tbody>
                {items.map(item => (
                    <tr key={item.id}>
                        <td className={css.dataType}>{item.type}</td>
                        <td className={css.dataAmount}>{item.amount}</td>
                        <td className={css.dataCurrency}>{item.currency}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default TransactionHistory;

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.string.isRequired,
            type: PropTypes.string.isRequired,
            amount: PropTypes.string.isRequired,
            currency: PropTypes.string.isRequired,
        })
    ),
};

