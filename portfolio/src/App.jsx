import React from 'react'
import About from './Components/About'
import Bar from './Components/Bar'
import Experience  from './Components/Experience'
import Skill from './Components/Skill'
import Education from './Components/Education'
import BlurBlob from './BlurBlob'
import Banner from './Components/Banner'
import {link} from 'react-scroll'


const App = () => {
  return (
    <div className=''>
        <BlurBlob position={{top:'35%',left:'20%'}}  size={{width:'30%',height:'50%'}}>
        </BlurBlob>
        <BlurBlob position={{top:'70%',left:'80%'}}  size={{width:'30%', height:'50%'}}>
        </BlurBlob>      

      <div className='text-black'>
        <Banner/>
        <About/>
        <Bar/>
        <Experience/>
        <Skill/>
        <Education/>
      </div>
    </div>
  )
}

export default App
