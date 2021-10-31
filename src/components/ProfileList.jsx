import Profile from './Profile';
import PropTypes from 'prop-types';

export default function ProfileList({ items }) {
  return (
    <ul>
      {items.map(item => (
        <li key={item.tag}>
          <Profile
            name={item.name}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

ProfileList.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({ tag: PropTypes.string.isRequired }),
  ),
};
