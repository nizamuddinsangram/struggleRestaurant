import React, { useEffect, useState } from 'react';
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css'

const Testimonial = () => {
    const [reviews,setReviews]=useState([]);
    useEffect(()=>{
        fetch('reviews.json')
      .then(res=>res.json())
     .then(data=>setReviews(data))

    },[])

    return (
        <section>
            <SectionTitle
             subHeading={"What Our Client Say"}
             heading={"TESTIMONIAL"}
           ></SectionTitle>
           <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
           {
          reviews.map((review)=><SwiperSlide
          key={review._id}
          >
         <div className='text-center flex flex-col items-center mx-24 my-16'>
         <Rating
           style={{ maxWidth: 180 }}
                 value={review.rating}
                 readOnly
             />
            <p className='py-8'>{review.details}</p>
            <h3 className='text-2xl text-orange-400'>{review.name}</h3>
         </div>

          </SwiperSlide>)
           }
           </Swiper>
        </section>
    );
};

export default Testimonial;