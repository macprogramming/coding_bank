import React from "react";
import logo from '../images/logo.png';
import { AiOutlineHome, AiOutlineDashboard, AiOutlineUnorderedList } from "react-icons/ai";


const Sidebar = () => {
  return(
    <aside>
    <div className="flex-shrink-0 p-3 pt-0 bg-white shadow-sm sidebar">
      <div className="border-bottom py-2">
        <a className="navbar-brand" href="#">
          <img src={logo} alt="logo" className="img img-fluid w-100" />
        </a>
      </div>
      <ul className="list-unstyled ps-0 l1_menus">
        <li>
          <button className="btn btn-toggle w-100 text-start rounded-0 d-flex align-items-center justify-content-between position-relative arrow-down" data-bs-toggle="collapse" data-bs-target="#home-collapse" aria-expanded="true">
            <div className="align-items-center">
              <AiOutlineHome />
              <span className="ms-2">Home</span>
            </div>
            {/* <AiOutlineDown className="text-end float-end" /> */}
          </button>
          <div className="collapse show l2_menus" id="home-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-custom-lightgray">
              <li><a href="#" className="link-dark rounded">Overview</a></li>
              <li><a href="#" className="link-dark rounded">Updates</a></li>
              <li><a href="#" className="link-dark rounded">Reports</a></li>
            </ul>
          </div>
        </li>
        <li>
          <button className="btn btn-toggle w-100 text-start rounded-0 collapsed d-flex align-items-center justify-content-between position-relative arrow-down" data-bs-toggle="collapse" data-bs-target="#dashboard-collapse" aria-expanded="false">
            <div className="align-items-center">
              <AiOutlineDashboard />
              <span className="ms-2">Dashboard</span>
            </div>
          </button>
          <div className="collapse l2_menus" id="dashboard-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-custom-lightgray">
              <li><a href="#" className="link-dark rounded">Overview</a></li>
              <li><a href="#" className="link-dark rounded">Weekly</a></li>
              <li><a href="#" className="link-dark rounded">Monthly</a></li>
              <li><a href="#" className="link-dark rounded">Annually</a></li>
            </ul>
          </div>
        </li>
        <li>
          <button className="btn btn-toggle w-100 text-start rounded-0 collapsed d-flex align-items-center justify-content-between position-relative arrow-down" data-bs-toggle="collapse" data-bs-target="#orders-collapse" aria-expanded="false">
            <div className="align-items-center">
              <AiOutlineUnorderedList />
              <span className="ms-2">Orders</span>
            </div>
          </button>
          <div className="collapse l2_menus" id="orders-collapse">
            <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small bg-custom-lightgray">
              <li><a href="#" className="link-dark rounded">New</a></li>
              <li><a href="#" className="link-dark rounded">Processed</a></li>
              <li><a href="#" className="link-dark rounded">Shipped</a></li>
              <li><a href="#" className="link-dark rounded">Returned</a></li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
    </aside>
  )
}

export default Sidebar;