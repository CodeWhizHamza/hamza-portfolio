import React from 'react'
import Title from './../common/Title/Title'
import Service from './Service'
import './Services.css'

export default function Services() {
  const services = [
    {
      title: 'Hand-written code',
      text: 'I write the whole code by hand. Which means that you’re able to read and understand the code easily.',
      imgURL: '/img/handwritten-code.svg',
    },
    {
      title: 'Optamized Code',
      text: 'I write completely optamized code. Which means that your website will load faster and will have high perpormance.',
      imgURL: '/img/optamized-code.svg',
      isLtr: true,
    },
    {
      title: 'SEO optamized code',
      text: 'I write complete semantic code. My code ranks on SEO and your site will be on top in search results.',
      imgURL: '/img/seo-optamized.svg',
    },
    {
      title: 'Creative Mockups',
      text: 'I design modern and creative UI mockups. My mockups are eye catching and they will increase your customers exponentially.',
      imgURL: '/img/mockup.svg',
      isLtr: true,
    },
    {
      title: 'Mobile-Friendly Layout',
      text: 'I’ll design and code your site responsive. It means your website will look awesome both on PC and PHONE. ',
      imgURL: '/img/mobile-friendly.svg',
    },
  ]

  return (
    <section id="services" className="services container">
      <Title text="My Services" />

      {services.map((service, i) => (
        <Service {...service} key={i} />
      ))}
    </section>
  )
}
