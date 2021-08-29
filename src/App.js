import './App.css';
import Profile from './components/Profile/Profile';
import StatsList from './components/Statistics/StatsList';
import FriendList from './components/FriendList/FriendList';
import TransactionHistory from './components/TransactionHistory/TransactionHistory';
// import Statistics from './components/Statistics/Statistics';

import user from './components/Profile/user.json';
import stats from './components/Statistics/statistical-data.json';
import friends from './components/FriendList/friends.json';
import s from './components/Statistics/Statistics.module.css';
import data from './components/TransactionHistory/transactions.json';

function App() {
  return (
    <div className="App">
      <Profile
        img={user.avatar}
        userName={user.name}
        tag={user.tag}
        location={user.location}
        followers={user.stats.followers}
        views={user.stats.views}
        likes={user.stats.likes}
      />

      <StatsList
        className={s.statsSection}
        title="Upload stats"
        items={stats}
      />
      {/* {stats.map(stat => (
        <Statistics
          key={stat.id}
          label={stat.label}
          percent={stat.percentage}
        />
      ))} */}

      <FriendList friends={friends} />

      <TransactionHistory data={data} />
    </div>
  );
}

export default App;
