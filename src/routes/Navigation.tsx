import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";


import logo from "../logo.svg";

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import ShoppingPage from "../02-components-params/pages/ShoppingPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/home" className={ ({isActive})=>isActive ? 'nav-active': '' }>Shopping</NavLink>
            </li>
            <li>
              <NavLink to="/lazy2" className={ ({isActive})=>isActive ? 'nav-active': '' }>About</NavLink>
            </li>
            <li>
              <NavLink to="/lazy3" className={ ({isActive})=>isActive ? 'nav-active': '' }>Users</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="/home" element={ <ShoppingPage/> }/>
            <Route path="lazy2" element={ <LazyPage2 /> }/>
            <Route path="lazy3" element={ <LazyPage3 /> }/>
            <Route path="/*" element={ <Navigate to="/home" /> }/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
