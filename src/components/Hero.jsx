import Landing from '../Img/Hero.webp';
function Hero() {
  return (
    <div className=" max-w-[1640px] m-auto p-4 " >

      <div className=' max-h-[500px] relative  w-full h-full overflow-hidden'>
        <h1 className=' absolute  text-[#fff] top-[25%]   text-[40px] sm:text-[55px] md:text-[70px]  font-bold p-6 w-full h-full'>
          The <span className=' text-[#f97316]'>Best</span>
          <br />
          ggg
          <span className=' text-[#f97316]' >Foods</span> Devlivered
        </h1>
        <img  className='max-h-[500px] w-full object-cover' src={Landing} alt="hearo_img" />
      </div>
    </div>
  )
}

export default Hero
