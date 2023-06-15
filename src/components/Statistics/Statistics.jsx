import data from 'data/data';
import css from './Statistics.module.css';

export const Statistics = () => {
  return (
    <section className={css.statistics}>
      <h2 className={css.title}>Upload stats</h2>

      <ul className={css.statList}>
        <li className={css.item}>
          <span className={css.label}>.docx</span>
          <span className={css.percentage}>4%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp3</span>
          <span className={css.percentage}>14%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.pdf</span>
          <span className={css.percentage}>41%</span>
        </li>
        <li className={css.item}>
          <span className={css.label}>.mp4</span>
          <span className={css.percentage}>12%</span>
        </li>
      </ul>
    </section>
  );
};

{
  /* <Statistics title="Upload stats" stats={data} />
<Statistics stats={data} /> */
}
