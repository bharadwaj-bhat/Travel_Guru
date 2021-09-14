import React from "react"
import styles from '../../Styles/landingPage.module.css'
import { TrendingDestinationData } from "../../fakeData/TrendingDestinationData"
import Carousel from "react-elastic-carousel";
import { useHistory } from "react-router-dom";

export const TrendingDestinations = () => {
    const history = useHistory()
    const handleRoute = () => {
        history.push("/hotel-search");
    }
    return (
        <div className={styles.TrendingDestination_container}>
            <div className={styles.TrendingDestination_container_1}><h1>Trending Destinations</h1></div>
            <div className={styles.TrendingDestination_container_2}>
                <Carousel
                showArrows={false}
				renderPagination={({ pages, activePage, onClick }) => {
					return (
						<div className={styles.trend_flex} direction="row">
							{pages.map((page) => {
                                const isActivePage = activePage === page;
								return (
									<div
                                        className={isActivePage?styles.TrendingDestination_container_pagination_1:styles.TrendingDestination_container_pagination}
										key={page}
										onClick={() => onClick(page)}
										active={isActivePage.toString()}
									>
										{page + 1}
									</div>
								);
							})}
						</div>
					);
				}}
				itemsToShow={3}
				itemsToScroll={3}
                >
                    {
                    TrendingDestinationData.map(item => {
                        return <div key={item.id} className={styles.TrendingDestination_container_card}>
                    <div onClick={handleRoute} className={styles.TrendingDestination_container_card_img}>
                        <img src={item.url} alt="" />
                    </div>
                    <div className={styles.TrendingDestination_container_card_content}>
                        <h3>{item.title}</h3>
                        <h4>Starting at ₹{item.price}</h4>
                    </div>
                </div>
                    })
                }
            </Carousel>  
            </div>
        </div>
    )
}