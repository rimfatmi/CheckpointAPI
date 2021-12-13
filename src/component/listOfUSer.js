import React from "react";
import { useState } from "react";
const initialState = {
  name: "",
  email: ""
};

export const UserData = () => {
  const [formState, setFormState] = useState(initialState);

  const submitHandler = (event) => {
    event.preventDefault();
    console.log(formState);
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        type="number"
        placeholder="Id"
        value={formState.Id}
        onChange={(e) => {
          setFormState({ ...formState, Id: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Name"
        value={formState.name}
        onChange={(e) => {
          setFormState({ ...formState, name: e.target.value });
        }}
      />
      <input
        type="email"
        placeholder="Email"
        value={formState.email}
        onChange={(e) => {
          setFormState({ ...formState, email: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Address"
        value={formState.address}
        onChange={(e) => {
          setFormState({ ...formState, address: e.target.value });
        }}
      />
      <input
        type="number"
        placeholder="Phone"
        value={formState.phone}
        onChange={(e) => {
          setFormState({ ...formState, phone: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Website"
        value={formState.website}
        onChange={(e) => {
          setFormState({ ...formState, website: e.target.value });
        }}
      />
      <input
        type="text"
        placeholder="Company"
        value={formState.company}
        onChange={(e) => {
          setFormState({ ...formState, company: e.target.value });
        }}
      />
      <button>Save</button>
    </form>
  );
};
