import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import { useState } from "react";
import styles from "../../Styles/landingPage.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";

const useStyles = makeStyles((theme) => ({
  Paper: {
    textAlign: "left",
    width: "200px",
    padding: "0px 4px",
  },
  Paper2: {
    height: "100px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    fontSize: "0.8rem",
  },
  span: {
    color: "orange",
    cursor: "pointer",
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
    alignItems: "center",
  },
}));

export const NavBar = () => {
  const classes = useStyles();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);

  const [anchorEl2, setAnchorEl2] = useState(null);
  const open2 = Boolean(anchorEl2);

  const history = useHistory();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClick2 = (event) => {
    setAnchorEl2(event.currentTarget);
  };

  const handleClose = (e) => {
    // e.stopPropagation();
    setAnchorEl(null);
  };

  const handleClose2 = (e) => {
    // e.stopPropagation();
    setAnchorEl2(null);
  };

  const handleLoginRoute = () => {
    handleClose2();
    history.push("/login");
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
        <div className={styles.gridDiv}>
          <button className={styles.NavButton}> Become a Host </button>
          <div onMouseLeave={(e) => handleClose(e)}>
            <div
              className={classes.flex}
              onMouseOver={handleClick}
              // onMouseLeave={handleClose}
            >
              <p> Help </p>
              <ArrowDropDownIcon />
            </div>

            <Popover
              open={open}
              anchorEl={anchorEl}
              onClose={handleClose}
              anchorReference="anchorEl"
              anchorOrigin={{ vertical: 40, horizontal: -70 }}
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

          <p> Offers </p>

          <div>
            <div className={classes.flex} onMouseOver={handleClick2}>
              <p> My Accounts </p>
              <ArrowDropDownIcon />
            </div>
            <Popover
              open={open2}
              anchorEl={anchorEl2}
              onClose={handleClose2}
              anchorReference="anchorEl"
              anchorOrigin={{ vertical: 45, horizontal: -50 }}
            >
              <Paper className={classes.Paper2} onMouseLeave={handleClose2}>
                <button onClick={handleLoginRoute} className={classes.LogIn}>
                  {" "}
                  LogIn{" "}
                </button>

                <Box m={2}>
                  <Typography variant="subtitle">
                    {" "}
                    New customer
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <span onClick={handleClose2} className={classes.span}>
                        SIGN UP{" "}
                      </span>
                    </Link>{" "}
                    here{" "}
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
