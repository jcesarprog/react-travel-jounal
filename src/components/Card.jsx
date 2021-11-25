import React from "react";
import Img from "./Img";

export default function Card(props) {
  return (
    <div className="card">
      <div className="card--img">
        <Img img={props.imageUrl} />
      </div>
      <div className="card--info">
        <span className="card--info-pin">
          <i className="fas fa-map-marker-alt"></i>
        </span>
        <span className="card--info-country">{props.location}</span>
        <a
          href={props.googleMapsUrl}
          className="card--info-link"
          target="_blank"
          rel="noreferrer"
        >
          View on Google Maps
        </a>
        <h1>{props.title}</h1>
        <p className="card--info-date">
          {`${props.startDate} - ${props.endDate}`}
        </p>
        <p className="card--info-description">{props.description}</p>
      </div>
    </div>
  );
}
