import React from 'react'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import Image from 'next/image'

const data = [
  { id: 1, name: 'Junior Cardenas', rol: 'Fundador', img: '/hero-img.png' },
  { id: 2, name: 'Cristian', rol: 'Fundador', img: '/hero-img.png' },
  { id: 3, name: 'Luis Chambilla', rol: 'Fundador', img: '/hero-img.png' },
  { id: 4, name: 'Miguel', rol: 'Fundador', img: '/hero-img.png' },
  { id: 5, name: 'Brandom', rol: 'Fundador', img: '/hero-img.png' },
  { id: 6, name: 'Enzo Catalán', rol: 'Fundador', img: '/hero-img.png' },
]

const Index = () => {
  return (
    <>
      <a id="Team" className="transition duration-700 ease-in-out" />
      <div className="w-full">
        <Divider />
        <Typography
          component="h4"
          variant="h4"
          className="text-center py-8 text-20"
        >
          Nuestro Team
        </Typography>
        <div className="my-16 justify-center items-center justify-around sm:my-8 sm:flex sm:flex-wrap">
          {data.map((item) => (
            <div
              key={item.id}
              className="rounded-lg overflow-hidden flex items-center shadow-md
              mb-16 sm:w-160 sm:mx-8 sm:flex-col"
            >
              <div className="w-full">
                <Image
                  alt="bicycle"
                  src="/hero-img.png"
                  layout="responsive"
                  width={200}
                  height={200}
                  quality={100}
                  className="object-cover"
                />
              </div>
              <div className="w-2/3 px-8 py-8 sm:text-center">
                <p className="text-12 font-bold text-light-blue-300">
                  {item.name}
                </p>
                <p className="text-10 font-medium text-grey-500">{item.rol}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default Index
