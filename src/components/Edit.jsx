import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import uploadingImg from '../assets/upload.png'

const Edit = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (
    <div>
       <button onClick={handleShow} className="btn">
       <i class="fa-solid fa-pen-to-square"></i> 
    </button>

      <Modal size='lg' centered
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>New Project Details!!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row align-items-center">
            <div className="col-lg-4">
            <label><input style={{display:'none'}} type="file" /> <img className='img-fluid' height={'200px'} src={uploadingImg} alt="upload-icon" />
            </label>
            </div>
            <div className="col-lg-8">
              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Title' />
              </div>

              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Languages Used In Project' />
              </div>

              <div className="mb-2">
                <input type="text" className='form-control' placeholder=' Project Github Link' />
              </div>

              <div className="mb-2">
                <input type="text" className='form-control' placeholder='Project Website Link' />
              </div>
              </div>
          </div>
          
          <div>
            <input type="text" className='form-control' placeholder='Project Overview' />
          </div>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary">Add</Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default Edit
