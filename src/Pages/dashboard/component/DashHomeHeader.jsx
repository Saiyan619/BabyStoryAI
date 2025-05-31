import React from 'react'

const DashHomeHeader = () => {
  return (
    <div
    className="hero h-[50vh] rounded-xl"
    style={{
      backgroundImage:
        "url(/adventure-time-1718205825928.jpg)",
    }}
  >
    <div className="hero-overlay h-[50vh] rounded-xl"></div>
    <div className="hero-content text-neutral-content text-center">
      <div className="max-w-md">
        <h1 className="mb-5 text-5xl font-bold">Welcome To BabyStory AI</h1>
       
      </div>
    </div>
  </div>
  )
}

export default DashHomeHeader
