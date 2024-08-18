import { Tab } from '@headlessui/react';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setImageLoading, setIndex, setLoaderHeight } from '../features/portfolioSlice';

const difficultyLevel = {
  basic: 1,
  medium: 2,
  complicated: 3,
};

const Gallery = ({ imageBox }) => {
  const dispatch = useDispatch();
  // const [index, setIndex] = useState(0);
  const { loaderHeight, selectedService, index } = useSelector((state) => state.portfolio);

  const handleDifficultyChange = (index) => {
    dispatch(setIndex(index));
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
    <Tab.Group selectedIndex={index} onChange={handleDifficultyChange}>
      <Tab.List className='flex gap-4 md:gap-6 justify-center lg:justify-start '>
        {Object.keys(selectedService.difficulty).map((difficulty, index) => (
          <Tab
            key={index}
            className='z-10 flex-grow lg:flex-grow-0 px-4 md:px-10 py-2 md:py-3 shadow-md rounded-lg focus:outline-none capitalize'
            as={Fragment}
          >
            {({ selected }) => (
              <button
                className={
                  selected
                    ? 'bg-secondary text-white !border-none hover:!bg-secondary hover:!text-white focus:!bg-secondary focus:!text-white'
                    : 'bg-white text-black !border-none hover:!bg-secondary hover:!text-white focus:!bg-secondary focus:!text-white'
                }
              >
                {difficulty}
              </button>
            )}
          </Tab>
        ))}
      </Tab.List>

      <div className='mt-6 lg:mt-8'>
        <p className='capitalize text-3xl font-medium text-[#383838]'>
          {Object.keys(selectedService.difficulty)[index]}{' '}
          <a
            href='https://clippingpathca.com/order/'
            className='text-base font-light border-b border-tertiary pb-0.25 text-tertiary'
          >
            Start From ${selectedService.difficulty[Object.keys(selectedService.difficulty)[index]].pricing[0].price}
          </a>
        </p>
      </div>

      <Tab.Panels className='mt-4 flex'>
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

              <div className='grid grid-cols-4 gap-10 z-10 '>
                <div className='col-span-4 lg:col-span-3 min-h-[200px] lg:min-w-[494px] bg-white rounded-xl p-4 '>
                  <img
                    ref={imageBox}
                    className='w-full lg:h-64 object-cover min-h-0 border border-solid border-gray-800'
                    src={`https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/services/${selectedService.id}/${difficultyLevel[difficulty]}.png`}
                    alt={selectedService.name}
                  />
                </div>
                <div className='col-span-4 lg:col-span-3 mb-4 lg:mb-10'>
                  <a
                    className='!bg-[#2970FB] px-6 py-2 rounded-full text-white hover:!text-white'
                    href={selectedService.link}
                    target='_blank'
                  >
                    See More
                  </a>
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
