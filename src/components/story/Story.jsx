import './story.css'
import StoryCard from '../../miniComponents/storyCard/StoryCard'
export default function Story() {
  return (
    <section className='story'>
      <div className='story__container'>
        <div className='story__container-story'>
          <h2>tHE STORY</h2>
          <p>Our collection's priority is to reward NFT holders by developing utilities they can use in their current everyday life.               Not in a hypothetical future.
          </p>

          <div className='story__container-story-stats'>
            <div className='story__container-story-stats-signle'> 
              <h4>Total Iteams</h4>
              <p>2240+</p>
            </div>
            
            <div className='story__container-story-stats-signle'> 
              <h4>Profiles whitelisted</h4>
              <p>1000+</p>
            </div> 
          </div>

          <div className='story__container-story-btn'>
            <button className='btn-green-outline'>Read More</button>
          </div>
        </div>

        <div className='story__container-cards__container'>
          <StoryCard cardNo="01" title="Daily Tokens" text="Earn interstellar tokens passively by staking your collectible NFT." />
          <StoryCard cardNo="02" title="Exclusive Discounts" text="Tokens and NFTs can be used for discounts at top fashion brands." />
          <StoryCard cardNo="03" title="Galactic Merch" text="Members-only merch designed by David and other world-renowned artists." />
          <StoryCard cardNo="04" title="Limited-Edition Collabs" text="Get limited-edition items from Alienverse collabs with fashion and luxury brands."  />
        </div>
      </div>
    </section>
  )
}