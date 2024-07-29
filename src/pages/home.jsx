import React from 'react'
import Layout from '../layout/layout'
import Feed from '../component/feed'
import Navigation from '../component/navigation'
import Sidebar from '../component/sidebar'

const Home = () => {
  return (
    <div>
        {/* <Layout/> */}
        {/* <Feed/> */}
        {/* <div className="flex flex-col h-screen overflow-hidden">
        <Navigation />
        </div>
        <div className="flex h-full">
        <Sidebar />   
        </div>      */}
        <Layout/>
        <div className="ml-52 mt-3 flex-1 overflow-y-auto p-4">
        <Feed/>
        </div>
    </div>
  )
}

export default Home