import styles from "../../Styles/landingPage.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";

// for popover
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import { Button } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  popUp: {},
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
  doneBtn: {
    border: "none",
    width: "100%",
    margin: " 20px auto",
    padding: "10px",
    background: "rgb(122,175,234)",
    color: "white",
    fontWeight: "600",
  },
}));

export const SearchBanner = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDay2, setSelectedDay2] = useState("");
  const [adults, setAdults] = useState(0);
  const [children, setChildren] = useState(0);

  const [hotels, setHotels] = useState(true);

  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  var checkOutRef;

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleCheckIn = (e) => {
    setSelectedDay(e);
    checkOutRef.current.focus();
  };

  const renderCustomInput = ({ ref }) => {
    checkOutRef = ref;
    return (
      <>
        <input
          readOnly
          ref={ref} // necessary
          placeholder="Check-in date"
          value={
            selectedDay
              ? `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`
              : ""
          }
          style={{
            textAlign: "left",
            height: "40px",
            border: "none",
            borderRight: "1px solid grey",
            padding: "2px 5px",
            width: "200px",
            outline: "none",
            marginTop: "30px",
          }}
          className="my-custom-input-class" // a styling class
        />
        <div className={styles.calendarIcon}>
          <DateRangeIcon color="inherit" />
        </div>
      </>
    );
  };

  const renderCustomInput2 = ({ ref }) => (
    <>
      <input
        readOnly
        ref={ref} // necessary
        placeholder="Check-Out date"
        value={
          selectedDay2
            ? `${selectedDay2.day}/${selectedDay2.month}/${selectedDay2.year}`
            : ""
        }
        style={{
          textAlign: "left",
          height: "40px",
          border: "none",
          borderRight: "1px solid grey",
          width: "200px",
          padding: "2px 5px",
          marginTop: "30px",
          outline: "none",
        }}
      />
      <div className={styles.calendar2Icon}>
        <DateRangeIcon color="inherit" />
      </div>
    </>
  );

  return (
    <div className={styles.SearchBanner}>
      <div className={styles.SearchBannerInner}>
        <div className={styles.SearchBannerHeader}>
          <p
            onClick={() => setHotels(true)}
            className={hotels && `${styles.underLine}`}
          >
            HOTELS
          </p>
          <p
            onClick={() => setHotels(false)}
            className={!hotels && `${styles.underLine}`}
          >
            {" "}
            HOME STAYS{" "}
          </p>
          <p> ADVENTURES </p>
        </div>
        <div>
          <div className={styles.BannerInputScreen}>
            <input
              type="text"
              name=""
              id=""
              placeholder={
                hotels ? "Search for Hotels" : "Search for Home Stays"
              }
            />
            <div className={styles.locationIcon}>
              <LocationOnIcon />
            </div>
            <DatePicker
              calendarPopperPosition={"bottom"}
              value={selectedDay}
              onChange={handleCheckIn}
              renderInput={renderCustomInput}
              shouldHighlightWeekends
              colorPrimaryLight="rgb(240,130,67)"
            />
            <DatePicker
              calendarPopperPosition={"bottom"}
              value={selectedDay2}
              onChange={setSelectedDay2}
              renderInput={renderCustomInput2}
              shouldHighlightWeekends
            />
            <div onClick={handleClick} className={styles.personDiv}>
              {" "}
              <p> 1 Person in 1 Room </p>
              <ArrowDropDownIcon />
            </div>
            <div>
              <Popover
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorReference="anchorEl"
                anchorOrigin={{ vertical: 60, horizontal: -120 }}
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
                      <Divider />
                      <button className={classes.doneBtn}> DONE </button>
                    </div>
                  </Paper>
                </Box>
              </Popover>
            </div>
            <button className={styles.searchBtn}>
              {" "}
              <SearchIcon color="inherit" fontSize="large" />{" "}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
