import { BrowserRouter, Navigate, NavLink, Route, Routes } from "react-router-dom";


import logo from "../logo.svg";

import RegisterPage from "../03-forms/pages/RegisterPage";

import { FormikBasicPage, FormikYupPage, FormikComponents, FormikAbstraction } from "../03-forms/pages";




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
            <li>
              <NavLink to="/formik-components" className={ ({isActive})=>isActive ? 'nav-active': '' }>formik components</NavLink>
            </li>
            <li>
              <NavLink to="/formik-abstract" className={ ({isActive})=>isActive ? 'nav-active': '' }>formik Abstract</NavLink>
            </li>
          </ul>
        </nav>
        <Routes>
            <Route path="register" element={ <RegisterPage/> }/>
            <Route path="formik-basic" element={ <FormikBasicPage /> }/>
            <Route path="formik-yup" element={ <FormikYupPage /> }/>
            <Route path="formik-components" element={ <FormikComponents /> }/>
            <Route path="formik-abstract" element={ <FormikAbstraction /> }/>
            {/* <Route path="/*" element={ <Navigate to="/lazy2" /> }/> */}
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default Navigation;
