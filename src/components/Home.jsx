import React from 'react'
import img1 from '../prjimages/image1.jpg';
import img2 from '../prjimages/mentorship.jpg'
import './home.css'

function Home() {
  return (
    <div className='main-page'>
       <div className='image&content'>
         <img style={{opacity:'0.6'}} height={900} src={img1} alt='image'/>
         <h2 className='maincontent'>Transformational Tech Training By Africa's Best Instructors & Peers.</h2>
         <button className='btn'>Apply Now</button>
       </div>
       <div className='motivationpart'>
         <h3 className='header3'>Surroundig Yourself With Positive Influence</h3>
          <div className='div1'>
          <div className='content1'>
          <h5 className='headerRepeate'>Get motivated with us as we offer interview remotly and via online</h5>
          <p className='paragraph'>Our expert faculty members are not just educators but also mentors and </p>
          <p className='paragraph'>motivators who go above and beyond to ignite the spark each student</p>
          <p className='paragraph'>within They are committed to providing personalized guidance, instilling, </p>
          <p className='paragraph'>self-belief, and nurturing a growth mindset that enables our students </p>
          <p className='paragraph'>to reach new heights of academic excellence.</p>
         </div>
         <div className='img2'>
           <img src={img2} height={450}/>
         </div>
          </div>
       </div>
    </div>
  )
}

export default Home
