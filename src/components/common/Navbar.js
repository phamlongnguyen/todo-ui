import { Typography } from '@mui/material';
import React from 'react';
import { Link, useLocation, useMatch, useResolvedPath } from 'react-router-dom';
import { MENU_NAV_BAR } from '../../utils/constant';

function Navbar() {
  return (
    <div className="flex flex-col h-screen shadow-lg  w-fit  z-10 fixed top-0 ">
      <div className="h-full w-fit overflow-y-auto flex flex-col">
        <div className="flex items-center border-b  border-0 border-solid border-b-gray-300 py-4 md:px-4 px-2 justify-center">
          <img
            src="https://appapi.workplus.vn/images_default/logo.png"
            alt="logo"
            className="h-12 w-12 mr-1"
          />
          <span className="text-xl md:inline-block hidden">
            work<span className="font-bold">plus</span>
          </span>
        </div>
        <div className="text-gray-400">
          {MENU_NAV_BAR.map((e) => (
            <ItemNav {...e} key={e.href} />
          ))}
        </div>
        <div className="flex flex-1 justify-end w-full items-center flex-col mb-2 md:py-10 py-2">
          <div className="border-2 rounded-full md:w-16 md:h-16 w-12 h-12  border-solid border-gray-400 p-1">
            <img
              src="https://wac-cdn.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg?cdnVersion=398"
              alt="avatar"
              className="w-full h-full rounded-full"
            />
          </div>
          <Typography className="mt-2 md:block hidden" variant="subtitle2">
            Nguyên Phạm
          </Typography>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const ItemNav = ({ href = '', label = '', icon }) => {
  const resolved = useResolvedPath(href);
  const { pathname } = useLocation();
  const match = useMatch({ path: resolved.pathname, end: true });
  return (
    <Link
      to={href}
      className={`no-underline flex items-center justify-center md:p-4 p-2 md:justify-start hover:text-primary-100  cursor-pointer border-l-transparent border-0 border-l-4 border-solid hover:border-l-primary-100 hover:bg-gray-100 ${
        match || (pathname === '/' && resolved.pathname === '/dashboard')
          ? 'text-primary-100  border-l-primary-100 '
          : 'text-gray-400  border-l-transparent'
      }`}
    >
      <div className="translate-y-0.5">{icon}</div>
      <p className="whitespace-nowrap px-4 md:inline-block hidden my-0 font-semibold ">
        {label}
      </p>
    </Link>
  );
};
