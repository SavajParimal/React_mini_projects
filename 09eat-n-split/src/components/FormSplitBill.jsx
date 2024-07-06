import React, { useState } from "react";
import Button from "./Button";

function FormSplitBill({ selectFriend, onSplitBill }) {
  const [bill, setBill] = useState("");
  const [payByUser, setPayByUSer] = useState("");
  const paidFried = bill ? bill - payByUser : "";
  const [whoIsPay, setWhoIsPay] = useState("user");

  function handleSubmit(e) {
    e.preventDefault();
    if (!bill || !payByUser) return;

    onSplitBill(whoIsPay === "user" ? paidFried : -payByUser);
  }
  return (
    <>
      <form className="form-split-bill" onSubmit={handleSubmit}>
        <h2>Split a bill with {selectFriend.name}</h2>

        <label>💰 Bill value</label>
        <input
          type="text"
          value={bill}
          onChange={(e) => setBill(Number(e.target.value))}
        />

        <label> 🧍‍♂️Your expense</label>
        <input
          type="text"
          value={payByUser}
          onChange={(e) =>
            setPayByUSer(
              Number(e.target.value) > bill ? payByUser : Number(e.target.value)
            )
          }
        />

        <label>👨{selectFriend.name}'s expense</label>
        <input type="text" value={paidFried} disabled />

        <label>🤑 Who is paying the bill</label>
        <select value={whoIsPay} onChange={(e) => setWhoIsPay(e.target.value)}>
          <option value="user">You</option>
          <option value="friend">{selectFriend.name}</option>
        </select>

        <Button>Split bill</Button>
      </form>
    </>
  );
}

export default FormSplitBill;
