import React from 'react'
import Image from 'next/image'

const data = [
  { id: 1, src: '/bicycle.png', caption: 'Entrenamiento todos los dias' },
  {
    id: 2,
    src: '/support.png',
    caption: 'Compañerismo, ninguno se queda atras',
  },
  { id: 3, src: '/win.png', caption: 'Mucha diversión en grupo' },
  { id: 4, src: '/navigation.png', caption: 'Ninguna ruta es mala' },
  { id: 5, src: '/support.png', caption: 'Comunicad 100% activa' },
]

const Index = () => {
  return (
    <>
      <a id="About" className="transition duration-700 ease-in-out" />
      <div className="my-16 sm:mt-8 sm:flex sm:flex-wrap sm:justify-around content-center sm:py-16">
        {data.map((item) => (
          <div
            key={item.id}
            className="mt-8 sm:w-160 sm:mx-8 sm:mb-8 sm:rounded-full text-sm flex
             flex-col items-center py-16 px-8 text-center bg-gray-200 text-gray-700 sm:shadow-md"
          >
            <Image
              alt="bicycle"
              src={item.src}
              width={100}
              height={100}
              quality={100}
              className="text-white"
            />
            <p className="text-15 pt-8">
              <strong>{item.caption}</strong>
            </p>
          </div>
        ))}
      </div>
    </>
  )
}

export default Index
