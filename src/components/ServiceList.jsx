import { useDispatch, useSelector } from 'react-redux';
import services from '../data/portfolio';
import { setImageLoading, setLoaderHeight, setSelectedService } from '../features/portfolioSlice';

const ServiceList = ({ imageBox }) => {
  const dispatch = useDispatch();
  const { selectedService } = useSelector((state) => state.portfolio);

  const handleServiceChange = (currentService) => {
    dispatch(setLoaderHeight((imageBox?.current?.clientHeight + 10) * 2));
    dispatch(setSelectedService(currentService));
    dispatch(setImageLoading(false));
  };

  return (
    <div>
      <div className='font-semibold text-2xl text-[#2C2C2C] mb-3'>Services</div>

      {services.map((service, index) => (
        <div key={index} className='border-b border-solid border-[#EEEDF6]'>
          <input
            checked={selectedService.name === service.name}
            onChange={() => {
              handleServiceChange(service);
            }}
            id={service.name}
            name='service'
            type='radio'
            className='hidden'
          />
          <label htmlFor={service.name} className={`flex items-center py-4  xl:cursor-pointer select-none font-roboto`}>
            <span
              className={`w-4 h-4 rounded-full mr-3 border-2 !border-solid ${
                selectedService.name === service.name ? 'border-tertiary bg-tertiary' : 'border-grey'
              }`}
            ></span>
            <span className='font-light text-[#2C2C2C]'>{service.name}</span>
          </label>
        </div>
      ))}
    </div>
  );
};
export default ServiceList;
