import React from "react";
import BigCard from "../BigCard/BigCard";
import "./TopCardList.css";
import FacebookLogo from "../../images/icon-facebook.svg";
import TwitterLogo from "../../images/icon-twitter.svg";
import InstagramLogo from "../../images/icon-instagram.svg";
import YoutubeLogo from "../../images/icon-youtube.svg";
import Zoom from "react-reveal/Zoom";

// Array of objects to show the BigCard component

const cardListData = [
  {
    id: 1,
    username: "@nathanf",
    followers: "1987",
    todayFollowers: 12,
    followersType: "Followers",
    icon: FacebookLogo,
    name: "facebook",
  },
  {
    id: 2,
    username: "@nathanf",
    followers: "1044",
    todayFollowers: 99,
    followersType: "Followers",
    icon: TwitterLogo,
    name: "twitter",
  },
  {
    id: 3,
    username: "@realnathanf",
    followers: "11k",
    todayFollowers: 1099,
    followersType: "Followers",
    icon: InstagramLogo,
    name: "instagram",
  },
  {
    id: 4,
    username: "Nathan F.",
    followers: "8239",
    todayFollowers: -144,
    followersType: "Subscribers",
    icon: YoutubeLogo,
    name: "youtube",
  },
];

const TopCardList = ({ darkMode }) => {
  return (
    <section className="topCards">
      <div className="wrapper">
        <div className="grid">
          <Zoom>
            {cardListData.map((cardData) => (
              <BigCard
                key={cardData.id}
                id={cardData.id}
                data={cardData}
                darkMode={darkMode}
              />
            ))}
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default TopCardList;
