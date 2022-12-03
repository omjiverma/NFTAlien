import './aliencard.css'
import alien1 from '../../assests/alien-1.png'
export default function AlienCard(props) {
  return (
    <div className='alienCard'>
      <div className='alienCard-img'>
        <img src={props.img} />
      </div>

      <div className='alienCard-text'> 
      <h3>{props.text}</h3>
      </div>
    </div>
  )
}