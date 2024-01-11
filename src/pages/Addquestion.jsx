import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Breadcrumb from "../components/Breadcrumb";
import Form from 'react-bootstrap/Form';
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineBell, AiOutlineMail, AiOutlineLogout, AiOutlineDashboard, AiOutlineUnorderedList, AiOutlineUsergroupAdd,
  AiOutlineComment, AiOutlineHome, AiOutlineUser, AiOutlineCustomerService, AiOutlineCodeSandbox, AiOutlineLaptop, AiTwotoneFolderOpen, AiOutlineContacts } from 'react-icons/ai';
import { BiSolidPencil, BiTrash, BiSolidFile, BiSolidEdit, BiX } from "react-icons/bi";
const Question = () => {
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };
  return(
    <>
      <Breadcrumb
        title_parent = 'Home'
        title_child = 'Add Question'
      />
      <div className="container-fluid">
        <div className="row">
          <div className="col-12">
            <div className="card border-0 rounded-0">
              <div className="card-header border-0">
                <div className="d-flex justify-content-between">
                  <h5 className="text text-custom-primary">Questions</h5>
                  <button type="button" className="btn btn-sm btn-custom-primary" onClick={handleShow}>Add Question</button>
                </div>
              </div>
              <div className="card-body">
                <div className="table-resposive">
                  <table className="table table-sm table-strip table-hover">
                    <thead>
                      <tr>
                        <th>Sr.No</th>
                        <th>Language</th>
                        <th>Question</th>
                        <th>Active</th>
                        <th className="text-center" width="15%">Action</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>1</td>
                        <td>Javascript</td>
                        <td>What is Javascript ?</td>
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
                        <td>Jquery</td>
                        <td>What is Jquery ?</td>
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
      <Modal show={show} onHide={handleClose} size="lg">
        <Form noValidate validated={validated} onSubmit={handleSubmit}>
          <Modal.Header closeButton>
            <Modal.Title className="text-custom-secondary h5">Add Question Type</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div className="col-12 col-md-6">
                <div class="mb-2">
                  <label for="bannerTitle" class="form-label imp_input">Language Type</label>
                  <select name="languagetype" id="languagetype" className="form-select" required>
                    <option value="">Select</option>
                    <option value="Frontend">Frontend</option>
                    <option value="Backend">Backend</option>
                  </select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a language type.
                  </Form.Control.Feedback>
                </div>
              </div>
              <div className="col-12 col-md-6">
                <div class="mb-2">
                  <label for="bannerTitle" class="form-label imp_input">Language</label>
                  <select name="language" id="language" className="form-select" required>
                    <option value="">Select</option>
                    <option value="Javascript">Javascript</option>
                    <option value="node js">Node Js</option>
                  </select>
                  <Form.Control.Feedback type="invalid">
                    Please choose a language.
                  </Form.Control.Feedback>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 col-md-6">
                <div class="mb-2">
                <label for="questionType" class="form-label imp_input">Question Type</label>
                <select name="questionType" id="questionType" className="form-select" required>
                  <option value="">Select</option>
                  <option value="Theory">Theory</option>
                  <option value="Practical">Practical</option>
                </select>
                <Form.Control.Feedback type="invalid">
                    Please choose a question type.
                  </Form.Control.Feedback>
              </div>
              </div>
              <div className="col-12 col-md-6">
                <div class="mb-3 form-check mt-md-4 pt-md-3">
                  <input type="checkbox" class="check-primary form-check-input" id="exampleCheck1" checked />
                  <label class="form-check-label" for="exampleCheck1">Is Active</label>
                </div>
              </div>
            </div>
            
            <div className="mb-2">
              <label for="question" class="form-label imp_input">Question</label>
              <input type="text" className="form-control" id="question" name="question" required />
              <Form.Control.Feedback type="invalid">
                Please enter question.
              </Form.Control.Feedback>
            </div>
            <div className="mb-2">
              <label for="answer" class="form-label imp_input">Answer</label>
              <textarea class="form-control" id="answer" rows="3" required></textarea>
              <Form.Control.Feedback type="invalid">
                Please enter answer.
              </Form.Control.Feedback>
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

export default Question;