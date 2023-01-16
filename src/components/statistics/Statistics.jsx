import PropTypes from 'prop-types';
import css from 'components/statistics/Statistics.module.css';

function getRandomHexColor() { 
  // let bgColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
  // return bgColor;

let color =
    'rgb(' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ',' +
    Math.round(Math.random() * 255) +
    ')';

  return color;
}

const Statistics = ({ title, stats }) => { 
  return (
    <section className={css.statistics}>
      {title && <h2 className={css.title}>{title}</h2>}

      <ul className={css.statList}>
        {stats.map(stat => (
          <li className={css.item}
            style={{
              backroundColor: getRandomHexColor(),
            }}
            key={stat.id}
          >
          <span className={css.label}>{stat.label}</span>
            <span className={css.percentage}>{stat.percentage}%</span>
        </li>
        ))}
      </ul>
    </section>
  );
}

export default Statistics;

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};