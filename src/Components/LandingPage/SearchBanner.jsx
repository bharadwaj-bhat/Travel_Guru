import styles from "../../Styles/landingPage.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useHistory } from "react-router-dom";
// for popover
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
// import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
// import { Button } from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import {
  adults,
  checkInDate,
  checkOutDate,
  children,
} from "../../redux/DatesData/actionTypes";
import styled from "styled-components";

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

const CustomDiv = styled.div`
  & > div:first-child > div{
    display:${props => ("leh".includes(props.text))&&props.text.length>0 ? "block" : "none"};
  }
`

export const SearchBanner = () => {
  const checkInState = useSelector((state) => state.date.checkInDate);
  const checkOutState = useSelector((state) => state.date.checkOutDate);
  const [text, setText] = useState("");
  const adultsCount = useSelector((state) => state.date.adults);
  const childrenCount = useSelector((state) => state.date.children);

  const [hotels, setHotels] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
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
    dispatch(checkInDate(e));
    checkOutRef.current.focus();
  };

  const hadleCheckOut = (e) => {
    dispatch(checkOutDate(e));
  };

  const handleSearch = () => {
    history.push("/hotel-search");
  };

  const addAdults = (payload) => {
    dispatch(adults(payload));
  };
  const addChildren = (payload) => {
    dispatch(children(payload));
  };

  const renderCustomInput = ({ ref }) => {
    checkOutRef = ref;
    return (
      <>
        <input
          readOnly
          ref={ref} // necessary
          placeholder="Check-In date"
          value={
            checkInState
              ? `${checkInState.day}/${checkInState.month}/${checkInState.year}`
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
          checkOutState
            ? `${checkOutState.day}/${checkOutState.month}/${checkOutState.year}`
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
            className={hotels ? `${styles.underLine}`:undefined}
          >
            HOTELS
          </p>
          <p
            onClick={() => setHotels(false)}
            className={!hotels ? `${styles.underLine}`:undefined}
          >
            {" "}
            HOME STAYS{" "}
          </p>
          <p> ADVENTURES </p>
        </div>
        <div>
          <CustomDiv text={text.toLowerCase()} className={styles.BannerInputScreen}>
            <div>
              <input
                type="text"
                onChange={(e) => { setText(e.target.value) }}
              placeholder={
                hotels ? "Search for Hotels" : "Search for Home Stays"
              }
              />
              <div className={styles.popUp}>
                <p onClick={handleSearch}>Leh</p>
                <p onClick={handleSearch}>Ladakh</p>
              </div>
            </div>
            <div className={styles.locationIcon}>
              <LocationOnIcon />
            </div>
            <DatePicker
              calendarPopperPosition={"bottom"}
              onChange={handleCheckIn}
              renderInput={renderCustomInput}
              shouldHighlightWeekends
              colorPrimaryLight="rgb(240,130,67)"
            />
            <DatePicker
              calendarPopperPosition={"bottom"}
              onChange={hadleCheckOut}
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
                              onClick={() => addAdults(-1)}
                              className={classes.btnM}
                              disabled={adultsCount === 0}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <p className={classes.btnP}>{adultsCount}</p>
                            <button
                              onClick={() => addAdults(1)}
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
                              onClick={() => addChildren(-1)}
                              disabled={childrenCount === 0}
                              className={classes.btnM}
                            >
                              {" "}
                              -{" "}
                            </button>
                            <p className={classes.btnP}>{childrenCount}</p>
                            <button
                              onClick={() => addChildren(1)}
                              className={classes.btn}
                            >
                              {" "}
                              +{" "}
                            </button>
                          </div>
                        </div>
                      </div>
                      <Divider />
                      <button className={classes.doneBtn} onClick={handleClose}>
                        {" "}
                        DONE{" "}
                      </button>
                    </div>
                  </Paper>
                </Box>
              </Popover>
            </div>
            <div onClick={handleSearch} className={styles.searchBtn}>
              {" "}
              <SearchIcon
                onClick={handleSearch}
                color="inherit"
                fontSize="large"
              />{" "}
            </div>
          </CustomDiv>
        </div>
      </div>
    </div>
  );
};
