import React from "react";

import moment from "moment";

const Card = ({ repo }) => (
  <div className="card card-margin card-width">
    <div className="card-header">
      <strong>{repo.name}</strong>
    </div>
    <div className="card-body">
      <div className="d-flex flex-row-reverse">
        <span className="badge badge-light">{repo.language}</span>
      </div>
      <h5 className="card-title">{repo.full_name}</h5>
      <p>{repo.description}</p>
      <p className="card-text">
        <small className="text-muted">
          {moment(repo.created_at).format("LL")}
        </small>
      </p>
      <div className="d-flex flex-row-reverse">
        <a
          href={repo.html_url}
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
