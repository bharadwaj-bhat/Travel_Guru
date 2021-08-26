import styles from "../../Styles/RoomsInner.module.css";
import WifiIcon from "@material-ui/icons/Wifi";
import LocalParkingIcon from "@material-ui/icons/LocalParking";
import FreeBreakfastIcon from "@material-ui/icons/FreeBreakfast";
import FastfoodIcon from "@material-ui/icons/Fastfood";
import LocalTaxiIcon from "@material-ui/icons/LocalTaxi";
import LocalDiningIcon from "@material-ui/icons/LocalDining";
import LanguageIcon from "@material-ui/icons/Language";
import LocalLaundryServiceIcon from "@material-ui/icons/LocalLaundryService";
import CheckIcon from "@material-ui/icons/Check";
import ReactReadMoreReadLess from "react-read-more-read-less";

const iconArray = [
  <WifiIcon fontSize="inherit" color="inherit" />,
  <LocalParkingIcon fontSize="inherit" color="inherit" />,
  <FreeBreakfastIcon fontSize="inherit" color="inherit" />,
  <FastfoodIcon fontSize="inherit" color="inherit" />,
  <LocalTaxiIcon fontSize="inherit" color="inherit" />,
  <LocalDiningIcon fontSize="inherit" color="inherit" />,
  <LanguageIcon fontSize="inherit" color="inherit" />,
  <LocalLaundryServiceIcon fontSize="inherit" color="inherit" />,
];

export const OverViewCard = () => {
  return (
    <div className={styles.OverViewCard}>
      <div>
        <p> AMENITIES </p>
        <div className={styles.OverViewIcons}>
          {iconArray.map((el) => (
            <div>{el}</div>
          ))}
        </div>
        <p> OVERVIEW </p>

        <div className={styles.longText}>
          <ReactReadMoreReadLess
            readMoreClassName={styles.ReadMore}
            readLessClassName={styles.ReadLess}
            charLimit={200}
            readMoreText={"...Read more ▼"}
            readLessText={"Read less ▲"}
          >
            The Driftwood Ladakh is a premium resort located at a distance of 13
            km from Leh Palace and 15 km from Shanti Stupa. This hotel in Leh
            offers free Wi-Fi access to its guests.It comprises of 32 spacious
            and well-kept suites, spread over 3 floors. Some of the amenities
            offered with the rooms include wardrobe, television, separate
            sitting area, balcony and attached bathroom with hot and cold
            running water facility.The Driftwood Ladakh has garden dining area,
            travel desk, restaurant and front desk facility.The Leh hotel can be
            reached via Bus Stand LBOC Ltd Leh (11 km) and Leh Kushok Bakula
            Rimpochee Airport (13 km). Some of the tourist attractions are
            Pangong Tso Lake (213 km), Hall of Fame (14 km) and Shanti Stupa (15
            km).Note: Internet connectivity is subject to internet service
            provider
          </ReactReadMoreReadLess>
        </div>
        <div className={styles.advantagesDiv}>
          <div>
            <img
              src="https://css.yatra.com/content/b2c-cdn/bongo-cdn/banners/hotel/yatra-safetyAssured/cleanPass.png"
              alt=""
            />
            <p> ADVANTAGES </p>
          </div>
          <div className={styles.pointersP}>
            <div>
              <CheckIcon color="inherit" fontSize="inherit" />
              <p>
                Hotel Staff and Guest's body temperature monitored at hotel
                entry points. Refused entry if the temperature is above 99.1 ( F
                ) degree Fahrenheit.
              </p>
            </div>
            <div>
              <CheckIcon color="inherit" fontSize="inherit" />
              <p>
                Hotels are advised to keep sanitizer in room and face mask in
                every room for guest use.
              </p>
            </div>

            <div>
              <CheckIcon color="inherit" fontSize="inherit" />
              <p>
                Every hotel staff to have Aarogya Setu App as advised by Govt.
              </p>
            </div>

            <div>
              <CheckIcon color="inherit" fontSize="inherit" />
              <p>
                Every staff member wears face masks and gloves at all service
                times.
              </p>
            </div>

            <div>
              <CheckIcon color="inherit" fontSize="inherit" />
              <p>
                Hotel rooms/floors and public areas are cleaned with
                hospital-grade disinfectants.
              </p>
            </div>

            <div>
              <CheckIcon color="inherit" fontSize="inherit" />
              <p>
                The hotel has In-Room Dining options available with minimal
                contact service and disposable/sanitized crockery & cutlery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
