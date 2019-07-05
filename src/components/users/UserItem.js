import React from 'react';
import PropTypes from 'prop-types';

//functional component, could be class based, just another way to do it
const userItem = ({ user: { login, avatar_url, html_url } }) => {
  return (
    <div className="card text-center">
      <img
        src={avatar_url}
        alt=""
        className="round-img"
        style={{ width: '60px' }}
      />
      <h3>{login}</h3>
      <div>
        <a href={html_url} className="btn btn-dark btn-sm my-1">
          More
        </a>
      </div>
    </div>
  );
};

//proptype defines the object user is required
userItem.propTypes = {
  user: PropTypes.object.isRequired
};
export default userItem;
