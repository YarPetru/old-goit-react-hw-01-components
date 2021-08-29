import PropTypes from 'prop-types';
import s from './Profile.module.css';

function Profile({
  img = 'https://www.flaticon.com/svg/static/icons/svg/3135/3135715.svg',
  userName,
  tag,
  location,
  followers,
  views,
  likes,
}) {
  return (
    <div className={s.profile}>
      <div className={s.description}>
        <img src={img} alt="Аватар пользователя" className={s.avatar} />
        <div className={s.baseUserInfo}>
          <p className={s.name}>{userName}</p>
          <p className={s.tag}>@{tag}</p>
          <p className={s.location}>{location}</p>
        </div>
      </div>

      <ul className={s.stats}>
        <li>
          <span className={s.label}>Followers</span>
          <span className={s.quantity}> {followers}</span>
        </li>
        <li>
          <span className={s.label}>Views</span>
          <span className={s.quantity}> {views}</span>
        </li>
        <li>
          <span className={s.label}>Likes</span>
          <span className={s.quantity}> {likes}</span>
        </li>
      </ul>
    </div>
  );
}

Profile.propTypes = {
  img: PropTypes.string,
  userName: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  followers: PropTypes.number,
  views: PropTypes.number,
  likes: PropTypes.number,
};

export default Profile;
