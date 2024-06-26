import Footer from './Footer.jsx'

import about from '../Img/ser_2.jpg';
import ScrollTopButton from './ScrollTopButton.jsx';
function About() {
  return (
    <section className=" max-w-[1640px] m-auto p-6  pb-[0]">
        <h2 className='  font_2 font-bold text-[25px] md:text-[40px] flex justify-center items-center m-[30px] '>About Us</h2>

      <div className='  flex flex-col  lg:flex-row   md:justify-between lg:justify-center lg:gap-[80px] items-center gap-[50px]'>
        <img className=' rounded-xl w-[350px] md:w-[400px] max-w-full object-cover  ' src={about} alt='img' />
        <div>
          <h3 className=' my-[10px] font-bold text-[20px]  md:text-[25px] '>We provide all services with <br/> <span className=' text-[#f97316]'> the highest quality</span>  </h3>
          <p className='w-full  lg:w-[350px] text-[#777] leading-[1.6]'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aperiam ea cum ab quis magni veniam molestias non eligendi dolores quo quisquam ad odit in maxime iure harum omnis, error unde.</p>
        </div>
      </div>
      <div>
        <Footer/>
        <ScrollTopButton/>
      </div>
    </section>
  )
}

export default About
