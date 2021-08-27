import React from "react";
import styles from "../../Styles/hotelFilter.module.css"
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
const GreyCheckbox = withStyles({
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
})((props) => <Checkbox color="default" {...props} />);

export default function HotelFilterLeft(props) {
    const [hotelSearch, setHotelSearch] = React.useState(true);
    const [hotelPrice, setHotelPrice] = React.useState(true);
    const [starRating, setStarRating] = React.useState(true);
    const [advisorRating, setAdvisorRating] = React.useState(true);
    const [hotelWith, setHotelWith] = React.useState(true);
    const [localities, setLocalities] = React.useState(true);
    const [amenities, setAmenities] = React.useState(true);
    const [propertyType, setPropertyType] = React.useState(true);
    const [hotelChain, setHotelChain] = React.useState(true);
    return <div className={ styles.hotel_left_container}>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>HOTEL NAME</h6>
                <p onClick={() => {
                    setHotelSearch(!hotelSearch)
                }}>{hotelSearch?"HIDE":"SHOW"}</p>
            </span>
            {hotelSearch&&<span className={ styles.hotel_left_container_content_body}>
                <div><input type="text"/><SearchIcon className={styles.search} color="disabled"/></div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>Price for 1 Nights</h6>
                <p onClick={() => {
                    setHotelPrice(!hotelPrice)
                }}>{hotelPrice?"HIDE":"SHOW"}</p>
            </span>
            {hotelPrice&&<span className={ styles.hotel_left_container_content_body_checkbox}>
                <div><GreyCheckbox className={styles.custom_checkbox} size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Less than Rs. 1,000 <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 1,001 to Rs. 2,000 <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 2,001 to Rs. 4,000 <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 4,001 to Rs. 7,000 <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 7,001 to Rs. 10,000 <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Greater than Rs. 10,001 <p>0</p></span></div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>Star Rating</h6>
                <p onClick={() => {
                    setStarRating(!starRating)
                }}>{starRating?"HIDE":"SHOW"}</p>
            </span>
            {starRating&&<span className={ styles.hotel_left_container_content_body_rating}>
                <div>
                    <div>0,1</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>0</div>
                </div>
                <div>
                    <div>2</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>0</div>
                </div>
                <div>
                    <div>3</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>0</div>
                </div>
                <div>
                    <div>4</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>0</div>
                </div>
                <div>
                    <div>5</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>0</div>
                </div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>TRIPADVISOR RATING</h6>
                <p onClick={() => {
                    setAdvisorRating(!advisorRating)
                }}>{advisorRating?"HIDE":"SHOW"}</p>
            </span>
            {advisorRating&&<span className={ styles.hotel_left_container_content_body_rating}>
                <div>
                    <div className={styles.trip_advisor_rating}>0-1</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
                <div>
                    <div className={styles.trip_advisor_rating}>1-2</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
                <div>
                    <div className={styles.trip_advisor_rating}>2-3</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
                <div>
                    <div className={styles.trip_advisor_rating}>3-4</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
                <div>
                    <div className={styles.trip_advisor_rating}>4-5</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>SHOW HOTELS WITH</h6>
                <p onClick={() => {
                    setHotelWith(!hotelWith)
                }}>{hotelPrice?"HIDE":"SHOW"}</p>
            </span>
            {hotelWith&&<span className={ styles.hotel_left_container_content_body_checkbox}>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Clean Pass <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Free Cancellation <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Couple Friendly <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Free BreakFast <p>0</p></span></div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>All Localities</h6>
                <p onClick={() => {
                    setLocalities(!localities)
                }}>{localities?"HIDE":"SHOW"}</p>
            </span>
            {localities&&<span className={ styles.hotel_left_container_content_body_checkbox}>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Fort Road <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Old Road  <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Changspa <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Skara <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Ayu <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Chulung Old Road <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Karzoo <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Sheynam <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Lower Tukcha Road  <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Yurthung Road <p>0</p></span></div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>AMENITIES</h6>
                <p onClick={() => {
                    setAmenities(!amenities)
                }}>{amenities?"HIDE":"SHOW"}</p>
            </span>
            {amenities&&<span className={ styles.hotel_left_container_content_body_checkbox}>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>WIFI<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Airport transportation <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Laundry facilities<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Airport transportation free <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Bar<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Suitable for children <p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Swimming pool<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Full Services Health Spa<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Restaurants that deliver<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Parking<p>0</p></span></div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>PROPERTY TYPE</h6>
                <p onClick={() => {
                    setPropertyType(!propertyType)
                }}>{propertyType?"HIDE":"SHOW"}</p>
            </span>
            {propertyType&&<span className={ styles.hotel_left_container_content_body_checkbox}>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Hotels<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Resort<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Guest House<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Bed and Breakfast<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Villa<p>0</p></span></div>
            </span>
            }
        </div>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>Hotel Chains</h6>
                <p onClick={() => {
                    setHotelChain(!hotelChain)
                }}>{hotelChain?"HIDE":"SHOW"}</p>
            </span>
            {hotelChain&&<span className={ styles.hotel_left_container_content_body_checkbox}>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Yatra Smart<p>0</p></span></div>
                <div><GreyCheckbox className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Welcome Heritage Hotels<p>0</p></span></div>
            </span>
            }
        </div>      
    </div>
}