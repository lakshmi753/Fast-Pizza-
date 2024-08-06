import { useSelector } from 'react-redux';

function UserName() {
  const username = useSelector((store) => store.user.username);

  if (!username) return;

  return <div className="text-sm font-semibold md:block">{username}</div>;
}

export default UserName;
