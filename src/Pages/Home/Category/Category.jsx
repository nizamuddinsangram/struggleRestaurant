import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import slide1 from '../../../assets/home/slide1.jpg'
import slide2 from '../../../assets/home/slide2.jpg'
import slide3 from '../../../assets/home/slide3.jpg'
import slide4 from '../../../assets/home/slide4.jpg'
import slide5 from '../../../assets/home/slide5.jpg'
import SectionTitle from '../../../Components/SectionTitle/SectionTitle';
const Category = () => {
    return (
      <>
      <SectionTitle
        subHeading={"From 11.00am to 1.00am"}
        heading={"Order Online"}
      ></SectionTitle>
        <Swiper 
        slidesPerView={4}
        spaceBetween={30}
        centeredSlides={true}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper mb-24"
        >
     <SwiperSlide className=''>
        <img src={slide1} alt="slide1" />
        <h3 className='text-4xl uppercase text-center -mt-12  '>Salads</h3>
     </SwiperSlide>
     <SwiperSlide>
        <img src={slide2} alt="slide1" />
        <h3 className='text-4xl uppercase text-center -mt-12'>PIZZA</h3>
     </SwiperSlide>
     <SwiperSlide>
        <img src={slide3} alt="slide1" />
        <h3 className='text-4xl uppercase text-center -mt-12 '>SOUP</h3>
     </SwiperSlide>
     <SwiperSlide>
        <img src={slide4} alt=" slide1" />
        <h3 className='text-4xl uppercase text-center -mt-12 '>CAKE</h3>
     </SwiperSlide>
     <SwiperSlide>
        <img src={slide5} alt="slide1" />
        <h3 className='text-4xl text-center uppercase -mt-12 '>SOUP</h3>
     </SwiperSlide>


            
        </Swiper>
        </>
    );
};

export default Category;