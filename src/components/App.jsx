import { Profile } from 'components/Profile/Profile';
import user from 'data/user';
import { Statistics } from 'components/Statistics/Statistics';
import data from 'data/data';
import { Friendlist } from 'components/FriendList/FriendList';
import friends from 'data/friends';
import { FriendlistItem } from 'components/FriendList/FriendListItem';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

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
    </div>
  );
};

// передаємо обєкт даних статистики в stats
//
//     <Friendlist />
//     <TransactionHistory />
