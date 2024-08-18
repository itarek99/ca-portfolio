const CustomQuote = () => {
  return (
    <div className='bg-[#F7F9FF] relative px-4 lg:px-0'>
      <div className='container mx-auto mt-12'>
        <div className='flex flex-col lg:flex-row justify-between py-12'>
          <p className='text-gray-800 font-bold font-roboto text-lg md:text-3xl lg:leading-10  z-10'>
            Reach out for high-quality photo editing.{' '}
            <span className='text-blue-600 bg-blue-600/5 px-1'>
              <br className='block lg:hidden' />
              Let's Work <br className='hidden lg:block' />
              Together.
            </span>
          </p>

          <div className='mt-6 z-10'>
            <a
              href='https://clippingpathca.com/get-a-quote/'
              className='bg-secondary w-full md:w-auto px-5 py-3 capitalize !no-underline !text-white font-medium rounded-md font-roboto'
            >
              Request a custom quote
            </a>
          </div>
        </div>
      </div>
      <div className='custom-quote-shape absolute w-full bottom-0 bg-gradient-to-r from-[#FEE6F9]  h-full'> </div>
    </div>
  );
};
export default CustomQuote;
