import { useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import Award from './components/Award';
import CustomQuote from './components/CustomQuote';
import Gallery from './components/Gallery';
import Heading from './components/Heading';
import ServiceDropdown from './components/ServiceDropdown';
import ServiceList from './components/ServiceList';
import Testimonials from './components/Testimonials';
import services from './data/portfolio';
import { setSelectedService } from './features/portfolioSlice';

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setSelectedService(services[0]));
  }, [dispatch]);

  const imageBox = useRef();
  return (
    <>
      <Heading />
      <section className='font-roboto relative bg-[#F7F9FF] xl:bg-gradient-to-r from-[#FCFCFC] from-[36%] 2xl:from-[40%]  via-[#F7F9FF] via-[36%] 2xl:via-[40%] to-[#F7F9FF] to-100% pt-12'>
        <div className='container mx-auto px-4 xl:px-0 grid grid-cols-12'>
          <div className=' lg:hidden col-span-12 mb-8'>
            <div className='font-semibold text-2xl text-[#2C2C2C] mb-3'>Services</div>
            <ServiceDropdown imageBox={imageBox} />
          </div>
          <div className='hidden lg:block col-span-4'>
            <ServiceList imageBox={imageBox} />
          </div>
          <div className='col-span-12 lg:col-span-8 lg:ml-20 mb-4 lg:mb-0'>
            <Gallery imageBox={imageBox} />
          </div>
        </div>
        <div className='hidden xl:block absolute top-0 right-0'>
          <img
            src='https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/icons/dotMatrix.svg'
            alt='dot matrix'
          />
        </div>
        <div className='absolute top-0 right-0'>
          <img
            src='https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/icons/ellipse.svg'
            alt='bg ellipse'
          />
        </div>
        <div
          id='gallery-shape'
          className='absolute  left-0 lg:left-[36%] 2xl:left-[40%] bg-gradient-to-r from-[#FEE6F9] to-transparent top-3/4 lg:top-0 bottom-0 lg:bottom-80 right-[20%]'
        ></div>
      </section>
      <Testimonials />
      <Award />
      <CustomQuote />
    </>
  );
}

export default App;
