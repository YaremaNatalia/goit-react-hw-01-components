import PropTypes from 'prop-types';
import css from './Statistics.module.css';
import { generateRandomColor } from 'utils'; //імпортуємо функцію з папки utils (автоматично підтягує з index.js в папці, де знаходяться реекспорти всіх функцій та констант (CTRL пробіл щоб викликати підказку в фігурних дужках імпортування))
import { Children } from 'react';
// функція generateRandomColor() генерування випадкового кольору для елементів li

export const Statistics = ({ title, stats }) => {
  return (
    <section className={css.statistics}>
      {/* titlе рендериться за умовою, якщо він є  */}
      {title && <h2 className={css.title}>{title}</h2>}
      <ul className={css.statList}>
        {stats.map(({ id, label, percentage }) => {
          const randomColor = generateRandomColor();
          return (
            <li
              key={id}
              className={css.item}
              style={{ backgroundColor: randomColor }}
            >
              <span className={css.label}>{label}</span>
              <span className={css.percentage}>{percentage}%</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ).isRequired,
};
// якщо використвуємo не всі поля обєкта що приходить з бекенду (пропси), тоді краще прописати PropTypes.shape
