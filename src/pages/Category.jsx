import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from "../components/Breadcrumb";
import { BiTrash, BiSolidFile, BiSolidEdit, BiX } from "react-icons/bi";
const Category = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return(
    <>
      <Breadcrumb
        title_parent = 'Master'
        title_child = 'Category'
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card border-0 rounded-0">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h5 className="text text-custom-primary">Category Lists</h5>
                  <button type="button" className="btn btn-sm btn-custom-primary" onClick={handleShow}>Add New Category</button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-resposive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Category</th>
                        <th>Image</th>
                        <th>Active</th>
                        <th>Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Beach</td>
                        <td></td>
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
                      <tr>
                        <td>2</td>
                        <td>Temple</td>
                        <td></td>
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
            <Modal.Title>Create New Category</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
            <div class="mb-2">
              <label for="categoryName" class="form-label imp_input">Category Name</label>
              <input type="text" class="form-control" id="categoryName" />
            </div>
            <div class="mb-2">
              <label for="image" class="form-label imp_input">Image</label>
              <input type="file" class="form-control" id="image" />
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

export default Category;