import './hotCollection.css';

import alien1 from '../../assests/alien-1.png';
import alien2 from '../../assests/alien-2.png';
import alien3 from '../../assests/alien-3.png';
import alien4 from '../../assests/alien-4.png';
import alien5 from '../../assests/alien-5.png';
import alien6 from '../../assests/alien-6.png';
import alien7 from '../../assests/alien-7.png';
import alien8 from '../../assests/alien-8.png';

import  AlienCard  from '../../miniComponents/alienCard/AlienCard'
export default function HotCollection() {
  return (
    <section className="hotCollection">
      <div className="hotCollection__container">
        <div className="hotCollection__container-heading">
          <h2>HOT COLLECTION</h2>
        </div>

        <div className="hotCollection__container-cards">
          <AlienCard img={alien1} text="SKISIRS #02" />
          <AlienCard img={alien2} text="sKELATON #012" />
          <AlienCard img={alien3} text="sKISIRS #03" />
          <AlienCard img={alien4} text="sKISIRS #08" />
          <AlienCard img={alien5} text="sKISIRS #06" />
          <AlienCard img={alien6} text="sKELATON #01" />
          <AlienCard img={alien7} text="SKISIRS #04" />
          <AlienCard img={alien8} text="SKISIRS #09" />
        </div>
      </div>
    </section>
  )
}