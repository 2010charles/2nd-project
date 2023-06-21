import React from 'react'
import './career.css'
import image3 from '../prjimages/connetAfrica.jpg'

function Career() {
  return (
    <div className='career-page'>
      <div className='careerheader'>
        <h4 className='flag'>The Flagship Program</h4>
        <p className='careercontent'>Job flight company kenya would like to educate learners who are seeking for jobs on areas to improve according to their area of specialization
        The company has decided to prepare the youth on their career path by providing them with details on what is expected to had been familiar with before attending interview for any company
        our company have partnership with company the provide job opportunity to learners who have passed out interview which is tough for those who need jobs oppotunity due to tough competetion on unemployed teens
        </p>
      </div>
      <h5 className='careerinforheader1'>The Career Path we offer Interview On</h5>
     <div className='carrerinfor'>
      <div className='allCareerFormate career-software'>
        <div className='headertop'><h5>Software Engineering</h5></div>
        <div className='content-center'><img height={210} src={image3}/></div>
        <div className='content-bottom'>System Development</div>
      </div>
      <div className='allCareerFormate career-computerS'>
         <div className='headertop'><h5>Computer Science</h5></div>
         <div className='content-center'><img height={200} src={image3}/></div>
         <div className='content-bottom'>Data Structure And Algorithms</div>
      </div>
       <div className='allCareerFormate career-IT'>
         <div className='headertop'><h5>Information Technology</h5></div>
         <div className='content-center'><img height={200} src={image3}/></div>
         <div className='content-bottom'>Networking</div>
       </div>
       <div className='allCareerFormate career-CSM'>
         <div className='headertop'><h5>Computer Science And mathematics</h5></div>
         <div className='content-center'><img height={200} src={image3}/></div>
         <div className='content-bottom'>DataStructure $ Algorithms</div>
       </div>
        <div className='allCareerFormate BBIT'>
         <div className='headertop'><h5>Busines Information Tech</h5></div>
         <div className='content-center'><img height={200} src={image3}/></div>
         <div className='content-bottom'>Mobile Application</div>
        </div>
         <div className='allCareerFormate Computer-System'>
           <div className='headertop'><h5>Computer System Eng</h5></div>
           <div className='content-center'><img height={200} src={image3}/></div>
           <div className='content-bottom'>Machine Learning</div>
         </div>
      </div>
    </div>
  )
}

export default Career
