import analyticsIcon from '../assets/analytics.png';

const Heading = () => {
  return (
    <section className='font-roboto container mx-auto py-20 relative'>
      <div className='flex justify-center'>
        <h2 className='text-3xl xl:text-5xl font-semibold relative font-roboto'>
          Photo Editing <span className='text-orange-500'>Portfolio</span>
          {/* <img
            className='hidden lg:block h-8 w-8 xl:h-10 xl:w-10 absolute -top-4 -right-16 xl:-right-24'
            src={dollarIcon}
            alt='dollar icon'
          /> */}
        </h2>
      </div>

      <p className='font-roboto px-3 text-bases max-w-4xl mx-auto mt-4 xl:mt-7 xl:text-lg text-gray-500 text-center'>
        Explore our diverse collection of photo editing projects,{' '}
        <span className='text-tertiary bg-tertiary/5'>showcasing our expertise</span> in clipping path, retouching,
        color correction, manipulation, and more. See{' '}
        <span className='text-tertiary bg-tertiary/5'>how we can elevate your photos</span> to the next level.
      </p>

      <div className='absolute bottom-8 xl:bottom-12  right-10 xl:right-28 flex'>
        <div className='mt-8 mr-4'>
          <svg xmlns='http://www.w3.org/2000/svg' width='81' height='18' fill='none' viewBox='0 0 81 18'>
            <path stroke='#2B74B8' strokeWidth='2' d='M1 17C4.5 11.833 15.6 1.5 32 1.5c20.5 0 26.5 13 47.5 0' />
          </svg>
        </div>
        <img className='h-8 w-8 xl:w-10 xl:h-10' src={analyticsIcon} alt='dollar icon' />
      </div>
      {/* <div className='absolute w-8 xl:w-10 h-8 xl:h-10 bottom-2 left-16 xl:left-72 transform rotate-[-30deg]'>
        <img className='w-full' src={moneyBag} alt='dollar icon' />
      </div> */}
      <div className='hidden xl:block absolute w-10 h-10 top-48 left-0'>
        <svg xmlns='http://www.w3.org/2000/svg' width='29' height='29' fill='none' viewBox='0 0 29 29'>
          <path
            fill='url(#a)'
            d='M29 14.5C29 22.508 22.508 29 14.5 29S0 22.508 0 14.5 6.492 0 14.5 0 29 6.492 29 14.5Zm-26.559 0c0 6.66 5.399 12.059 12.059 12.059 6.66 0 12.059-5.399 12.059-12.059 0-6.66-5.399-12.059-12.059-12.059C7.84 2.441 2.441 7.84 2.441 14.5Z'
            opacity='.7'
          />
          <defs>
            <linearGradient id='a' x1='14.5' x2='14.5' y1='0' y2='29' gradientUnits='userSpaceOnUse'>
              <stop stopColor='#FF6161' />
              <stop offset='.399' stopColor='#F4D564' />
              <stop offset='.607' stopColor='#2B74B8' />
              <stop offset='.816' stopColor='#52D67F' />
            </linearGradient>
          </defs>
        </svg>
      </div>
      <div className='hidden xl:block absolute w-10 h-10 top-20 left-56 transform rotate-[-30deg]'>
        <svg xmlns='http://www.w3.org/2000/svg' width='41' height='12' fill='none' viewBox='0 0 41 12'>
          <path
            stroke='#2B74B8'
            strokeWidth='2'
            d='m1.492.888 9.965 9.364L19.08 2.14l6.58 6.184 5.674-6.037 8.085 7.598'
          />
        </svg>
      </div>
    </section>
  );
};
export default Heading;
