
import React from 'react'
//import TopContent from './TopContent'
import AudioSection from './AudioSection'
import BatterySection from './BatterySection'
import ConnectionSection from './ConnectionSection'
import AssistanceSection from './AssistanceSection'
import PrivacySection from './PrivacySection'
import Footer from '../Footer/Footer'

const SubSection = () => {
  return (
    <section className='relative z-40 top-[110vh] ' >
       
        <ConnectionSection/>
        <PrivacySection/>
        <AudioSection/>
        <AssistanceSection/>
        <BatterySection/>
        <Footer/>
    </section>
  )
}

export default SubSection