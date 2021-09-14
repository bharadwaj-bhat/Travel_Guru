import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import { makeStyles } from "@material-ui/core/styles";
import { red } from '@material-ui/core/colors';

export const carouselStyles = {
  style: {
    background: "#fff",
    color: "#999",
    opacity: "0.8",
    borderRadius: "50%",
    height: "30px",
    width: "30px",
    margin: "5px",
  },
};
export const GreyCheckbox = withStyles({
  root: {
        color: grey[300],
        margin: '3px 10px 3px 0px',
      padding: "0px",
    '&$checked': {
        color: grey[300],
        margin: '3px 10px 3px 0px',
         padding: "0px",
        }
  },
  checked: {},
})((props) => <Checkbox {...props} />);

export const useStyles = makeStyles((theme) => ({
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

export const useStyles2 = makeStyles((theme) => ({
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

export const RedCheckbox = withStyles({
  root: {
        color: red[400],
    '&$checked': {
        color: red[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);