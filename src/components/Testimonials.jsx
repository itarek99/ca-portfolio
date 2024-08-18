import { useRef } from 'react';
import { BsArrowLeft, BsArrowRight } from 'react-icons/bs';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';
import reviews from '../data/reviews';

const Testimonials = () => {
  const swiperRef = useRef();
  return (
    <div className='container mx-auto mt-12 lg:mt-20'>
      <div className='flex flex-col items-center gap-2 justify-center'>
        <h2 className='text-2xl xl:text-4xl font-semibold relative font-roboto'>
          What Out <span className='text-orange-500'>Client</span> Says
        </h2>
        <p className='text-gray-400 text-sm lg:text-base font-roboto text-center'>
          Hear From Those Who Have Benefited from Our Professional Photo Editing Services.
        </p>
      </div>
      <div className='mt-8 lg:mt-12 relative'>
        <Swiper
          className='max-w-3xl'
          loop
          centeredSlides={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          onSwiper={(swiper) => {
            swiperRef.current = swiper;
          }}
          // modules={[Autoplay]}
        >
          {reviews.map((review) => (
            <SwiperSlide key={review.id}>
              <div className='relative flex flex-col items-center lg:pb-20 '>
                <div className=''>
                  <img
                    className='h-20 w-20 lg:h-28 lg:w-28 rounded-full overflow-hidden'
                    src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='Sam Altman'
                  />
                </div>
                <p className='font-bold text-2xl mt-3 lg:mt-5'>{review.name}</p>
                <p className='text-gray-500'>{review.occupationL}</p>
                <div className='flex gap-3 mt-5'>
                  {Array(review.star)
                    .fill(review.star)
                    .map((_, i) => (
                      <span key={i}>
                        <svg width='26' height='24' viewBox='0 0 26 24' fill='none' xmlns='http://www.w3.org/2000/svg'>
                          <path
                            d='M13 19.8896L7.12081 23.4313C6.86109 23.5965 6.58956 23.6674 6.30623 23.6438C6.02289 23.6201 5.77498 23.5257 5.56248 23.3604C5.34998 23.1952 5.1847 22.9888 5.06664 22.7413C4.94859 22.493 4.92498 22.2153 4.99581 21.9083L6.55414 15.2146L1.34789 10.7167C1.11178 10.5042 0.96445 10.2619 0.905894 9.98993C0.846394 9.71887 0.863866 9.45349 0.958311 9.19376C1.05276 8.93404 1.19442 8.72154 1.38331 8.55626C1.5722 8.39098 1.83192 8.28474 2.16248 8.23751L9.03331 7.63543L11.6896 1.33126C11.8076 1.04793 11.9908 0.835429 12.2392 0.693762C12.4867 0.552096 12.7403 0.481262 13 0.481262C13.2597 0.481262 13.5138 0.552096 13.7621 0.693762C14.0096 0.835429 14.1923 1.04793 14.3104 1.33126L16.9666 7.63543L23.8375 8.23751C24.168 8.28474 24.4278 8.39098 24.6166 8.55626C24.8055 8.72154 24.9472 8.93404 25.0416 9.19376C25.1361 9.45349 25.154 9.71887 25.0955 9.98993C25.036 10.2619 24.8882 10.5042 24.6521 10.7167L19.4458 15.2146L21.0041 21.9083C21.075 22.2153 21.0514 22.493 20.9333 22.7413C20.8153 22.9888 20.65 23.1952 20.4375 23.3604C20.225 23.5257 19.9771 23.6201 19.6937 23.6438C19.4104 23.6674 19.1389 23.5965 18.8791 23.4313L13 19.8896Z'
                            fill='#FFD74A'
                          />
                        </svg>
                      </span>
                    ))}
                </div>
                <div className='relative mt-6'>
                  <p className='mt-8 lg:mt-0 text-sm px-4 lg:px-0 lg:text-base text-center font-roboto text-gray-700  max-w-2xl'>
                    {review.comment}
                  </p>
                  <div className='hidden lg:block absolute -left-11 -top-20'>
                    <FaQuoteLeft className='text-7xl text-gray-100' />
                  </div>
                  <div className='hidden lg:block absolute -right-11 '>
                    <FaQuoteRight className='text-7xl text-gray-100' />
                  </div>
                </div>
                <div className='absolute h-3 w-3 rounded-full bg-[#3678B5] top-24 left-12 lg:top-36 lg:left-36' />
                <div className='absolute h-2 w-2 rounded-full bg-[#FF8643] bottom-44 right-10 lg:bottom-52 lg:right-0' />
                <div className='absolute h-2 w-2 rounded-full bg-[#E43939] top-10 right-28 lg:top-16 lg:right-56' />
                <div className='absolute top-0 left-6 border-2 border-[#2B74B8] rounded-full p-0.5 h-8 w-8'>
                  <img
                    className='rounded-full'
                    src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='Sam Altman'
                  />
                </div>
                <div className='absolute top-12 right-6 hidden lg:block lg:right-0 border-2 border-secondary rounded-full p-0.5 h-10 w-10'>
                  <img
                    className='rounded-full'
                    src='https://images.pexels.com/photos/428328/pexels-photo-428328.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
                    alt='Sam Altman'
                  />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className='absolute top-44 lg:top-64 left-0 lg:left-16 xl:left-40'>
          <button
            onClick={() => {
              swiperRef.current.slidePrev();
            }}
            className='!cursor-pointer p-4 flex z-10'
          >
            <div className='h-8 w-8 bg-[#FFE8DB] rounded-full'></div>
            <BsArrowLeft className='text-3xl text-gray-800 -ml-[22px] z-20' />
          </button>
        </div>
        <div className='absolute top-44 lg:top-64 right-0 lg:right-16 xl:right-40'>
          <button
            onClick={() => {
              swiperRef.current.slideNext();
            }}
            className='!cursor-pointer p-4 flex z-10'
          >
            <BsArrowRight className='text-3xl text-gray-800 z-20' />
            <div className='h-8 w-8 bg-[#FFE8DB] rounded-full -ml-[22px]'></div>
          </button>
        </div>
      </div>
    </div>
  );
};
export default Testimonials;
