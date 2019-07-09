import React from 'react';
import UserItem from './UserItem';
//importing our spinner component
import Spinner from '../layout/Spinner';
import PropTypes from 'prop-types';

//note users and loading props passed from App.js
const Users = ({ users, loading }) => {
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

Users.propTypes = {
  users: PropTypes.array.isRequired,
  loading: PropTypes.bool.isRequired
};

const userStyle = {
  display: 'grid',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gridGap: '1rem'
};

export default Users;
