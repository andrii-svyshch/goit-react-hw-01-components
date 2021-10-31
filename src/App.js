import ProfileList from './components/ProfileList';
import user from './user.json';

export default function App() {
  return (
    <div>
      <ProfileList items={user} />
    </div>
  );
}
