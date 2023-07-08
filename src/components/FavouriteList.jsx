import React, { Component } from "react";

const FavouriteList = () => {
  // api data

  return (
    <div>
      <h1>Favourited Items for gift ideas</h1>
      {/* <div></div> */}
      <div className="giftideas">
        <button
          style={{ color: liked ? "white" : "red" }}
          onClick={() => setLiked(!liked)}
        >
          &#10084;
        </button>
      </div>
    </div>
  );
};

export default FavouriteList;
