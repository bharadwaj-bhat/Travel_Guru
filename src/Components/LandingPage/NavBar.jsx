import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";

import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";
import styles from "../../Styles/LandingPage.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  Popover: {
    width: "20%",
    marginTop: "40px",
    marginLeft: "925px",
    cursor: "pointer",
  },
  Popover2: {
    width: "20%",
    marginTop: "40px",
    marginLeft: "1100px",
    cursor: "pointer",
  },
  Paper: {
    textAlign: "left",
    padding: "0px 4px",
  },
  Paper2: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "0.8rem",
  },
  Nav: {
    fontSize: "0.8rem",
    fontWeight: "600",
    letterSpacing: "1px",
  },
  LogIn: {
    border: "none",
    padding: "10px 4px",
    margin: "5px 25px",
    background: "rgb(244,121,50) ",
    color: "white",
    fontSize: "1rem",
    cursor: "pointer",
  },
  flex: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  offerTag: {
    marginLeft: "-30px",
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  const [helpPopup, setHelpPopup] = useState(false);
  const [myAccountsPopup, setMyAccountsPopup] = useState(false);

  const handleClose = (e) => {
    // e.stopPropagation();
    setHelpPopup(false);
  };

  return (
    <div>
      <div className={styles.NavBar}>
        <div className={classes.Nav}>
          <img
            src="https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png"
            alt="logo"
          />
        </div>
        <div></div>
        <div className={styles.grid}>
          <button className={styles.NavButton}> Become a Host </button>
          <div
            onMouseEnter={() => setHelpPopup(true)}
            onMouseLeave={(e) => handleClose(e)}
          >
            <div className={classes.flex}>
              <p> Help </p>
              <ArrowDropDownIcon />
            </div>
            <Popover
              className={classes.Popover}
              open={helpPopup}
              aria-labelledby="simple-modal-title"
              aria-describedby="simple-modal-description"
            >
              <Paper className={classes.Paper} onMouseLeave={handleClose}>
                <Box m={2}>
                  <Typography variant="subtitle"> Contact Us </Typography>
                </Box>
                <Divider />
                <Box m={2}>
                  <Typography variant="subtitle"> Cancel Booking </Typography>
                </Box>
                <Divider />
                <Box m={2}>
                  <Typography variant="subtitle"> List Your hotel </Typography>
                </Box>
                <Divider />
              </Paper>
            </Popover>
          </div>

          <p className={classes.offerTag}> Offers </p>

          <div onMouseEnter={() => setMyAccountsPopup(true)}>
            <div className={classes.flex}>
              <p> My Accounts </p>
              <ArrowDropDownIcon />
            </div>
            <Popover className={classes.Popover2} open={myAccountsPopup}>
              <Paper
                className={classes.Paper2}
                onMouseLeave={() => setMyAccountsPopup(false)}
              >
                <button className={classes.LogIn}> LogIn </button>
                <Box m={2}>
                  <Typography variant="subtitle">
                    {" "}
                    New customer SIGN UP here{" "}
                  </Typography>
                </Box>
              </Paper>
            </Popover>
          </div>
        </div>
      </div>
    </div>
  );
};
