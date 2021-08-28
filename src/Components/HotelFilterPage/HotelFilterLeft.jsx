import React from "react";
import styles from "../../Styles/hotelFilter.module.css"
import SearchIcon from '@material-ui/icons/Search';
import Checkbox from '@material-ui/core/Checkbox';
import { grey } from "@material-ui/core/colors";
import { withStyles } from '@material-ui/core/styles';
import StarIcon from '@material-ui/icons/Star';
import createArray from "../../utils/createArray";
import { customFunction,customFunction_2 } from "../../utils/customFunction";
import { useDispatch } from "react-redux";
import { updateData } from "../../redux/hotelData/actions";
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
    const [show, setShow] = React.useState(true);
    

    const [hotelName, setHotelName] = React.useState("");

    const [hotelPriceFilter, setHotelPriceFilter] = React.useState(createArray(6));
    const [starRatingFilter, setStarRatingFilter] = React.useState(createArray(5));
    const [advisorRatingFilter, setAdvisorRatingFilter] = React.useState(createArray(5));
    const [hotelWithFilter, setHotelWithFilter] = React.useState(createArray(4));
    const [localitiesFilter, setLocalitiesFilter] = React.useState(createArray(10));
    const [amenitiesFilter, setAmenitiesFilter] = React.useState(createArray(10));
    const [propertyTypeFilter, setPropertyTypeFilter] = React.useState(createArray(5));
    const [hotelChainFilter, setHotelChainFilter] = React.useState(createArray(2));
    const dispatch = useDispatch();
    const handleDisplay = () => {
        const payload = {
            name: hotelName,
            price: hotelPriceFilter,
            star: starRatingFilter,
            advisor: advisorRatingFilter,
            hotelWith: hotelWithFilter,
            localities: localitiesFilter,
            amenities: amenitiesFilter,
            propertyType: propertyTypeFilter,
            hotelChain:hotelChainFilter,
        }
        dispatch(updateData(payload));
        // console.log(payload);
        setShow(!show);
    }
    React.useEffect(() => {
        
    })

    return <div className={ styles.hotel_left_container}>
        <div className={ styles.hotel_left_container_content}>
            <span className={ styles.hotel_left_container_content_title}>
                <h6>HOTEL NAME</h6>
                <p onClick={() => {
                    setHotelSearch(!hotelSearch)
                }}>{hotelSearch?"HIDE":"SHOW"}</p>
            </span>
            {hotelSearch&&<span className={ styles.hotel_left_container_content_body}>
                <div><input onChange={(e) => { setHotelName(e.target.value) }} value={hotelName} type="text" /><SearchIcon onClick={handleDisplay} className={styles.search} color="disabled"/></div>
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
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,0,hotelPriceFilter,setHotelPriceFilter);handleDisplay()}} className={styles.custom_checkbox} size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Less than Rs. 1,000 <p>0</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,1,hotelPriceFilter,setHotelPriceFilter);handleDisplay()}} className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 1,001 to Rs. 2,000 <p>3</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,2,hotelPriceFilter,setHotelPriceFilter);handleDisplay()}} className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 2,001 to Rs. 4,000 <p>4</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,3,hotelPriceFilter,setHotelPriceFilter);handleDisplay()}} className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 4,001 to Rs. 7,000 <p>8</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,4,hotelPriceFilter,setHotelPriceFilter);handleDisplay()}} className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Rs. 7,001 to Rs. 10,000 <p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,5,hotelPriceFilter,setHotelPriceFilter);handleDisplay()}} className={styles.custom_checkbox}  size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Greater than Rs. 10,001 <p>1</p></span></div>
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
                <div className={starRatingFilter[0] && styles.active_border} onClick={() => { customFunction_2(0, starRatingFilter, setStarRatingFilter);handleDisplay();}}>
                    <div>0,1</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>1</div>
                </div>
                <div className={starRatingFilter[1]&&styles.active_border} onClick={()=>{customFunction_2(1,starRatingFilter,setStarRatingFilter);handleDisplay();}}>
                    <div>2</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>5</div>
                </div>
                <div className={starRatingFilter[2]&&styles.active_border} onClick={()=>{customFunction_2(2,starRatingFilter,setStarRatingFilter);handleDisplay();}}>
                    <div>3</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>8</div>
                </div>
                <div className={starRatingFilter[3]&&styles.active_border} onClick={()=>{customFunction_2(3,starRatingFilter,setStarRatingFilter);handleDisplay();}}>
                    <div>4</div>
                    <div><StarIcon className={ styles.star_icon}/></div>
                    <div>3</div>
                </div>
                <div className={starRatingFilter[4]&&styles.active_border} onClick={()=>{customFunction_2(4,starRatingFilter,setStarRatingFilter);handleDisplay();}}>
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
                <div className={advisorRatingFilter[0] && styles.active_border} onClick={() => { customFunction_2(0, advisorRatingFilter, setAdvisorRatingFilter);handleDisplay()}}>
                    <div className={styles.trip_advisor_rating}>0-1</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
                <div className={advisorRatingFilter[1] && styles.active_border} onClick={()=>{customFunction_2(1,advisorRatingFilter,setAdvisorRatingFilter);handleDisplay()}}>
                    <div className={styles.trip_advisor_rating}>1-2</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>0</div>
                </div>
                <div className={advisorRatingFilter[2] && styles.active_border} onClick={()=>{customFunction_2(2,advisorRatingFilter,setAdvisorRatingFilter);handleDisplay()}}>
                    <div className={styles.trip_advisor_rating}>2-3</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>1</div>
                </div>
                <div className={advisorRatingFilter[3] && styles.active_border} onClick={()=>{customFunction_2(3,advisorRatingFilter,setAdvisorRatingFilter);handleDisplay()}}>
                    <div className={styles.trip_advisor_rating}>3-4</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>15</div>
                </div>
                <div className={advisorRatingFilter[4] && styles.active_border} onClick={()=>{customFunction_2(4,advisorRatingFilter,setAdvisorRatingFilter);handleDisplay()}}>
                    <div className={styles.trip_advisor_rating}>4-5</div>
                    <div><span className={styles.advisor_rating}></span></div>
                    <div className={styles.top_padding}>1</div>
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
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,0,hotelWithFilter,setHotelWithFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Clean Pass <p>14</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,1,hotelWithFilter,setHotelWithFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Free Cancellation <p>5</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,2,hotelWithFilter,setHotelWithFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Couple Friendly <p>8</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,3,hotelWithFilter,setHotelWithFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Free BreakFast <p>15</p></span></div>
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
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,0,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Village Shelly<p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,1,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Old Road  <p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,2,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Changspa <p>2</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,3,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Skara <p>2</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,4,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Ayu <p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,5,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Chulung Old Road <p>2</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,6,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Leh <p>3</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,7,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Chulung <p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,8,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Lower Tukcha Road  <p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,9,localitiesFilter,setLocalitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Upper Tukcha Road <p>2</p></span></div>
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
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,0,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>WIFI<p>6</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,1,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Airport transportation <p>5</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,2,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Laundry facilities<p>9</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,3,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Hotles <p>13</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,4,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Bar<p>5</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,5,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Suitable for children <p>14</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,6,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Swimming pool<p>3</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,7,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Full Services Health Spa<p>13</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,8,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Restaurants that deliver<p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,9,amenitiesFilter,setAmenitiesFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Parking<p>7</p></span></div>
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
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,0,propertyTypeFilter,setPropertyTypeFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Hotels<p>13</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,1,propertyTypeFilter,setPropertyTypeFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Resort<p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,2,propertyTypeFilter,setPropertyTypeFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Guest House<p>1</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,3,propertyTypeFilter,setPropertyTypeFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Bed and Breakfast<p>3</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,4,propertyTypeFilter,setPropertyTypeFilter);handleDisplay()}} className={styles.custom_checkbox} color="disabled" size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Villa<p>2</p></span></div>
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
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,0,hotelChainFilter,setHotelChainFilter);handleDisplay()}} className={styles.custom_checkbox} size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Yatra Smart<p>6</p></span></div>
                <div><GreyCheckbox onChange={(e)=>{customFunction(e,1,hotelChainFilter,setHotelChainFilter);handleDisplay()}} className={styles.custom_checkbox} size="small" inputProps={{ 'aria-label': 'checkbox with default color' }}/><span>Welcome Heritage Hotels<p>6</p></span></div>
            </span>
            }
        </div>      
    </div>
}