import Profile from 'components/profile/Profile';
import user from 'components/profile/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'components/statistics/data.json';
import FriendList from 'components/friendlist/FriendList';
import friends from 'components/friendlist/friends.json';
import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import transactions from 'components/transactionHistory/transactions.json';

export default function App(){
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column', 
        justifyContent: 'center', 
        alignItems: 'center', 
        fontSize: 30, 
        color: '#010101',
      }}>
      
      <Profile
      username={user.username}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
      />

      <Statistics title="Upload stats" stats={data} />
      {/* <Statistics stats={data} /> */}

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
