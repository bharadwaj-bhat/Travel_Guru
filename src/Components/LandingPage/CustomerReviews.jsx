import { MainDiv,ReviewDiv,P,ReviewInnerDiv,Symbol,RatingDiv,H3,ReviewSection,SubDiv,HeadP,BodyP} from '../../Styles/stylecomponents/CustomerReviewStyle';
import Rating from '@material-ui/lab/Rating';



export const CustomerReviews = () => {
    return (
        <>
       <MainDiv>
           <ReviewDiv>
                <P>Customer Reviews</P>
            <ReviewInnerDiv>
                 <Symbol><p>U</p></Symbol>
              <RatingDiv>
                 <H3>Utkarsha Bansal</H3>
                 <Rating name="read-only" value={5} readOnly size="small"/>
             </RatingDiv>
              <ReviewSection>
                  <p>Goa on a budget ain't a myth anymore! My friends & I stayed at a gorgeous villa with a private pool & all modern comforts that too at Rs 1600 per night. Clean and tidy rooms, helpful staff & easily accessible property. Booked it through Travelguru during their sale & I couldn't have made a better decision.</p>
              </ReviewSection>
            </ReviewInnerDiv>
          
            <ReviewInnerDiv>
                 <Symbol><p>K</p></Symbol>
              <RatingDiv>
                 <H3>Kanika Sharma</H3>
                 <Rating name="read-only" value={5} readOnly size="small"/>
             </RatingDiv>
              <ReviewSection>
                  <p>I have been to Manali before but haven't stayed at a homestay until my friend recommended one. This beautiful cottage overlooking hills took my breath away, and my fiance's. The setting only added to our romantic experience. Thank you Travelguru for helping us book this cottage, even on a very short notice.</p>
              </ReviewSection>
            </ReviewInnerDiv>

            <ReviewInnerDiv>
                 <Symbol><p>A</p></Symbol>
              <RatingDiv>
                 <H3>Ajay Agarwal</H3>
                 <Rating name="read-only" value={4.5} precision={0.5} readOnly size="small"/>
             </RatingDiv>
              <ReviewSection>
                  <p>This is a late review. Travelled to Coorg 3 months back with my wife and son, and had the most amazing time in the town. Stayed amid coffee plantation at a homestay we booked through Travelguru. We had a comfortable stay and a perfect vacation.</p>
              </ReviewSection>
            </ReviewInnerDiv>


           </ReviewDiv>
            </MainDiv>
           
           <MainDiv>
               <SubDiv>
             <div>
                 <HeadP>Verified Homestays</HeadP>
                 <BodyP>We ensure that all properties listed with us are verified thoroughly before taking live, so that you can revel in a good ambience.</BodyP>
             </div>

             <div>
                 <HeadP>Presence across India</HeadP>
                 <BodyP>We are a growing community of homestays and have successfully carved a niche across 200+ cities in India.</BodyP>
             </div>

             <div>
                 <HeadP>Diverse Listings</HeadP>
                 <BodyP>Whether your idea of home is a luxury villa, a cosy cottage, a bungalow with a private pool or a jungle stay, we've hand-picked stays for every mood.</BodyP>
             </div>
             </SubDiv>
           </MainDiv>

            </>
    )
}