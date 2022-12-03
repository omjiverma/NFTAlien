import './howTo.css'

import wallet from '../../assests/Icon-png.png'
import quality from '../../assests/icon-quality.png'
import piggy from '../../assests/Icon-piggy.png'
import cart from '../../assests/Icon-cart.png'

export default function HowTo() {
  return (
    <section className='howto'>
      <h2> HOW TO <span>NFTALIEN</span> WORK</h2>
      <div className='howto-cards'>
        
        <div className='card'>
          <div className='card-img'>
           <img src={wallet} />
          </div>
          <div className='card-text'>
            <h3>STEP 1</h3>
            <h3>Connect Your Wallet</h3>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
           <img src={quality} />
          </div>
          <div className='card-text'>
            <h3>STEP 2</h3>
            <h3>Select Your Quaility</h3>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
           <img src={piggy} />
          </div>
          <div className='card-text'>
            <h3>STEP 3</h3>
            <h3>Confirm the Transaction</h3>
          </div>
        </div>

        <div className='card'>
          <div className='card-img'>
           <img src={cart} />
          </div>
          <div className='card-text'>
            <h3>STEP 4</h3>
            <h3>receive Your NFTs</h3>
          </div>
        </div>
        
      </div>
    </section>
  )
}