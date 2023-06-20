import { Profile } from 'components/Profile';
import user from 'data/user';
import { Statistics } from 'components/Statistics';
import data from 'data/data';
import { FriendList } from 'components/FriendList';
import friends from 'data/friends';
import { TransactionHistory } from 'components/TransactionHistory';
import transactions from 'data/transactions';

export const App = () => {
  return (
    <div
      style={{
        // height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        gap: 25,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
        // fontSize: 40,
        // color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </div>
  );
};

// передаємо обєкт даних статистики в stats, friends, items
