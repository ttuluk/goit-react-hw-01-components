import PropTypes from 'prop-types';
import StatesList from './StatesList';

const Profile = ({ name, tag, location, avatar, ...states }) => {
  return (
    <div className="description">
      <img
        src={avatar}
        alt="Аватар пользователя"
        className="avatar"
        width="64"
      />
      <p className="name">{name}</p>
      <p className="tag">@{tag}</p>
      <p className="location">{location}</p>

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
  states: PropTypes.object.isRequired,
};

export default Profile;
