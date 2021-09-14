import styles from "../../Styles/landingPage.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";
import { useHistory } from "react-router-dom";
import {CustomDiv} from '../../Styles/stylecomponents/CustomerReviewStyle';
import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import {useStyles2} from "../../Styles/stylecomponents/stylecomponents"
import { useDispatch, useSelector } from "react-redux";
import {
  adults,
  checkInDate,
  checkOutDate,
  children,
} from "../../redux/DatesData/actionTypes";

export const SearchBanner = () => {
  const checkInState = useSelector((state) => state.date.checkInDate);
  const checkOutState = useSelector((state) => state.date.checkOutDate);
  const [text, setText] = useState("");
  const adultsCount = useSelector((state) => state.date.adults);
  const childrenCount = useSelector((state) => state.date.children);
  const [hotels, setHotels] = useState(true);
  const history = useHistory();
  const dispatch = useDispatch();
  const classes = useStyles2();
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  let checkOutRef;
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
         className={styles.search_banner_2}
          // a styling class
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
        className={styles.search_banner_1}
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
