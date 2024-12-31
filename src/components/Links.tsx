import React from "react";
import style from '../index.module.css'
import { NavLink, Routes } from "react-router-dom";

interface Routes {
  to: string;
  text: string;
}

const routes: Routes[] = [];
routes.push({
  to: 'daily',
  text: 'Daily',
})
routes.push({
  to: 'weekly',
  text: 'Weekly',
})
routes.push({
  to: 'monthly',
  text: 'Monthly',
})


const Links: React.FC = () => {
  return (
    <>
      {
        routes.map((route, i) => (
          <li key={i}>
            <NavLink className={({ isActive}) => isActive ? 
            `${style.active}` : `${style.dislable}` }
              to={route.to}>
              {route.text}
            </NavLink>
          </li>
        ))
      }
    </>
  );
};

export { Links };



