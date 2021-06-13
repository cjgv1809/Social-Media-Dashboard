import "./SmallCard.css";
import UpIcon from "../../images/icon-up.svg";
import DownIcon from "../../images/icon-down.svg";

function SmallCard({ icon, pageViews, growth, interactionType }) {
  return (
    <div className="smallCard">
      <p className="smallCard__views">{interactionType}</p>
      <p className="smallCard__icon">
        <img src={icon} alt="imagen" />
      </p>
      <p className="smallCard__number">{pageViews}</p>
      <p
        className={
          growth > 0
            ? "smallCard__percentage"
            : "smallCard__percentage--negative"
        }
      >
        <span>
          {growth > 0 ? (
            <img src={UpIcon} alt="up" />
          ) : (
            <img src={DownIcon} alt="down" />
          )}
          {Math.abs(growth)}%
        </span>
      </p>
    </div>
  );
}

export default SmallCard;
