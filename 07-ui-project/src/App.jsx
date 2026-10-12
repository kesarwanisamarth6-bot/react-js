import React from 'react'
import Section1 from './components/Section1/Section1'
import Section2 from './components/Section2/Section2'


const App = () => { 

  const users =[
  {
  img: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=600&auto=format&fit=crop&q=80',
  intro: 'Meet Sarah, a creative designer transforming ideas into beautiful, user-friendly digital experiences.',
  tag: 'Satisfied',
  color: '#C87543'
},
{
  img: 'https://images.unsplash.com/photo-1498758536662-35b82cd15e29?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  intro: 'Emily helps businesses grow through innovative strategies, thoughtful planning, and creative problem-solving.',
  tag: 'Underserved',
  color: '#075985'
},
{
  img: 'https://plus.unsplash.com/premium_photo-1661641353075-f0eaf2d82aae?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  intro: 'Olivia builds modern technology solutions that simplify workflows and improve everyday user experiences.',
  tag: 'Underbanked',
  color: '#64748B'
},
{
  img: 'https://images.unsplash.com/photo-1727268533600-eb783879ae86?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  intro: 'Sarah helps small businesses access financial services and build a more secure financial future.',
  tag: 'Small Business Owners',
  color: '#334155'
},
{
  img: 'https://images.unsplash.com/photo-1747741744095-609572aa59ad?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  intro: 'Emma empowers young professionals to manage their money confidently and achieve their financial goals.',
  tag: 'Young Professionals',
  color: '#B77936'
},
{
  img: 'https://plus.unsplash.com/premium_photo-1661594430156-6d5973b67131?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=NHwxMjA3fDA%3D',
  intro: 'Olivia creates accessible banking experiences that help people save, invest, and manage money effortlessly.',
  tag: 'Digital Banking Users',
  color: '#6B8E78'
}

  ]
  return (
    <div>
     <Section1 users ={users}/>
     <Section2 />
    
    </div>
  )
}

export default App