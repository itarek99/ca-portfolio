import { Listbox, Transition } from '@headlessui/react';
import { ChevronUpDownIcon } from '@heroicons/react/20/solid';
import { Fragment } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import services from '../data/portfolio';
import { setImageLoading, setIndex, setLoaderHeight, setSelectedService } from '../features/portfolioSlice';

const ServiceDropdown = ({ imageBox }) => {
  const dispatch = useDispatch();
  const { selectedService } = useSelector((state) => state.portfolio);

  const handleServiceChange = (currentService) => {
    dispatch(setIndex(0));
    dispatch(setLoaderHeight((imageBox?.current?.clientHeight + 10) * 2));
    dispatch(setSelectedService(currentService));
    dispatch(setImageLoading(false));
  };

  return (
    <Listbox value={selectedService} onChange={handleServiceChange}>
      <div className='relative mt-1'>
        <Listbox.Button className='relative w-full z-10 cursor-default rounded-lg py-4 px-4  xl:py-7 xl:px-8 text-left bg-white border-gray-300 hover:!bg-white hover:!text-black hover:!border-gray-300'>
          <span className='font-roboto block truncate'>{selectedService.name}</span>
          <span className='font-roboto pointer-events-none absolute inset-y-0 right-1 xl:right-4 flex items-center pr-2'>
            <ChevronUpDownIcon className='h-8 w-8 text-gray-400' aria-hidden='true' />
          </span>
        </Listbox.Button>
        <Transition as={Fragment} leave='transition ease-in duration-100' leaveFrom='opacity-100' leaveTo='opacity-0'>
          <Listbox.Options className='absolute mt-2 max-h-60 z-20 w-full overflow-auto rounded-md bg-white text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm'>
            {services.map((service, serviceIdx) => (
              <Listbox.Option
                key={serviceIdx}
                className={({ active }) =>
                  `relative cursor-default select-none py-2.5 px-4 font-roboto ${
                    active ? 'bg-secondary/20 text-gray-700' : 'text-gray-900'
                  }`
                }
                value={service}
              >
                {service.name}
              </Listbox.Option>
            ))}
          </Listbox.Options>
        </Transition>
      </div>
    </Listbox>
  );
};
export default ServiceDropdown;
