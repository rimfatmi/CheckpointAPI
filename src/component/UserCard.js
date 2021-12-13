import React from "react";
import { Card } from "react-bootstrap";
import "../App.css";
import { useState } from "react";

const UserCard = ({ user }) => {
  return (
    <Card className="card">
      <Card.Body className="Id">
        <Card.Title>{user.name}</Card.Title>
        <Card.Subtitle>{user.company.name}</Card.Subtitle>
        <Card.Text>
          <b>Address:</b> {user.address.street}, {user.address.suite},{" "}
          {user.address.zipcode} {user.address.city}
        </Card.Text>
        <Card.Text>
          <b>Email:</b> {user.email}
        </Card.Text>
        <Card.Text>
          <b> </b>
        </Card.Text>
        <Card.Text>
          <b> Website:</b> {user.website}
        </Card.Text>
        <Card.Text>
          <b> company:</b> {user.company}
        </Card.Text>
      </Card.Body>
    </Card>
  );
};

export default UserCard;
