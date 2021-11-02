import PropTypes from 'prop-types';
import s from './Statistics.module.css';

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

export default function Statistics({ title, items }) {
  return (
    <section className={s.statistics}>
      {title && <h2 className={s.title}>{title}</h2>}
      <ul className={s.stat_list}>
        {items.map(item => (
          <li
            className={s.item}
            style={{ backgroundColor: randomColor() }}
            key={item.id}
          >
            <span className="label">{item.label}</span>
            <span className="percentage">
              {item.percentage}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}

Statistics.propTypes = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    }),
  ),
};
