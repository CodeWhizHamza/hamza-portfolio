import React from 'react'
import Title from '../common/Title/Title'
import SingleWork from './SingleWork'
import './Work.css'

export default function Work() {
  const works = [
    {
      title: 'Natours',
      text: 'It’s an imagenary project for a tour company. Here I have used a lot of layouts settings, I have used skewmorpishm in action.',
      langs: { blue: 'HTML', green: 'CSS', yellow: 'JavaScript' },
      imgURL: '/img/natours-img.jpg',
      isRtl: true,
      href: 'http://h-natours.surge.sh/',
    },
    {
      title: 'Omnifood',
      text: 'It’s an imagenary project for a Hotel. Here I have used a lot of layouts settings.',
      langs: { blue: 'HTML', green: '(S)CSS', yellow: 'JavaScript' },
      imgURL: '/img/omni-food-img.jpg',
      isRtl: false,
      href: 'http://omnifood-design.netlify.app/',
    },
    {
      title: 'Furniture Store',
      text: 'It’s a website for a furniture store. I had designed and developed it in my internship.',
      langs: { blue: 'HTML', green: '(S)CSS', yellow: 'JavaScript' },
      imgURL: '/img/furniture-store-img.jpg',
      isRtl: true,
      href: 'http://furniture-store-ws.netlify.com/',
    },
    {
      title: 'Business Site',
      text: 'It’s a website for a business site. I had designed and developed it in my internship.',
      langs: { blue: 'HTML', green: '(S)CSS', yellow: 'JavaScript' },
      imgURL: '/img/business-site-img.jpg',
      isRtl: false,
      href: 'https://ws-bussiness-home-page.netlify.com/',
    },
    {
      title: 'Weather App',
      text: 'It’s a Weather web app. I had created it in REACTJS for my portfolio.',
      langs: { blue: 'HTML', green: '(S)CSS', yellow: 'ReactJS' },
      imgURL: '/img/weather-app-img.jpg',
      isRtl: true,
      href: 'https://h-react-weather-app.netlify.com/',
    },
    {
      title: 'Blog Example',
      text: 'It’s a blog template I had designed and developed with some simple functionality',
      langs: { blue: 'HTML', green: '(S)CSS', yellow: 'JavaScript' },
      imgURL: '/img/blog-img.jpg',
      isRtl: false,
      href: 'https://hamza-blog.netlify.com/',
    },
    {
      title: 'Todo App',
      text: 'It’s a todo web app. I had created it in REACTJS for my portfolio.',
      langs: { blue: 'HTML', green: 'Bootstrap', yellow: 'ReactJS' },
      imgURL: '/img/todo-app-img.jpg',
      isRtl: true,
      href: 'https://h-react-todo-app.netlify.com/',
    },
  ]

  return (
    <section id="work" className="works container">
      <Title text="My Work" />

      {works.map((work, i) => {
        return <SingleWork key={i} {...work} />
      })}
    </section>
  )
}
