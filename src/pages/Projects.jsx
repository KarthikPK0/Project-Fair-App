import React from 'react'
import ProjectCart from '../components/ProjectCart'
import Header from '../components/Header'
import { Row, Col } from 'react-bootstrap'



const Projects = () => {
  return (
    <>
    <Header/>
    <div style={{marginTop:'150px'}} className="container-fluid">
          <div className="d-flex justify-content-between">
            <h1>All Projects</h1>
            <input type="text" className='form-control w-25' placeholder='Search Projects By Language Used' />
          </div>

          <Row className='mt-3'>
            <Col className='mb-3' sm={12} md={6} lg={4}><ProjectCart/></Col>
          </Row>
    </div>
    </>
  )
}

export default Projects