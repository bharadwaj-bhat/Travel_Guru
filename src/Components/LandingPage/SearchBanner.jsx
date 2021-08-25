import styles from "../../Styles/LandingPage.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useRef, useState } from "react";
import SearchIcon from "@material-ui/icons/Search";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import LocationOnIcon from "@material-ui/icons/LocationOn";
import DateRangeIcon from "@material-ui/icons/DateRange";

export const SearchBanner = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDay2, setSelectedDay2] = useState("");

  const [hotels, setHotels] = useState(true);

  let checkOutInp = null;

  const handleCheckIn = (e) => {
    setSelectedDay(e);
    checkOutInp.current.focus();
  };

  const renderCustomInput = ({ ref }) => {
    checkOutInp = ref;

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

  const formatInputValue = () => {
    if (!selectedDay) return "";
    return `${selectedDay.day}/${selectedDay.month}/${selectedDay.year}`;
  };

  const formatInputValue2 = () => {
    if (!selectedDay2) return "";
    return `${selectedDay2.day}/${selectedDay2.month}/${selectedDay2.year}`;
  };

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
            <input type="text" name="" id="" placeholder="Search for hotels" />
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
            {/* <div className={styles.calendarIcon}>
              <DateRangeIcon color="inherit" />
            </div> */}

            <DatePicker
              calendarPopperPosition={"bottom"}
              value={selectedDay2}
              onChange={setSelectedDay2}
              renderInput={renderCustomInput2}
              shouldHighlightWeekends
              //   className="my-custom-input-class"
            />
            <div className={styles.personDiv}>
              {" "}
              <p> 1 Person in 1 Room </p>
              <ArrowDropDownIcon />
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
