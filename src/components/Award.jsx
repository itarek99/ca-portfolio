const Award = () => {
  return (
    <div className='container mx-auto mt-12 lg:mt-20'>
      <div className=' flex flex-col items-center gap-2 justify-center'>
        <h2 className='text-2xl relative xl:text-4xl font-semibold  font-roboto'>
          <span className='text-orange-500'>Award</span> And <span className='text-orange-500'>Recognition</span>
          <img
            className='h-6 absolute top-2 -left-10 lg:-left-16 -rotate-[20deg]'
            src='https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/icons/trophy.png'
            alt=''
          />
        </h2>
        <p className='max-w-2xl relative border-b pb-8 px-4 lg:px-0 text-gray-400 text-sm lg:text-base font-roboto text-center'>
          Award-Winning Photography & eCommerce Editing Services: Discover Our Accolades and Recognitions for
          Exceptional Service and Quality Work.
          <img
            className='h-6 absolute top-12 lg:top-2 right-2 lg:-right-8  rotate-[20deg]'
            src='https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/icons/award.png'
            alt=''
          />
        </p>
      </div>

      <div className='grid grid-cols-5 gap-x-2 lg:gap-x-12 mt-12 px-4 lg:px-0'>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13].map((link, index) => (
          <div
            key={link}
            className={`${index === 10 && 'col-start-2'} flex justify-center lg:px-2 items-center h-16 lg:h-28 `}
          >
            <img
              key={index}
              src={`https://clippingpathca.com/wp-content/reactpress/apps/ca-portfolio/company/${link}.png`}
              alt=''
            />
          </div>
        ))}
      </div>
    </div>
  );
};
export default Award;
