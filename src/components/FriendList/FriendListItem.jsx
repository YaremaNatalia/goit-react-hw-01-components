import PropTypes from 'prop-types';
import css from './FriendListItem.module.css';

export const FriendListItem = ({ avatar, isOnline, name }) => {
  return (
    <li className={css.item}>
      <span className={css.status + ' ' + (isOnline && css.online)}></span>
      <img className={css.avatar} src={avatar} alt={name} width="50" />
      <p className={css.name}>{name}</p>
    </li>
  );
};
// додавання класів до спану відбувається через конкатенацію (поєднання) за умови вірності пропса isOnline на бєкенді
//!можна використати бібліотеку classNames або clsx, які необхідно встановити, та імпортувати в файл
//  className={classNames(css.status, css.online)} щоб додати два класи
// className={classNames(css.status, isOnline && css.online)}

FriendListItem.propTypes = {
  avatar: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  name: PropTypes.string.isRequired,
};
