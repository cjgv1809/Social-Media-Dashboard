import React, { useState } from "react";
import "./BigCard.css";
import UpIcon from "../../images/icon-up.svg";
import DownIcon from "../../images/icon-down.svg";
import ModalData from "../ModalData/ModalData";

const BigCard = ({
  id,
  data: { username, followers, todayFollowers, icon, name, followersType },
  darkMode,
}) => {
  const [open, setOpen] = useState(false);

  // functions to open and close modal

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const cardClass = `card ${name}`;

  return (
    <>
      <article className={cardClass} onClick={handleOpen}>
        <p className="card__title">
          <img src={icon} alt="Icon Logo" />
          {username}
        </p>
        <p className="card__followers">
          <span className="card__followersNumber">{followers}</span>
          <span className="card__followersTitle">{followersType}</span>
        </p>
        <p
          className={
            todayFollowers > 0 ? "card__today" : "card__today--negative"
          }
        >
          {/* if todayFollowers is greater than 0, show upIcon, otherwise downIcon */}
          {todayFollowers > 0 ? (
            <img src={UpIcon} alt="upIcon" />
          ) : (
            <img src={DownIcon} alt="DownIcon" />
          )}
          {Math.abs(todayFollowers)} Today
        </p>
      </article>

      <ModalData
        id={id}
        todayFollowers={todayFollowers}
        darkMode={darkMode}
        open={open}
        handleClose={handleClose}
      />
    </>
  );
};

export default BigCard;
