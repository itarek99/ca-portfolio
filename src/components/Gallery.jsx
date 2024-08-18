import { Tab } from '@headlessui/react';
import { Fragment, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageLoading, setLoaderHeight } from '../features/portfolioSlice';

const difficultyLevel = {
  basic: 1,
  medium: 2,
  complicated: 3,
};

const Gallery = ({ imageBox }) => {
  const dispatch = useDispatch();
  const [index, setIndex] = useState(0);
  const { imageLoading, loaderHeight, selectedService } = useSelector((state) => state.portfolio);

  const handleDifficultyChange = (index) => {
    console.log(selectedService);
    setIndex(index);
    dispatch(setLoaderHeight((imageBox?.current?.clientHeight + 10) * 2));
    dispatch(setImageLoading(false));
  };

  if (Object.keys(selectedService).length === 0) {
    return <div>Loading</div>;
  }

  if (!selectedService.difficulty) {
    return (
      <div className='text-xl '>
        <a className='text-secondary' href='https://clippingpathca.com/contact-with-us/'>
          Request{' '}
        </a>
        A Demo.
      </div>
    );
  }

  return (
    <Tab.Group onChange={handleDifficultyChange}>
      <Tab.List className='flex gap-4 md:gap-6 justify-center lg:justify-start '>
        {Object.keys(selectedService.difficulty).map((difficulty, index) => (
          <Tab
            key={index}
            className='z-10 flex-grow lg:flex-grow-0 px-4 md:px-10 py-2 md:py-3 shadow-md rounded-lg focus:outline-none capitalize'
            as={Fragment}
          >
            {({ selected }) => (
              <button className={selected ? 'bg-secondary text-white' : 'bg-white text-black'}>{difficulty}</button>
            )}
          </Tab>
        ))}
      </Tab.List>

      <div className='mt-8 lg:mt-12'>
        <p className='capitalize text-3xl font-medium text-[#383838]'>
          {Object.keys(selectedService.difficulty)[index]}{' '}
          <a href='#' className='text-base font-light border-b border-tertiary pb-0.25 text-tertiary'>
            Start From ${selectedService.difficulty[Object.keys(selectedService.difficulty)[index]].pricing[0].price}
          </a>
        </p>
      </div>

      <Tab.Panels className='mt-10'>
        {Object.keys(selectedService.difficulty).map((difficulty, index) => (
          <Tab.Panel key={index}>
            <div className='flex items-center flex-col '>
              {true ? null : (
                <div style={{ height: loaderHeight + 'px' }} className='flex items-center justify-center'>
                  <div
                    className='inline-block h-12 w-12 animate-spin rounded-full border-2 border-solid border-primary border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]'
                    role='status'
                  ></div>
                </div>
              )}
              <div className='flex items-center flex-col'>
                <div className='grid grid-cols-3 gap-6 z-10'>
                  <img
                    ref={imageBox}
                    className='w-full object-contain col-span-3 lg:col-span-2 min-h-0 border border-solid border-gray-400'
                    src={`https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/services/${selectedService.id}/${difficultyLevel[difficulty]}.png`}
                    alt={selectedService.name}
                  />
                </div>
              </div>
            </div>
          </Tab.Panel>
        ))}
      </Tab.Panels>
    </Tab.Group>
  );
};
export default Gallery;
