import PropTypes from 'prop-types';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friendEl => {
        return (
          <li className="item" key={friendEl.id}>
            {friendEl.isOnline ? (
              <span className="status active"></span>
            ) : (
              <span className="status"></span>
            )}
            <img
              className="avatar"
              src={friendEl.avatar}
              alt={friendEl.name}
              width="48"
            />
            <p className="name">{friendEl.name}</p>
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
