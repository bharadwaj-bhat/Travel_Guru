import { SearchBanner } from "./SearchBanner"
import { BestSelling } from "./BestSelling"
import {TrendingDestinations} from './TrendingDestinations'
import { CustomerReviews } from './CustomerReviews'
import MainFooter from './MainFooter'


export const LandingPage = () => {
    return (
        <div>
            <SearchBanner />
            <BestSelling />
            <TrendingDestinations />
            <CustomerReviews />
            <MainFooter/>
        </div>
    )
}