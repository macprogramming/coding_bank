
import React, { useState } from "react";
import { AiOutlineMenu, AiOutlineBell, AiOutlineMail, AiOutlineLogout, AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineUsergroupAdd,
   AiOutlineComment, AiOutlineHome, AiOutlineUser, AiOutlineCustomerService, AiOutlineCodeSandbox, AiOutlineLaptop, AiTwotoneFolderOpen, AiOutlineContacts } from 'react-icons/ai';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Header = () => {
  const [isToggle, setIstoggle] = useState(false);

  const toggleMenu = () => {
    setIstoggle(!isToggle)
  }

  const location = useLocation();
  return(
    location.pathname !== '/' &&
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 px-0 py-0 bg-custom-secondary sticky-top m-0" id={!isToggle ? 'sidebar' : 'sidebarToggle'}>
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-dark text-decoration-none py-2">
          <svg className="bi me-2" width="40" height="32"></svg>
          {!isToggle && <span className="fs-5 text-custom-primary fw-bold">Admin <span className="text-custom-secondary">Panel</span></span>}
        </a>
        {/* <hr className="m-0" /> */}
        <ul className="nav nav-pills flex-column mb-auto border-end border-top" style={{ height: '100vh' }}>
          {/* <li className="position-relative">
            <NavLink to="/programmingSkills"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link sub_menus" : "nav-link sub_menus"
              }
              data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false"><AiOutlineDashboard fontSize={'20px'} />&nbsp;
              {!isToggle && 'Dashboard'}
            </NavLink>
            <div className={location.pathname === '/foodtech' ? 'collapse show' : 'collapse'} id="dashboard-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                <li>
                  <NavLink
                    to="/foodtech"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Foodtech'}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li> */}
          <NavLink
              to="/home"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
              }
            ><AiOutlineHome fontSize={'20px'} />&nbsp;
              {!isToggle && 'Home'}
          </NavLink>
          <NavLink
              to="/dashboard"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
              }
            ><AiOutlineUnorderedList fontSize={'20px'} />&nbsp;
              {!isToggle && 'Dashboard'}
          </NavLink>
          <li className="position-relative">
            <NavLink to="/category"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link sub_menus" : "nav-link sub_menus"
              }
              data-bs-toggle="collapse" data-bs-target="#master-collapse" aria-expanded="false">
              <AiOutlineHome fontSize={'20px'} />&nbsp;
              {!isToggle && 'Master'}
            </NavLink>
            <div className={location.pathname === '/questiontype' || location.pathname === '/langaugetype'
            || location.pathname === '/addlangauge' || location.pathname === '/addquestion' ? 'collapse show' : 'collapse'} id="master-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                <li>
                  <NavLink
                    to="/langaugetype"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Langauge Type'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addlangauge"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Add Langauge'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/questiontype"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Question Type'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addquestion"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Add Question'}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li>
          {/* <li className="position-relative">
            <NavLink to="/homebanner"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link sub_menus" : "nav-link sub_menus"
              }
              data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
              <AiOutlineHome fontSize={'20px'} />&nbsp;
              {!isToggle && 'Home'}
            </NavLink>
            <div className={location.pathname === '/homebanner' || location.pathname === '/featurebanner' || location.pathname === '/populardestination' ? 'collapse show' : 'collapse'} id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                <li>
                  <NavLink
                    to="/homebanner"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Home Banner'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/featurebanner"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Feature Banner'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/populardestination"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Popular Destination'}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li> */}
          {/* <li className="position-relative">
            <NavLink to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link sub_menus" : "nav-link sub_menus"
              }
              data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="false">
              <AiOutlineUser fontSize={'20px'} />&nbsp;
              {!isToggle && 'About'}
            </NavLink>
            <div className={location.pathname === '/about' || location.pathname === '/addfeatures' ? 'collapse show' : 'collapse'} id="home-collapse">
              <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small px-4">
                <li>
                  <NavLink
                    to="/about"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'About'}
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addfeatures"
                    className={({ isActive, isPending }) =>
                      isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
                    }
                    >
                    {!isToggle && 'Add Feature'}
                  </NavLink>
                </li>
              </ul>
            </div>
          </li> */}
          {/* <NavLink
              to="/about"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
              }
            ><AiOutlineUser fontSize={'20px'} />&nbsp;
              {!isToggle && 'About'}
          </NavLink> */}
          {/* <NavLink
              to="/services"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
              }
              ><AiOutlineCustomerService fontSize={'20px'} />&nbsp;
              {!isToggle && 'Services'}
          </NavLink> */}
          {/* <li>
            <NavLink
              to="/mywork"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
              }
              ><AiTwotoneFolderOpen fontSize={'20px'} />&nbsp;
              {!isToggle && 'My Work'}
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contactbanner"
              className={({ isActive, isPending }) =>
                isPending ? "pending nav-link" : isActive ? "active nav-link" : "nav-link"
              }
              ><AiOutlineContacts fontSize={'20px'} />&nbsp;
              {!isToggle && 'Contact Banner'}
            </NavLink>
          </li> */}
        </ul>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light bg-custom-secondary p-0 sticky-top">
        <div className="container-fluid px-0">
          <button type="button" className="btn btn-lg btn-custom-primary rounded-0" onClick={toggleMenu}><AiOutlineMenu /></button>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto mx-1 d-flex justify-content-center align-items-center">
              <li className="nav-item d-flex justify-content-center align-items-center">
                <a className="nav-link pe-3" href="javascript:void(0)" >makarandchikhale19@gmail.com</a>&nbsp;&nbsp;
              </li>
              <li className="nav-item d-flex justify-content-center align-items-center">
                <NavLink className="nav-link active" aria-current="page" to="/"><AiOutlineBell fontSize={'20px'} /></NavLink>&nbsp;&nbsp;
              </li>
              <li className="nav-item d-flex justify-content-center align-items-center">
                <NavLink className="nav-link pe-3" to="/"><AiOutlineMail fontSize={'20px'} /></NavLink>&nbsp;&nbsp;
              </li>
              <div className="dropdown">
                <button className="btn btn-custom-primary rounded-0 my-0 dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                  Makarand Chikhale
                </button>
                <ul className="dropdown-menu rounded-0 w-100" aria-labelledby="dropdownMenuButton1">
                  <li><NavLink className="dropdown-item" to="/">My Profile</NavLink></li>
                  <li><a className="dropdown-item" href="#">Help</a></li>
                  <li><NavLink className="dropdown-item" to="/">Logout&nbsp;<AiOutlineLogout /></NavLink></li>
                </ul>
              </div>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Header;