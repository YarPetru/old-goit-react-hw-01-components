import PropTypes from 'prop-types';
import s from './FriendList.module.css';

function FriendListItem({ avatar, name, isOnline }) {
  // const spanClasses = [s.status];
  // isOnline ? spanClasses.push(s.online) : spanClasses.push(s.offline);
  // if (isOnline === true) {
  //   spanClasses.push(s.online);
  // } else {
  //   spanClasses.push(s.offline);
  // }

  return (
    <li className={s.item}>
      <span
        className={
          isOnline ? `${s.status} ${s.online}` : `${s.status} ${s.offline}`
        }
      ></span>
      {/* <span className={spanClasses.join(' ')}></span> */}
      <img
        className={s.avatar}
        src={avatar}
        alt={`${name}'s avatar`}
        width="48"
      />
      <p className={s.name}> {name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  avatar: PropTypes.string,
  isOnline: PropTypes.bool,
  name: PropTypes.string,
};

export default FriendListItem;
