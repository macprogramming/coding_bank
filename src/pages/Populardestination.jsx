import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from "../components/Breadcrumb";
import { BiTrash, BiSolidFile, BiSolidEdit, BiX, BiSolidPlusCircle } from "react-icons/bi";
import { AiFillEye } from "react-icons/ai";
const Populardestination = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Breadcrumb
        title_parent = 'Home'
        title_child = 'Popular Destination'
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card border-0 rounded-0">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h5 className="text text-custom-primary">Popular Destination</h5>
                  <button type="button" className="btn btn-sm btn-custom-primary" onClick={handleShow}>Add New</button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-resposive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Title</th>
                        <th>Image</th>
                        <th>Category</th>
                        <th>Description</th>
                        <th>Active</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Couple Tour India To Singapore</td>
                        <td></td>
                        <td>Beach</td>
                        <td>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</td>
                        <td>
                          <div class="form-check">
                            <input class="check-primary form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </td>
                        <td>
                          <ul className="nav">
                            <li className="p-1">
                              <button type="button" className="btn btn-sm btn-custom-outline-primary"><BiSolidEdit fontSize={'16px'} /></button>
                            </li>
                            <li className="p-1">
                              <button type="button" className="btn btn-sm btn-outline-danger"><BiTrash fontSize={'16px'} /></button>
                            </li>
                            <li className="p-1">
                              <button type="button" className="btn btn-sm btn-outline-success"><AiFillEye fontSize={'16px'} /></button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                      <tr>
                        <td>2</td>
                        <td>Tours</td>
                        <td></td>
                        <td>Temple</td>
                        <td>It's has survived not only five centuries.</td>
                        <td>
                          <div class="form-check">
                            <input class="check-primary form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </td>
                        <td>
                          <ul className="nav">
                            <li className="p-1">
                              <button type="button" className="btn btn-sm btn-custom-outline-primary"><BiSolidEdit fontSize={'16px'} /></button>
                            </li>
                            <li className="p-1">
                              <button type="button" className="btn btn-sm btn-outline-danger"><BiTrash fontSize={'16px'} /></button>
                            </li>
                          </ul>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
              <div className="card-footer bg-transparent border-0">
                <nav aria-label="..." className="float-end">
                  <ul class="pagination pagination-sm">
                    <li class="page-item disabled">
                      <span class="page-link">Previous</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">1</a></li>
                    <li class="page-item active" aria-current="page">
                      <span class="page-link">2</span>
                    </li>
                    <li class="page-item"><a class="page-link" href="#">3</a></li>
                    <li class="page-item">
                      <a class="page-link" href="#">Next</a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal show={show} onHide={handleClose}>
        <form>
          <Modal.Header closeButton>
            <Modal.Title>Create New Menus</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
            <div className="mb-2">
              <label for="bannerTitle" className="form-label imp_input">Title</label>
              <input type="text" className="form-control" id="bannerTitle" />
            </div>
            <div className="mb-2">
              <label for="description" className="form-label imp_input">Description</label>
              <input type="text" className="form-control" id="description" />
            </div>
            <div className="mb-2">
              <label for="image" className="form-label imp_input">Image</label>
              <input type="file" className="form-control" id="image" />
            </div>
            <div class="mb-2">
              <label for="selectCategory" class="form-label imp_input">Category</label>
                <select class="form-select" is="selectCategory" aria-label="Default select example">
                  <option selected>Select</option>
                  <option value="Beach">Beach</option>
                  <option value="Temple">Temple</option>
                  <option value="Fort">Fort</option>
                  <option value="Caves">Caves</option>
                </select>
            </div>
            <div className="row">
              <div className="col-12 col-md-3">
                <div class="mb-2">
                  <label for="selectDays" class="form-label imp_input">Days</label>
                    <select class="form-select" is="selectDays" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div class="mb-2">
                  <label for="selectNight" class="form-label imp_input">Night</label>
                    <select class="form-select" id="selectNight" aria-label="Default select example">
                      <option selected>Select</option>
                      <option value="1">One</option>
                      <option value="2">Two</option>
                      <option value="3">Three</option>
                    </select>
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div class="mb-2">
                  <label for="latitude" class="form-label imp_input">Latitude</label>
                  <input type="text" className="form-control" id="latitude" />
                </div>
              </div>
              <div className="col-12 col-md-3">
                <div class="mb-2">
                  <label for="longitude" class="form-label imp_input">longitude</label>
                  <input type="text" className="form-control" id="longitude" />
                </div>
              </div>
            </div>
            <div className="row align-items-center">
              <div className="col-12 col-md-10">
                <div class="mb-2">
                  <label for="tourIncludes" class="form-label imp_input">Tour includes</label>
                  <input type="text" class="form-control" id="tourIncludes" />
                </div>
              </div>
              <div className="col-12 col-md-2">
                <label for="tourIncludes" class="form-label invisible">button</label>
                <button type="button" className="btn btn-sm btn-custom-primary"><BiSolidPlusCircle /></button>
              </div>
            </div>
            <div className="row">
              <div className="col-12">
                <div className="mb-2">
                  <textarea class="form-control" id="description" rows="3"></textarea>
                </div>
              </div>
            </div>
            <div class="mb-3 form-check">
              <input type="checkbox" class="check-primary form-check-input" id="exampleCheck1" />
              <label class="form-check-label" for="exampleCheck1">Is Active</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="btn btn-sm btn-custom-outline-secondary" onClick={handleClose}>
              <BiX fontSize={'18px'} />&nbsp;Close
            </Button>
            <Button variant="primary" className="btn btn-sm btn-custom-primary align-items-center" onClick={handleClose}>
              <BiSolidFile fontSize={'16px'} />&nbsp;Save
            </Button>
          </Modal.Footer>
        </form>
      </Modal>
    </>
  )
}

export default Populardestination;