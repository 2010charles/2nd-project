import React from 'react'
import './about.css'

export default function About() {
  return (
    <div className='aboutPage'>
      <div className='aboutContent1'>
       <h3 className='headerRepeate1'>Who Are We</h3>
       <p className='about1'>We are the Job Flight Company Kenya located in Westlands Area. our main goal is to interview graduates who are speceialist in software engineering,computer science,computer science and mathematics </p>
       <p className='about1'>We advice people who are have basics skills to impove on themselves in order to meet any comapany qualification </p>
       <p className='headerRepeate1'>our main goal is to educate learners on this areas</p>
       <p className='list'>How to answer any job interview question</p>
       <p className='list'>Evaluate the learner on weak skills he/she needs to work on</p>
       <p className='list'>Evaluate if the learner meent all qualitication on the area of specialization provided in the next page</p>
       <p className='list'>Refer the qualified learner on the available jobs</p>
       <p className='list'>Quide learner on the steps to follow in any job interview</p>
       <p className='list'>Note</p>
       <div className='towCircle'>
         <div className='firstcircle'>
         <h4 className='mv mission'>Our Mission</h4>
         <p className='mc1 missionconten'>leader in advancement of Tech talent in Africa.</p>
         </div>
         <div className='secondcircle'>
          <h4 className='mv1 vision'>Our vision</h4>
          <p className='mc1 vision'>To drive transformative change in Africa </p>
         </div>
       </div>
        <div className='problems'>
          <h4 className='headerRepeate1'>What problem we are solving</h4>
          <p className='list list2'>Provide youth will the relevant interview question</p>
          <p className='list list2'>Evaluate learner if they are job ready</p>
          <p className='list list2'>Recommend out sponser on people to give chance to their industry</p>
          <p className='list list2'>Help in advancement on technology</p>
          <p className='list list2'>Connent Africa using technology</p>
        </div>
        <div className=' solution'>
        <h4 className='headerRepeate1'>Our Solutons</h4>
        <p className='list2 list3'>Provide remote interview</p>
        <p className='list2 list3'>provide online interview</p>
        <p className='list2 list3'>Evaluate learner on area of specialization</p>
        <p className='list2 list3'>Connect all countrys of Africa</p>
        </div>
        <div className='goal'>
         <h4 className='headerRepeate1'>Our goal</h4>
         <h1 className='headerRepeate1'>Provide job to learners across Africa</h1>
        </div>
      </div>
    </div>
  )
}
