import styles from "../../Styles/RoomsInner.module.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useState } from "react";
import DateRangeIcon from "@material-ui/icons/DateRange";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

// For pop over
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { JuniorSuit } from "./Suits/JuniorSuit";

export const ChooseRoom = ({ price }) => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDay2, setSelectedDay2] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);

  const [anchorElPop, setAnchorElPop] = useState(null);
  const openPop = Boolean(anchorElPop);

  const handleCheckIn = (e) => {
    setSelectedDay(e);
  };
  const handleCheckIn2 = (e) => {
    setSelectedDay2(e);
  };
  const handleClose = () => {
    setAnchorElPop(null);
  };

  const checkInInputComp = ({ ref }) => {
    return (
      <>
        <input
          readOnly
          ref={ref}
          placeholder="Check-in date"
          value={
            selectedDay
              ? `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
              : ""
          }
          style={{
            width: "200px",
            height: "30px",
            padding: "0px 5px",
            cursor: "pointer",
          }}
        />
        <div className={styles.calendarIcon}>
          <DateRangeIcon color="inherit" />
        </div>
      </>
    );
  };

  const checkInInputComp2 = ({ ref }) => {
    return (
      <>
        <input
          readOnly
          ref={ref}
          placeholder="Check-out date"
          value={
            selectedDay2
              ? `${selectedDay2.day}/${selectedDay2.month}/${selectedDay2.year}`
              : ""
          }
          style={{
            width: "200px",
            height: "30px",
            padding: "0px 5px",
            cursor: "pointer",
          }}
        />
        <div className={styles.calendarIcon2}>
          <DateRangeIcon color="inherit" />
        </div>
      </>
    );
  };

  const useStyles = makeStyles((theme) => ({
    paper: {
      width: "300px",
    },
    rooms: {
      display: "flex",
    },
    grid: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      marginTop: "-10px",
    },
    subHead1: {
      fontSize: "0.8rem",
      fontWeight: "600",
      marginTop: "-5px",
      marginRight: "80px",
    },
    subHead2: {
      fontSize: "0.7rem",
    },
    Room1p: {
      fontSize: "1rem",
      fontWeight: "600",
    },
    wrapper: {
      padding: "0px 15px",
      color: "rgb(51, 51, 51)",
    },
    btn: {
      border: "none",
      height: "29px",
      padding: "2px 8px",
      outline: "1px solid grey",
      background: "white",
      margin: "1px",
    },
    btnM: {
      border: "none",
      height: "29px",
      padding: "2px 8px",
      outline: "1px solid grey",
      background: "white",
      margin: "1px",
      marginLeft: "-42px",
    },
    btnP: {
      padding: "5px 8px",
      outline: "1px solid grey",
      background: "white",
    },
    h5: {
      margin: "0px 0px 10px 0px",
    },
  }));

  const classes = useStyles();
  return (
    <div>
      <p className={styles.ChooseRoomP}> CHOOSE ROOM </p>
      <div className={styles.ChooseRoomWrapper}>
        <div>
          <div>
            <p> CHECK-IN</p>
            <DatePicker
              calendarPopperPosition={"bottom"}
              value={selectedDay}
              onChange={handleCheckIn}
              renderInput={checkInInputComp}
              shouldHighlightWeekends
              colorPrimaryLight="rgb(240,130,67)"
            />
          </div>
          <div>
            <p> CHECK-OUT</p>
            <DatePicker
              calendarPopperPosition={"bottom"}
              value={selectedDay2}
              onChange={handleCheckIn2}
              renderInput={checkInInputComp2}
              shouldHighlightWeekends
              colorPrimaryLight="rgb(240,130,67)"
            />
          </div>
          <div>
            <p> GUESTS-ROOMS</p>
            <div
              onClick={(e) => setAnchorElPop(e.currentTarget)}
              className={styles.RoomsSelectorPopUp}
            >
              <p>1 Adult - 1Room </p>
              <KeyboardArrowDownIcon />
            </div>
            <div>
              <Popover
                open={openPop}
                anchorEl={anchorElPop}
                onClose={handleClose}
                anchorReference="anchorEl"
                anchorOrigin={{ vertical: 40, horizontal: 0 }}
              >
                <Box>
                  <Paper className={classes.paper}>
                    <div className={classes.wrapper}>
                      <p className={classes.Room1p}> Room 1:</p>
                      <div className={classes.rooms}>
                        <div>
                          <p className={classes.subHead1}> Adults </p>
                          <p className={classes.subHead2}> Above 12 Years </p>

                          <div className={classes.grid}>
                            <button
                              onClick={() => setAdults((prev) => prev - 1)}
                              className={classes.btnM}
                              disabled={adults === 0}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <p className={classes.btnP}>{adults}</p>
                            <button
                              onClick={() => setAdults((prev) => prev + 1)}
                              className={classes.btn}
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                          <h5 className={classes.h5}> Add a room </h5>
                        </div>
                        <div>
                          <p className={classes.subHead1}> Children </p>
                          <p className={classes.subHead2}> Below 12 Years </p>
                          <div className={classes.grid}>
                            <button
                              onClick={() => setChildren((prev) => prev - 1)}
                              disabled={children === 0}
                              className={classes.btnM}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <p className={classes.btnP}>{children}</p>
                            <button
                              onClick={() => setChildren((prev) => prev + 1)}
                              className={classes.btn}
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </Paper>
                </Box>
              </Popover>
            </div>
          </div>
          <div>
            <p style={{ color: "white" }}>.</p>
            <button className={styles.CheckAvailabilityBtn}>
              {" "}
              Check Availability
            </button>
          </div>
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <JuniorSuit title={"Junior"} price={price} />
          <JuniorSuit title={"Delux"} price={Number(price) + 1000} />
          <JuniorSuit title={"Premium"} price={Number(price) + 2000} />
        </div>
      </div>
    </div>
  );
};
