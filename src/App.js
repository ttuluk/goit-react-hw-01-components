import users from './data/user.json';
import statisticalData from './data/statistical-data.json';
import friends from './data/friends.json';
import transactions from './data/transactions.json';

import Profile from './components/Profile';
import StatisticsSection from './components/StatisticsSection';
import FriendsList from './components/FriendsList';
import TransactionHistory from './components/TransactionHistory';

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
      <StatisticsSection title="Upload stats" items={statisticalData} />;
      <FriendsList friends={friends} />
      <TransactionHistory trans={transactions} />
    </div>
  );
}

export default App;
