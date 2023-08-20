import { useRef } from 'react';
import dotMatrix from './assets/dotMatrix.svg';
import ellipse from './assets/ellipse.svg';
import Gallery from './components/Gallery';
import Heading from './components/Heading';
import ServiceList from './components/ServiceList';

function App() {
  const imageBox = useRef();
  return (
    <>
      <Heading />
      <main className='font-roboto relative bg-[#F7F9FF] xl:bg-gradient-to-r from-[#FCFCFC] from-[36%] 2xl:from-[40%]  via-[#F7F9FF] via-[36%] 2xl:via-[40%] to-[#F7F9FF] to-100% pb-16 pt-12'>
        <div className='container mx-auto px-4 xl:px-0 grid grid-cols-12'>
          <div className='hidden lg:block col-span-4'>
            <ServiceList imageBox={imageBox} />
          </div>
          <div className='col-span-12 lg:col-span-8 lg:ml-20'>
            <Gallery imageBox={imageBox} />
          </div>
        </div>

        <div className='hidden xl:block absolute top-0 right-0'>
          <img src={dotMatrix} alt='dot matrix' />
        </div>
        <div className='absolute top-48 right-0'>
          <img src={ellipse} alt='bg ellipse' />
        </div>
        {/* <div className='hidden xl:block bg-bottom-shape absolute bottom-0 right-0 bg-gradient-to-r from-[#FEE6F9] h-[540px] xl:h-full xl:max-h-[680px] w-full xl:w-[60.5%]'></div> */}
      </main>
    </>
  );
}

export default App;
