import FriendListItem from './FriendListItem';
import s from './FriendList.module.scss';

export default function FriendList({ friends }) {
  return (
    <ul className={s.friend_list}>
      {friends.map(friend => (
        <FriendListItem
          avatar={friend.avatar}
          name={friend.name}
          isOnline={friend.isOnline}
          key={friend.id}
        />
      ))}
    </ul>
  );
}
