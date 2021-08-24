import styles from "../../Styles/LandingPage.module.css";
import "react-modern-calendar-datepicker/lib/DatePicker.css";
import DatePicker from "react-modern-calendar-datepicker";
import { useState } from "react";

export const SearchBanner = () => {
  const [selectedDay, setSelectedDay] = useState("");
  const [selectedDay2, setSelectedDay2] = useState("");

  const renderCustomInput = ({ ref }) => (
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
        outline: "1px solid grey",
      }}
      className="my-custom-input-class" // a styling class
    />
  );

  const renderCustomInput2 = ({ ref }) => (
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
        outline: "1px solid grey",
      }}
    />
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
          <h5>Hotels</h5>
          <h5> Home Stays </h5>
          <h5> Adventures </h5>
        </div>
        <div>
          <div className={styles.BannerInputScreen}>
            <input type="text" name="" id="" placeholder="Search for hotelss" />
            <DatePicker
              value={selectedDay}
              onChange={setSelectedDay}
              renderInput={renderCustomInput} // render a custom input
              shouldHighlightWeekends
            />
            <DatePicker
              value={selectedDay2}
              onChange={setSelectedDay2}
              renderInput={renderCustomInput2} // render a custom input
              shouldHighlightWeekends
              //   className="my-custom-input-class"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
