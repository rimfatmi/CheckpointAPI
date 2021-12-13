import React from "react";
import axios from "axios";
import UserCard from "./UserCard";

import { useState } from "react";
export default class UserList extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((res) => {
      const users = res.data;
      this.setState({ users });
    });
  }

  render() {
    return (
      <ul>
        {this.state.users.map((UserList) => (
          <li>{UserCard}</li>
        ))}
      </ul>
    );
  }
}
