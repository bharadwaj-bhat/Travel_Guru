import { SearchBanner } from "./SearchBanner"
import { BestSelling } from "./BestSelling"
import {TrendingDestinations} from './TrendingDestinations'
import { CustomerReviews } from './CustomerReviews'
import { Features } from "./Features"
import { Footer } from "./Footer"


export const LandingPage = () => {
    return (
        <div>
            <SearchBanner />
            <BestSelling />
            <TrendingDestinations />
            <CustomerReviews />
            <Features />
            <Footer/>
        </div>
    )
}