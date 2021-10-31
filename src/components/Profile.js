import PropTypes from 'prop-types';
import StatesList from './StatesList';
import styles from './Profile.module.css';

const Profile = ({ name, tag, location, avatar, ...states }) => {
  return (
    <div className={styles.description}>
      <img
        src={avatar}
        alt="Аватар пользователя"
        className={styles.avatar}
        width="64"
      />
      <p className={styles.name}>{name}</p>
      <p className={styles.tag}>@{tag}</p>
      <p className={styles.location}>{location}</p>

      <StatesList
        followers={states.followers}
        views={states.views}
        likes={states.likes}
      />
    </div>
  );
};

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
};

export default Profile;
