import PropTypes from 'prop-types';
import styles from './Friends.module.css';

function FriendsList({ friends }) {
  return (
    <ul className={styles.friend_list}>
      {friends.map(friendEl => {
        return (
          <li className={styles.item} key={friendEl.id}>
            {friendEl.isOnline ? (
              <span className={styles.active}></span>
            ) : (
              <span className={styles.status}></span>
            )}
            <img
              className={styles.avatar}
              src={friendEl.avatar}
              alt={friendEl.name}
              width="48"
            />
            <p className={styles.name}>{friendEl.name}</p>
          </li>
        );
      })}
    </ul>
  );
}

FriendsList.propTypes = {
  avatar: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
};

export default FriendsList;
