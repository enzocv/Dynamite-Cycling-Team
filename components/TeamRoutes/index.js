import React, { useEffect, useState } from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { SliderData } from './SliderData'

import { AiOutlineArrowLeft } from '@react-icons/all-files/ai/AiOutlineArrowLeft'
import { AiOutlineArrowRight } from '@react-icons/all-files/ai/AiOutlineArrowRight'

const Index = ({ Slides }) => {
  const handleSlide = (idSlide) => {
    setCurrentImg(idSlide)
  }

  const [currentImg, setCurrentImg] = useState(1)
  const lengthSlides = Slides.length

  if (!Array.isArray(Slides) || Slides.length <= 0) {
    return null
  }

  const nextSlide = () => {
    setCurrentImg(currentImg === lengthSlides ? 1 : currentImg + 1)
  }

  const prevSlide = () => {
    setCurrentImg(currentImg === 1 ? lengthSlides : currentImg - 1)
  }

  return (
    <>
      <a id="Comunity" className="transition duration-700 ease-in-out" />
      <div className="mb-16">
        <Divider />
        <Typography
          component="h4"
          variant="h4"
          className="text-center py-8 text-20"
        >
          Team Routes
        </Typography>
        <section className="h-200 relative flex justify-center items-center max-w-md mx-auto">
          <div
            className="text-white text-18 rounded-full p-2 absolute z-20 sm:hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              top: '44%',
              right: '10px',
            }}
            onClick={() => prevSlide()}
          >
            <AiOutlineArrowRight />
          </div>

          <div
            className="text-white text-18 rounded-full p-2 absolute z-20 sm:hidden"
            style={{
              backgroundColor: 'rgba(0,0,0,0.7)',
              top: '44%',
              left: '10px',
            }}
            onClick={() => nextSlide()}
          >
            <AiOutlineArrowLeft />
          </div>

          {SliderData.map((item) => (
            <div key={item.id}>
              {item.id === currentImg && (
                <img
                  src={item.src}
                  alt="routes"
                  className="w-full rounded-lg"
                  style={{ height: '300px' }}
                />
              )}
            </div>
          ))}
          <div className="text-12  justify-center items-center absolute z-20 py-4 navigation hidden sm:flex">
            {SliderData.map((item) => (
              <div
                key={`n ${item.id}`}
                className={`px-4 mx-2 rounded-full bg-gray-600 box cursor-pointer ${
                  item.id === currentImg ? 'bg-blue-500' : ''
                }`}
                onClick={() => handleSlide(item.id)}
              />
            ))}
          </div>
        </section>
      </div>
      <style jsx>{`
        .slide {
          opacity: 0;
          transition-duration: 1s ease;
        }
        .active {
          opacity: 1;
          transition-duration: 1s ease;
          transform: scale(1.08);
        }
        .navigation {
          bottom: -10px;
        }
        .box {
          height: 8px;
          width: 4px;
        }
        @media (max-width: 768px) {
          .navContainer {
            color: red;
          }
        }
        .customOpacity::after {
          content: '';
          width: 100%;
          height: 100%;
          background-color: black;
          position: absolute;
          top: 0;
          left: 0;
          opacity: 0.7;
          z-index: 0;
        }
      `}</style>
    </>
  )
}

export default Index
