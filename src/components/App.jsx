import Profile from 'components/profile/Profile';
import user from 'data/user.json';
import Statistics from 'components/statistics/Statistics';
import data from 'data/data.json';
import FriendList from 'components/friendlist/FriendList';
import friends from 'data/friends.json';
import TransactionHistory from 'components/transactionHistory/TransactionHistory';
import transactions from 'data/transactions.json';

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

      <FriendList friends={friends} />

      <TransactionHistory items={transactions} />
    </div>
  );
};
