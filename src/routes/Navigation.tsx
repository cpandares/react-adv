import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";


import logo from "../logo.svg";

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages'
import RegisterPage from "../03-forms/pages/RegisterPage";
import FormikBasicPage from "../03-forms/pages/FormikBasicPage";
import FormikYupPage from "../03-forms/pages/FormikYupPage";

const Navigation = () => {
  return (
    <BrowserRouter>
      <div className="main-layout">
        <nav>
          <img src={logo} alt="logo" />
          <ul>
            <li>
              <NavLink to="/register" className={ ({isActive})=>isActive ? 'nav-active': '' }>Register</NavLink>
            </li>
            <li>
              <NavLink to="/formik-basic" className={ ({isActive})=>isActive ? 'nav-active': '' }>Formik</NavLink>
            </li>
            <li>
              <NavLink to="/formik-yup" className={ ({isActive})=>isActive ? 'nav-active': '' }>formik yup</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="register" element={ <RegisterPage/> }/>
            <Route path="formik-basic" element={ <FormikBasicPage /> }/>
            <Route path="formik-yup" element={ <FormikYupPage /> }/>
            {/* <Route path="/*" element={ <Navigate to="/lazy2" /> }/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
