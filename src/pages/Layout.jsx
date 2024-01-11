import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import Routers from "../components/Routers";
const Layout = () => {
  return(
    <>
      <div>
        <Header />
      </div>
      <main>
        {/* <div className="container">
          <div className="row mt-5">
            <div className="col-sm-5">
              <div className="h-100">
                <ul className="list-group border-0 rounded-0">
                  {
                    leftSideMenus.map((item, i) => {
                      return(
                        <li className="list-group-item">
                          <input className="form-check-input me-1" value={item.id} onChange={(e) => handleInput(e)} type="checkbox" aria-label="..." />
                          {item.name}
                        </li>
                      )
                    })
                  }
                </ul>
              </div>
            </div>
            <div className="col-sm-2 mh-100">
              <div className="h-100 d-grid align-items-center justify-content-center">
                <div className="d-grid gap-2">
                  <button className="btn btn-primary" type="button" onClick={addMenus}>Add</button>
                  <button className="btn btn-primary" type="button">Remove</button>
                </div>
              </div>
            </div>
            <div className="col-sm-5">
              <div>
                <ul className="list-group border-0 rounded-0">
                  {
                    rightSideMenus.length !== 0 &&
                    rightSideMenus.map((item,i) => {
                      return(
                        <li className="list-group-item">
                          <input className="form-check-input me-1" value={item.id} onChange={(e) => handleInput(e)} type="checkbox" aria-label="..." />
                          {item.name}
                        </li>
                      )
                    })
                  }
                </ul>  
              </div>
            </div>
          </div>
        </div> */}
        <Routers />
      </main>
      <footer>

      </footer>
    </>
  )
}

export default Layout;