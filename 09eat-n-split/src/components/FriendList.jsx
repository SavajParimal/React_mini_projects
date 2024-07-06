import React from "react";
import Friend from "./Friend";

function FriendList({ initialFriends, onSelection, selectFriend }) {
  return (
    <>
      <ul>
        {initialFriends.map((friend) => (
          <Friend key={friend.id} friend={friend} onSelection={onSelection} selectFriend={selectFriend} />
        ))}
      </ul>
    </>
  );
}

export default FriendList;
