import './storyCard.css'

export default function(props){
  return (
    <div className='story__card'>
      <div className='story__card-content'>
        <p>{props.cardNo}</p>
        <div className='story__card-content-overlay'>
          <h3>{props.title}</h3>
          <p>
            {props.text}
          </p>
        </div>
      </div>
    </div>
  )
}
