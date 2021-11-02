import Container from 'components/Container/Container';
import Profile from 'components/Profile/Profile';
import user from 'components/Profile/user';
import Statistics from 'components/Statistics/Statistics';
import statistical_data from 'components/Statistics/statistical_data';
import FriendList from 'components/FriendList/FriendList';
import friends from 'components/FriendList/friends';
import TransactionHistory from 'components/TransactionHistory/TransactionHistory';
import transactions from 'components/TransactionHistory/transactions';

export default function App() {
  return (
    <>
      <Container>
        <Profile
          name={user.name}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
      </Container>
      <Container>
        <Statistics
          title="Upload stats"
          items={statistical_data}
        />
      </Container>
      <Container>
        <FriendList friends={friends} />
      </Container>
      <Container>
        <TransactionHistory items={transactions} />
      </Container>
    </>
  );
}
