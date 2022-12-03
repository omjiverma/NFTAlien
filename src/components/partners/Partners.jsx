import partner1 from '../../assests/partnersImg/partner (1).png'
import partner2 from '../../assests/partnersImg/partner (2).png'
import partner3 from '../../assests/partnersImg/partner (3).png'
import partner4 from '../../assests/partnersImg/partner (4).png'
import partner5 from '../../assests/partnersImg/partner (5).png'
import partner6 from '../../assests/partnersImg/partner (6).png'
import partner7 from '../../assests/partnersImg/partner (7).png'
import partner8 from '../../assests/partnersImg/partner (8).png'
import partner9 from '../../assests/partnersImg/partner (9).png'
import partner10 from '../../assests/partnersImg/partner (10).png'
import partner11 from '../../assests/partnersImg/partner (11).png'
import partner12 from '../../assests/partnersImg/partner (12).png'
import partner13 from '../../assests/partnersImg/partner (13).png'
import partner14 from '../../assests/partnersImg/partner (14).png'
import partner15 from '../../assests/partnersImg/partner (15).png'
import partner16 from '../../assests/partnersImg/partner (16).png'
import partner17 from '../../assests/partnersImg/partner (17).png'
import partner18 from '../../assests/partnersImg/partner (18).png'

import './partners.css'

export default function Partners() {

  
  return (
    <section className='partners'>
      <h2>BINABOX<span> PARTNER</span></h2>
        <div className='partners__imgs'> 
          <PartnerBlock img ={partner1} />      
          <PartnerBlock img ={partner2} />      
          <PartnerBlock img ={partner3} />      
          <PartnerBlock img ={partner4} />      
          <PartnerBlock img ={partner5} />      
          <PartnerBlock img ={partner6} />      
          <PartnerBlock img ={partner7} />      
          <PartnerBlock img ={partner8} />      
          <PartnerBlock img ={partner9} />      
          <PartnerBlock img ={partner10} />      
          <PartnerBlock img ={partner11} />      
          <PartnerBlock img ={partner12} />      
          <PartnerBlock img ={partner13} />      
          <PartnerBlock img ={partner14} />      
          <PartnerBlock img ={partner15} />      
          <PartnerBlock img ={partner16} />      
          <PartnerBlock img ={partner17} />      
          <PartnerBlock img ={partner18} />     
        </div>
    </section>
  )
}

const PartnerBlock = (props) => (
<div className='partners__imgs-img'>
  <img src={props.img} alt="partner"/>
</div>
)