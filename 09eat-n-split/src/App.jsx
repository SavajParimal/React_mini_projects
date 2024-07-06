import { useState } from "react";
import Button from "./components/Button";
import FormAddFriend from "./components/FormAddFriend";
import FormSplitBill from "./components/FormSplitBill";
import FriendList from "./components/FriendList";

function App() {
  const initialFriends = [
    {
      id: 118836,
      name: "Clark",
      image: "https://i.pravatar.cc/48?u=118836",
      balance: -7,
    },
    {
      id: 933372,
      name: "Sarah",
      image: "https://i.pravatar.cc/48?u=933372",
      balance: 20,
    },
    {
      id: 499476,
      name: "Anthony",
      image: "https://i.pravatar.cc/48?u=499476",
      balance: 0,
    },
  ];

  const [showFormAddFriend, setShowFormAddFriend] = useState(false);
  const [addFriend, setAddFriend] = useState(initialFriends);
  const [selectFriend, setSelectFriend] = useState(null);

  function handleSelection(friend) {
    setSelectFriend((curr) => (curr?.id === friend.id ? null : friend));
    setShowFormAddFriend(false);
  }

  function handlefriend(newFriend) {
    setAddFriend((friends) => [...friends, newFriend]);
    setShowFormAddFriend(false);
  }

  function handleAddFriend() {
    setShowFormAddFriend((show) => !show);
  }

  function handleSplitBill(value) {
    console.log(value);
    setAddFriend((friends) =>
      friends.map((friend) => {
        // key = friend.id;
        return friend.id === selectFriend.id
          ? { ...friend, balance: friend.balance + value }
          : friend;
      })
    );
    setSelectFriend(null);
  }
  return (
    <>
      <div className="app">
        <div className="sidebar">
          <FriendList
            initialFriends={addFriend}
            onSelection={handleSelection}
            selectFriend={selectFriend}
          />

          {showFormAddFriend && <FormAddFriend onAddFriend={handlefriend} />}

          <Button onClick={handleAddFriend}>
            {showFormAddFriend ? "close" : "Add Friend"}
          </Button>
        </div>

        {selectFriend && (
          <FormSplitBill
            selectFriend={selectFriend}
            onSplitBill={handleSplitBill}
          />
        )}
      </div>
    </>
  );
}

export default App;
