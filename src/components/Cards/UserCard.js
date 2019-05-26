import React from "react";

const Card = ({ user }) => (
  <div className="card card-margin card-width">
    <img src={user.avatar_url} className="card-img-top" alt="img" />
    <div className="card-body">
      <h5 className="card-title">{user.login}</h5>
      <div className="d-flex flex-row-reverse">
        <a
          href={user.html_url}
          target="_blank"
          className="btn btn-outline-dark btn-sm"
          rel="noopener noreferrer"
        >
          GitHub
        </a>
      </div>
    </div>
  </div>
);

export default Card;
