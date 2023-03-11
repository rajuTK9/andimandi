import React from 'react'
import './BrowsePage.css'
import MainBhadaas from '../LandingPage/MainBhadaas'
import Navbar from '../Navbar/Navbar'
import BhadaasCard from './BhadaasCard'
import SideBar from '../SideBar/SideBar'

function BrowsePage() {
  return (
    <div className='browsepage'>
        <Navbar />
        <SideBar />
      <div className='main-container flex'>
        <div>
            <MainBhadaas />
            <div className='cards-container flex'>
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
                <BhadaasCard
                    text='Lorem ipsum dolor sit amet'
                />
            </div>
        </div>
        <div className='adspace-browse'>

        </div>
      </div>
    </div>
  )
}

export default BrowsePage
