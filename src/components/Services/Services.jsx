import React from 'react'
import servicesData from '../../constants/services'

const Service = ({service}) => {
  const SCREEN_WIDTH = window.innerWidth;
  const isMobile = SCREEN_WIDTH < 640;

  return (
    <div className={`h-[600px] md:h-screen md:max-h-[600px] ${isMobile ? service['background-mobile'] : service['background-desktop']} bg-cover bg-no-repeat grid px-5 pb-16`}>
      <div className="self-end text-center grid gap-6">
        <h2 className={`text-3xl font-fraunces font-[900] ${service.text}`}>{service.title}</h2>
        <p className={`md:text-[18px] md:px-36 font-barlow ${service.text}`}>{service.description}</p>
      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className='md:grid md:grid-cols-2'>
      {servicesData.map((service, index) => (
        <Service key={index} service={service} />
      ))}
    </section>
  )
}

export default Services