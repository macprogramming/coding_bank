import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from "../components/Breadcrumb";
import Form from 'react-bootstrap/Form';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineBell, AiOutlineMail, AiOutlineLogout, AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineUsergroupAdd,
  AiOutlineComment, AiOutlineHome, AiOutlineUser, AiOutlineCustomerService, AiOutlineCodeSandbox, AiOutlineLaptop, AiTwotoneFolderOpen, AiOutlineContacts } from 'react-icons/ai';
import { BiSolidPencil, BiTrash, BiSolidFile, BiSolidEdit, BiX } from "react-icons/bi";
const Langaugetype = () => {

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [validated, setValidated] = useState(false);

  const [langaugeTypeData, setLanguageTypeData] = useState({
    langaugeCode: '',
    langaugeType: '',
    isActive: true
  });

  const handleInput = (e) => {
    let { langaugeCode, langaugeType, isActive } = langaugeTypeData;

    if(e.target.id == 'languageType') {
      langaugeType = e.target.value;
    } else if(e.target.id == 'isActive') {
      isActive = e.target.value;
    }
    setLanguageTypeData({
      langaugeCode, langaugeType, isActive
    })
  }

  const handleSubmit = async (event) => {
    let { langaugeCode, langaugeType, isActive } = langaugeTypeData;
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      const res = await fetch('http://localhost:8000/langaugetype/addlanguagetype', {
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          langaugeCode, langaugeType, isActive
        })
      });

      const response = await res.json();
      alert(response.error)
      // if(!response) {
      //   alert(response.error)
      // } else {
      //   alert('Data successfully added...!')
      // }
    }

    setValidated(true);
  };

  return(
    <>
      <Breadcrumb
        title_parent = 'Home'
        title_child = 'Language Type'
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card border-0 rounded-0">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h5 className="text text-custom-primary">Language Type</h5>
                  <button type="button" className="btn btn-sm btn-custom-primary" onClick={handleShow}>Add Language Type</button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-resposive">
                  <table className="table table-sm">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Language Type</th>
                        <th>Active</th>
                        <th className="text-center" width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Frontend</td>
                        <td>
                          <div class="form-check">
                            <input class="check-primary form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </td>
                        <td className="text-center">
                          <ul className="nav justify-content-center">
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
                        <td>Backend</td>
                        <td>
                          <div class="form-check">
                            <input class="check-primary form-check-input" type="checkbox" value="" id="flexCheckDefault" />
                          </div>
                        </td>
                        <td className="text-center">
                          <ul className="nav justify-content-center">
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
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="text-custom-secondary h5">Add Language Type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          
            <div class="mb-2">
              <label for="languageType" class="form-label imp_input">Language Type</label>
              <input type="text" class="form-control" id="languageType" onChange={handleInput} required />
              <Form.Control.Feedback type="invalid">
                Please enter a language type.
              </Form.Control.Feedback>
            </div>
            {/* <div class="mb-2">
              <label for="icon" class="form-label imp_input">Icon</label>
              <input type="file" class="form-control" id="icon" />
            </div> */}
            <div class="mb-3 form-check">
              <input type="checkbox" class="check-primary form-check-input" id="exampleCheck1" checked />
              <label class="form-check-label" for="exampleCheck1">Is Active</label>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" className="btn btn-sm btn-custom-outline-secondary" onClick={handleClose}>
              <BiX fontSize={'18px'} />&nbsp;Close
            </Button>
            <Button variant="primary" className="btn btn-sm btn-custom-primary align-items-center" type="submit">
              <BiSolidFile fontSize={'16px'} />&nbsp;Save
            </Button>
          </Modal.Footer>
        </Form>
      </Modal>
    </>
  )
}

export default Langaugetype;