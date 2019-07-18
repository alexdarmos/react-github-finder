import React, { useContext } from 'react';
import UserItem from './UserItem';
//importing our spinner component
import Spinner from '../layout/Spinner';
//bring in context
import GithubContext from '../../context/github/githubContext';
//note users and loading props passed from App.js
const Users = () => {
  //initialize context
  const githubContext = useContext(GithubContext);

  //destructering
  const { loading, users } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <div style={userStyle}>
        {/* creates new array of each user from users prop which is passed from App.js, each user is passed as prop to UserItem.js*/}
        {users.map(user => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  }
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
