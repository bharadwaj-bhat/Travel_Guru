import Popover from "@material-ui/core/Popover";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import Box from "@material-ui/core/Box";
import { Link, useHistory } from "react-router-dom";

import { makeStyles } from "@material-ui/core/styles";

import {  useState } from "react";
import styles from "../../Styles/landingPage.module.css";
import ArrowDropDownIcon from "@material-ui/icons/ArrowDropDown";
import { useDispatch, useSelector } from "react-redux";
import { logoutUser } from "../../redux/auth/actions";

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
  LogOut: {
    border: "none",
    padding: "10px 4px",
    margin: "5px 25px",
    background: "#fff ",
    color: "#999",
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
  const isAuth = useSelector((state) => state.auth.isAuth);
  const user = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const handleLogout = () => {
    dispatch(logoutUser());
  }

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
          <Link to="/" style={{ textDecoration: "none" }}>
            <img
              src="https://www.travelguru.com/travelguru/resources/beetle/images/tg/travelguru-homestay-logo-199x52.png"
              alt="logo"
            />
          </Link>
        </div>
        <div></div>
        <div className={styles.gridDiv}>
          <button className={styles.NavButton}> Become a Host </button>
          <div onMouseLeave={(e) => handleClose(e)}>
            <div className={classes.flex} onMouseOver={handleClick}>
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
                  <Typography variant="subtitle1"> Contact Us </Typography>
                </Box>
                <Divider />
                <Box m={2}>
                  <Typography variant="subtitle1"> Cancel Booking </Typography>
                </Box>
                <Divider />
                <Box m={2}>
                  <Typography variant="subtitle1"> List Your hotel </Typography>
                </Box>
                <Divider />
              </Paper>
            </Popover>
          </div>

          <p> Offers </p>

          <div>
            <div className={classes.flex} onMouseOver={handleClick2}>
              <p> {isAuth?`Hi, ${user.firstName}`:"My Accounts"} </p>
              <ArrowDropDownIcon />
            </div>
            {isAuth?<Popover
              open={open2}
              anchorEl={anchorEl2}
              onClose={handleClose2}
              anchorReference="anchorEl"
              anchorOrigin={{ vertical: 45, horizontal: 0 }}
            >
              <Paper className={classes.Paper3} onMouseLeave={handleClose2}>
                <button onClick={handleLogout} className={classes.LogOut}>
                  {" "}
                  LogOut{" "}
                </button></Paper></Popover>:<Popover
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
                  <Typography variant="subtitle1">
                    {" "}
                    New customer ?
                    <Link to="/register" style={{ textDecoration: "none" }}>
                      <span onClick={handleClose2} className={classes.span}>
                        SIGN UP{" "}
                      </span>
                    </Link>{" "}
                    here{" "}
                  </Typography>
                </Box>
              </Paper>
            </Popover>}
          </div>
        </div>
      </div>
    </div>
  );
};
