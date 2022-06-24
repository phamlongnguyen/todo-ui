import React from 'react'
import { Link, useMatch, useResolvedPath } from 'react-router-dom'
import { MENU_NAV_BAR } from '../../utils/constant'

function Navbar() {
  return (
    <div className="flex flex-col h-screen shadow-lg  w-fit relative z-10">
      <div className="flex items-center border-b  border-0 border-solid border-b-gray-300 py-4 px-4 justify-center">
        <img
          src="https://appapi.workplus.vn/images_default/logo.png"
          alt="logo"
          className="h-12 w-12 mr-1"
        />
        <span className="text-xl sm:inline-block hidden">
          work<span className="font-bold">plus</span>
        </span>
      </div>
      <div>
        {MENU_NAV_BAR.map(e => (
          <ItemNav {...e} key={e.href} />
        ))}
      </div>
    </div>
  )
}

export default Navbar

const ItemNav = ({ href = '', label = '', icon }) => {
  const resolved = useResolvedPath(href)
  const match = useMatch({ path: resolved.pathname, end: true })
  return (
    <Link
      to={href}
      className={`no-underline flex items-center justify-center p-4 sm:justify-start  hover:text-[#A29BFE] cursor-pointer border-l-transparent border-0 border-l-4 border-solid hover:border-l-[#A29BFE] ${
        match
          ? 'text-[#A29BFE] border-l-[#A29BFE]'
          : 'text-gray-400  border-l-transparent'
      }`}
    >
      <div className="translate-y-0.5">{icon}</div>
      <p className="whitespace-nowrap px-4 sm:inline-block hidden my-0 font-semibold ">
        {label}
      </p>
    </Link>
  )
}
