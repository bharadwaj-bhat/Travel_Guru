import StarBorderIcon from "@material-ui/icons/StarBorder";
import StarIcon from "@material-ui/icons/Star";
import styles from "../../Styles/RoomsInner.module.css";

export const NameHeader = ({ data }) => {
  const { name, location, sPrice } = data;
  return (
    <>
      {data && (
        <div className={styles.NameHeaderWrapper}>
          <div>
            <div className={styles.NameHeader}>
              <h2> {name} </h2>
              {[1, 2, 3, 4, 5].map((el) => (
                <StarIcon fontSize="inherit" color="inherit" />
              ))}
              <img
                src="https://css.yatra.com/content/b2c-cdn/bongo-cdn/banners/hotel/yatra-safetyAssured/cleanPass.png"
                alt="clean pass"
              />
            </div>

            <p
              className={styles.locationP}
            >{`${location}, Ladakh, Leh, 194101`}</p>
          </div>
          <div>
            <div className={styles.PricePer}>
              {" "}
              <h2> ₹{sPrice}</h2>
              <button> Choose Room </button>
            </div>
            <p className={styles.perNightPtag}> Price for 1 night </p>
          </div>
        </div>
      )}
    </>
  );
};
