import Profile from './components/Profile';
import users from './user.json';

function App() {
  return (
    <div className="App">
      <Profile
        name={users.name}
        avatar={users.avatar}
        tag={users.tag}
        location={users.location}
        followers={users.stats.followers}
        views={users.stats.views}
        likes={users.stats.likes}
      />
    </div>
  );
}

export default App;
