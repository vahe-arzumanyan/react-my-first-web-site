import React, {useState} from "react";
import './style.scss';
import offerImg1 from "../../../assets/image/offer-1.jpg";
import offerImg2 from "../../../assets/image/offer-2.jpg";

const Offer = () => {

    const [offer, setOffer] = useState([
        {
            title: 'save 20%',
            description: 'Special Offer',
            offerImg: offerImg1,
            alt: 'img'
        },
        {
            title: 'save 20%',
            description: 'Special Offer',
            offerImg: offerImg2,
            alt: 'img'
        }
    ])

    return <div className='P-offer-content'>
        {offer.length ? offer.map((item, index) => {
            return  <div item={item} key={index}>
                <div style={{backgroundImage: `url(${item.offerImg})`}} alt={item.alt} className='G-image-cover P-offer-img'>
                    <p>{item.title}</p>
                    <p>{item.description}</p>
                </div>
            </div>
        }) : null}

    </div>
}

export default Offer;