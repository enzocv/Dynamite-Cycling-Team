import React, { useState } from 'react'
import Link from 'next/link'
import { GiHamburgerMenu } from '@react-icons/all-files/gi/GiHamburgerMenu'
import Typography from '@material-ui/core/Typography'
import { NavigationData } from './NavigationData'

const Index = () => {
  const [activeLink, setActiveLink] = useState(1)

  const handleChangeActiveLink = (idLink) => {
    setActiveLink(idLink)
  }

  return (
    <>
      <div className="relative">
        <div className="absolute top-0 left-0 w-full z-30">
          <div
            className="fixed w-full h-28 flex justify-center items-center pb-4"
            style={{ backgroundColor: 'rgba(0,0,0,0.37)' }}
          >
            <div className="sm:hidden text-white flex justify-start w-full">
              <div className="container pl-8 flex items-center">
                <GiHamburgerMenu
                  className="cursor-pointer text-12"
                  onClick={() => alert('menu')}
                />
                <Typography
                  component="spam"
                  variant="spam"
                  className=" pl-8 text-10 font-medium"
                >
                  Team Dynamite
                </Typography>
              </div>
            </div>
            <ul className="container justify-around  mx-auto hidden sm:flex justify-center items-center z-20 text-white">
              {NavigationData.map((item) => (
                <li>
                  <Link href={item.linkName} key={item.id}>
                    <a
                      onClick={() => handleChangeActiveLink(item.id)}
                      className={`font-medium px-8 py-4 hover:bg-blue-200 transition duration-700 ease-in-out ${
                        item.id === activeLink
                          ? 'border-b-4 border-blue-500'
                          : ''
                      }`}
                    >
                      {item.name}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default Index
