import React from 'react'
import Image from 'next/image'

const imgHeroName = '/hero-img.png'

const Index = () => {
  return (
    <>
      <div className="w-full h-screen relative bg-green-300 hero">
        <div
          className="w-full flex flex-col justify-center items-center z-20 m-auto absolute"
          style={{ top: '50%' }}
        >
          <p className="text-blue-500 text-19 font-medium sm:text-2xl md:text-3xl">
            Sean bienvenidos a esta familia
          </p>
          <p className="text-white text-12 font-light sm:text-14 md:text-15 lg:text-xl">
            todos unidos por una unica pasión ...
          </p>
        </div>
        <div className="absolute inset-0">
          <Image src={imgHeroName} layout="fill" alt="Banner Image" />
        </div>
      </div>
      <style jsx>{`
        .hero:after {
          content: '';
          width: 100%;
          height: 100%;
          background-color: black;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.67;
          z-index: 0;
        }
      `}</style>
    </>
  )
}

export default Index
