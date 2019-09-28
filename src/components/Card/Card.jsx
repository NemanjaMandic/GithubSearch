import React from 'react';

const Card = props => {
    const { avatar, username, fullName, bio, link} = props;
    return (
      <div className="card">
        <img alt="avatar" style={{ width: '70px' }} src={avatar} />
        <div>
          <a className="link" href={link}><div>{username}</div></a>
          <div>{bio}</div>
        </div>
      </div>
    )
  }

  export default Card;