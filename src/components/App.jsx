import { Profile } from 'components/Profile/Profile';
import user from 'data/user';
import { Statistics } from 'components/Statistics/Statistics';
import { Friendlist } from 'components/FriendList/FriendList';
import { FriendlistItem } from 'components/FriendList/FriendListItem';
import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
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
    </div>
  );
};

  //  <Statistics />
  //     <Friendlist />
  //     <TransactionHistory />