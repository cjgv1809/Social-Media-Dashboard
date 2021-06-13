import React from "react";
import SmallCard from "../SmallCard/SmallCard";
import "./Overview.css";
import FacebookLogo from "../../images/icon-facebook.svg";
import TwitterLogo from "../../images/icon-twitter.svg";
import InstagramLogo from "../../images/icon-instagram.svg";
import YoutubeLogo from "../../images/icon-youtube.svg";
import Zoom from "react-reveal/Zoom";

// Array of objects to show the SmallCard component

const smallCardList = [
  {
    id: 1,
    icon: FacebookLogo,
    pageViews: "87",
    growth: 3,
    interactionType: "Page Views",
  },
  {
    id: 2,
    icon: FacebookLogo,
    pageViews: "52",
    growth: -2,
    interactionType: "Likes",
  },
  {
    id: 3,
    icon: InstagramLogo,
    pageViews: "5462",
    growth: 2257,
    interactionType: "Likes",
  },
  {
    id: 4,
    icon: InstagramLogo,
    pageViews: "52k",
    growth: 1375,
    interactionType: "Profile Views",
  },
  {
    id: 5,
    icon: TwitterLogo,
    pageViews: "117",
    growth: 303,
    interactionType: "Retweets",
  },
  {
    id: 6,
    icon: TwitterLogo,
    pageViews: "507",
    growth: 553,
    interactionType: "Likes",
  },
  {
    id: 7,
    icon: YoutubeLogo,
    pageViews: "107",
    growth: -19,
    interactionType: "Likes",
  },
  {
    id: 8,
    icon: YoutubeLogo,
    pageViews: "1407",
    growth: -12,
    interactionType: "Total Views",
  },
];

const Overview = () => {
  return (
    <section className="overview">
      <div className="wrapper">
        <h2>Overview - Today</h2>
        <div className="grid">
          <Zoom>
            {smallCardList.map((dataList) => (
              <SmallCard
                key={dataList.id}
                icon={dataList.icon}
                pageViews={dataList.pageViews}
                interactionType={dataList.interactionType}
                growth={dataList.growth}
              />
            ))}
          </Zoom>
        </div>
      </div>
    </section>
  );
};

export default Overview;
