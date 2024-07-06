import React, { useState } from "react";
import Button from "./Button";

function FormAddFriend({ onAddFriend }) {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48");

  function addfriend(e) {
    e.preventDefault();
    if (!name) return;
    const id = crypto.randomUUID();
    const newfriend = { name, image: `${image}?=${id}`, balance: 0, id };
    onAddFriend(newfriend);

    setName("");
    setImage("https://i.pravatar.cc/48");
  }
  return (
    <>
      <form className="form-add-friend" onSubmit={addfriend}>
        <label>🧑🏻‍🤝‍👩🏼 Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <label>🖼️ Image URL</label>
        <input
          type="text"
          value={image}
          onChange={(e) => setImage(e.target.value)}
        />

        <Button>Add</Button>
      </form>
    </>
  );
}

export default FormAddFriend;
