import React from 'react';

const Card = props => {
    const { avatar, username, fullName, bio, link} = props;
    return (
      <div className="card">
       <div className="avatarWrapper">
       <img alt="avatar" className="img" src={avatar} />
       </div>
        <div>
          <h3>{fullName}</h3>
          <a className="link" href={link}><div>{username}</div></a>
          <div>{bio}</div>
        </div>
      </div>
    )
  }

  export default Card;