import './hero.css'
import  hero  from '../../assests/IMG.jpg'
export default function Hero() {
  return (
    <main className="hero">
        <div className="hero__img">
            <img src = {hero} alt= 'hero'/>
        </div>
        <div className="hero__img-overlay">
          <h1>EXPLORE NFT COLLECTION</h1>
          <p>A collection of 2525 highly-fashionable NFTs on the ETH Blockchain. Unique, 
             metaverse-ready, and designed to benefit their holders.
          </p>

          <div className='hero__img-overlay-btn-container'> 
            <button type='button' className='btn-green'> Connect Wallet </button>
            <button type="button" className='btn-green-outline'>Whitelist Now</button>
          </div>
        </div>
    </main>
  )
}