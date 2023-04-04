import React from 'react'
import './BrowsePage.css'
import MainBhadaas from '../LandingPage/MainBhadaas'
import Navbar from '../Navbar/Navbar'
import BhadaasCard from './BhadaasCard'
import SideBar from '../SideBar/SideBar'

function BrowsePage(props) {
  return (
    <div className='browsepage'>
        <Navbar />
        <SideBar />
      <div className='main-container flex'>
        <div>
            <MainBhadaas />
            {props.content === 'top' ?
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
            : props.content === 'new' ?
                <div className='cards-container flex'>
                    <h1>New</h1>
                </div>
            : props.content === 'random' ?
                <div className='cards-container flex'>
                    <h1>Random</h1>
                </div>
            : props.content === 'liked' ?
                <div className='cards-container flex'>
                    <h1>Liked</h1>
                </div>
            : null
            }
        </div>
        {/* <div className='adspace-browse'>

        </div> */}
      </div>
    </div>
  )
}

export default BrowsePage
