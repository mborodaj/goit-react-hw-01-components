import React from 'react';
import propTypes from 'prop-types';
import styles from './Friend-list.module.css';

const FriendList = ({ friends }) => {
  return (
    <ul className={styles.friend__list}>
      {friends.map(friend => {
        return (
          <li className={styles.friend__item} key={friend.id}>
            <img
              className={styles.friend__avatar}
              src={friend.avatar}
              alt=""
              width="48"
            />
            <div className={styles.data__container}>
              <div
                className={
                  friend.isOnline ? styles.is__online : styles.is__offline
                }
              >
                {friend.isOnline}
              </div>
              <p className="name">{friend.name}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );
};

FriendList.propTypes = {
  friends: propTypes.array,
};

export default FriendList;
