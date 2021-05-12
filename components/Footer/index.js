import React from 'react'
import Link from 'next/link'

const Index = () => {
  return (
    <div
      className="w-full mt-16 py-16 text-white flex flex-col justify-center items-center font-light"
      style={{ backgroundColor: 'rgba(0,0,0,0.9)' }}
    >
      <p>Todos los derechos reservados Club Team Dynamite</p>
      <p>
        Developed by{' '}
        <span className="font-medium text-blue-500">
          <Link href="https://github.com/enzocv">
            <a>@enzocv</a>
          </Link>
        </span>
      </p>
    </div>
  )
}

export default Index
