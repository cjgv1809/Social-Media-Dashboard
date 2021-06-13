import "./ModalData.css";
import UpIcon from "../../images/icon-up.svg";
import DownIcon from "../../images/icon-down.svg";
import Modal from "@material-ui/core/Modal";
import { makeStyles } from "@material-ui/core/styles";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import FacebookLogo from "../../images/icon-facebook.svg";
import TwitterLogo from "../../images/icon-twitter.svg";
import InstagramLogo from "../../images/icon-instagram.svg";
import YoutubeLogo from "../../images/icon-youtube.svg";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { data } from "../../utils/chartData";
import { useState } from "react";

// functions provided by Material UI framework for styling modals

function getModalStyle() {
  const top = 50;
  const left = 50;
  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`,
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 700,
    height: "auto",
    backgroundColor: "var(--cardBg)",
    boxShadow: theme.shadows[5],
    borderRadius: "10px",
    padding: theme.spacing(2, 4, 3),
  },
  root: {
    [theme.breakpoints.down("sm")]: {
      width: 300,
      height: "auto",
    },
    [theme.breakpoints.up("sm")]: {
      width: 500,
      height: "auto",
    },
    [theme.breakpoints.up("md")]: {
      width: 700,
      height: "auto",
    },
  },
}));

// Array of objects to show the modals according to the social media selected

const modalListData = [
  {
    id: 1,
    username: "@nathanf",
    followers: "1987",
    todayFollowers: 12,
    followersType: "Followers",
    icon: FacebookLogo,
    name: "Facebook",
  },
  {
    id: 2,
    username: "@nathanf",
    followers: "1044",
    todayFollowers: 99,
    followersType: "Followers",
    icon: TwitterLogo,
    name: "Twitter",
  },
  {
    id: 3,
    username: "@realnathanf",
    followers: "11k",
    todayFollowers: 1099,
    followersType: "Followers",
    icon: InstagramLogo,
    name: "Instagram",
  },
  {
    id: 4,
    username: "Nathan F.",
    followers: "8239",
    todayFollowers: -144,
    followersType: "Subscribers",
    icon: YoutubeLogo,
    name: "Youtube",
  },
];

function ModalData({ todayFollowers, darkMode, id, open, handleClose }) {
  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = useState(getModalStyle);

  return (
    <>
      {id === 1 && (
        <Modal
          open={open}
          onClose={handleClose}
          className={`${darkMode ? "is-dark-mode" : "is-light-mode"}`}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={open}>
            <div
              style={modalStyle}
              className={`${classes.paper} ${classes.root}`}
            >
              <div className="modalData">
                <div className="modalData__title">
                  {modalListData[0].name} {modalListData[0].followersType}
                </div>
                <div className="modalData__username">
                  <img src={FacebookLogo} alt="" /> <p>@nathanf</p>
                </div>
                <div className="modalData__statistics">
                  <p className="modalData__data">
                    <span className="modalData__followersNumber">
                      {modalListData[0].followers}{" "}
                    </span>
                    <span className="modalData__followersText">
                      Total {modalListData[0].followersType}
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      81
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[0].followersType} in the past ten days
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      {Math.abs(modalListData[0].todayFollowers)}
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[0].followersType} TODAY
                    </span>
                  </p>
                </div>
              </div>

              {/* Chart */}

              <ResponsiveContainer width="100%" aspect={3}>
                <LineChart
                  width={500}
                  height={300}
                  data={data}
                  margin={{
                    top: 10,
                    right: 20,
                    left: 10,
                    bottom: 5,
                  }}
                >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="date" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Line
                    type="monotone"
                    dataKey="todayFollowers"
                    stroke="var(--chart)"
                    activeDot={{ r: 8 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </Fade>
        </Modal>
      )}

      {/* Modal part: Twitter */}

      {id === 2 && (
        <Modal
          open={open}
          onClose={handleClose}
          className={`${darkMode ? "is-dark-mode" : "is-light-mode"}`}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={open}>
            <div
              style={modalStyle}
              className={`${classes.paper} ${classes.root}`}
            >
              <div className="modalData">
                <div className="modalData__title">
                  {modalListData[1].name} {modalListData[1].followersType}
                </div>
                <div className="modalData__username">
                  <img src={TwitterLogo} alt="" /> <p>@nathanf</p>
                </div>
                <div className="modalData__statistics">
                  <p className="modalData__data">
                    <span className="modalData__followersNumber">
                      {modalListData[1].followers}{" "}
                    </span>
                    <span className="modalData__followersText">
                      Total {modalListData[1].followersType}
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      81
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[1].followersType} in the past ten days
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      {Math.abs(modalListData[1].todayFollowers)}
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[1].followersType} TODAY
                    </span>
                  </p>
                </div>

                {/* Chart */}

                <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="todayFollowers"
                      stroke="var(--chart)"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Fade>
        </Modal>
      )}

      {/* Modal part: Instagram */}

      {id === 3 && (
        <Modal
          open={open}
          onClose={handleClose}
          className={`${darkMode ? "is-dark-mode" : "is-light-mode"}`}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={open}>
            <div
              style={modalStyle}
              className={`${classes.paper} ${classes.root}`}
            >
              <div className="modalData">
                <div className="modalData__title">
                  {modalListData[2].name} {modalListData[2].followersType}
                </div>
                <div className="modalData__username">
                  <img src={InstagramLogo} alt="" /> <p>@realnathanf</p>
                </div>
                <div className="modalData__statistics">
                  <p className="modalData__data">
                    <span className="modalData__followersNumber">
                      {modalListData[2].followers}{" "}
                    </span>
                    <span className="modalData__followersText">
                      Total {modalListData[2].followersType}
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      81
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[2].followersType} in the past ten days
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      {Math.abs(modalListData[2].todayFollowers)}
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[2].followersType} TODAY
                    </span>
                  </p>
                </div>

                {/* Chart */}

                <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="todayFollowers"
                      stroke="var(--chart)"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Fade>
        </Modal>
      )}

      {/* Modal part: Youtube */}

      {id === 4 && (
        <Modal
          open={open}
          onClose={handleClose}
          className={`${darkMode ? "is-dark-mode" : "is-light-mode"}`}
          closeAfterTransition
          BackdropComponent={Backdrop}
          BackdropProps={{
            timeout: 1000,
          }}
        >
          <Fade in={open}>
            <div
              style={modalStyle}
              className={`${classes.paper} ${classes.root}`}
            >
              <div className="modalData">
                <div className="modalData__title">
                  {modalListData[3].name} {modalListData[3].followersType}
                </div>
                <div className="modalData__username">
                  <img src={YoutubeLogo} alt="" /> <p>Nathan F.</p>
                </div>
                <div className="modalData__statistics">
                  <p className="modalData__data">
                    <span className="modalData__followersNumber">
                      {modalListData[3].followers}{" "}
                    </span>
                    <span className="modalData__followersText">
                      Total {modalListData[3].followersType}
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      81
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[3].followersType} in the past ten days
                    </span>
                  </p>
                  <p className="modalData__data">
                    {todayFollowers > 0 ? (
                      <img src={UpIcon} alt="upIcon" />
                    ) : (
                      <img src={DownIcon} alt="DownIcon" />
                    )}{" "}
                    <span
                      className={`${
                        todayFollowers > 0
                          ? "modalData__followersNumberGreen"
                          : "modalData__followersNumberRed"
                      }`}
                    >
                      {Math.abs(modalListData[3].todayFollowers)}
                    </span>{" "}
                    <span className="modalData__followersText">
                      New {modalListData[3].followersType} TODAY
                    </span>
                  </p>
                </div>

                {/* Chart */}

                <ResponsiveContainer width="100%" aspect={3}>
                  <LineChart
                    width={500}
                    height={300}
                    data={data}
                    margin={{
                      top: 10,
                      right: 20,
                      left: 10,
                      bottom: 5,
                    }}
                  >
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="date" />
                    <YAxis />
                    <Tooltip />
                    <Legend />
                    <Line
                      type="monotone"
                      dataKey="todayFollowers"
                      stroke="var(--chart)"
                      activeDot={{ r: 8 }}
                    />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </Fade>
        </Modal>
      )}
    </>
  );
}

export default ModalData;
