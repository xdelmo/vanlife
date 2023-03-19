import React from "react";
import { useParams } from "react-router-dom";

import useGetVanDetail from "../hooks/useGetVanDetail";

function VanDetail() {
  // Grab params (valors after : in Route Component's path) as an object
  const params = useParams();

  const van = useGetVanDetail({ params });

  return (
    <div className="van-detail-container">
      {van ? (
        <div className="van-detail">
          <img src={van.imageUrl} />
          <i className={`van-type ${van.type} selected`}>{van.type}</i>
          <h2>{van.name}</h2>
          <p className="van-price">
            <span>${van.price}</span>/day
          </p>
          <p>{van.description}</p>
          <button className="link-button">Rent this van</button>
        </div>
      ) : (
        <h2>Loading...</h2>
      )}
    </div>
  );
}

export default VanDetail;
