import React from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";

const Breadcrumb = (props) => {
  return(
    <>
      <nav aria-label="breadcrumb">
        <ol class="breadcrumb p-2 shadow-sm">
          <li class="breadcrumb-item">
            <NavLink to={`/${props.title_parent}`}>{props.title_parent}</NavLink>
          </li>
          <li class="breadcrumb-item active" aria-current="page">{props.title_child}</li>
        </ol>
      </nav>
    </>
  )
}

export default Breadcrumb;