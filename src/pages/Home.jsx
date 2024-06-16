import React from 'react'
import { Link } from 'react-router-dom'
import landingImage from '../landingImage.svg'
import ProjectCart from '../components/ProjectCart'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';



const Home = () => {
  return (
    <>
    <div style={{minHeight:'100vh'}} className="d-flex justify-content-center align-items-center rounded shadow w-100">
        <div className="container">
                   <div className="row align-items-center">
                    <div className="col-lg-6">
                    <h1 style={{fontSize:'80px'}}> <i className='fa-brands fa-docker'></i>Project Fair</h1>

                    <p style={{textAlign:'justify'}}>
                      One stop Destination for all Software Development Project. Where User can add and manage their projects. As well as access all Projects available in our website... What are you waiting for!!!
                    </p>
                    {
                      sessionStorage.getItem("token") ?  <Link to="/dashboard" className='btn btn-warning'>MANAGE YOUR PROJECTS</Link> :  <Link to="/login" className='btn btn-warning'>START TO EXPLORE</Link>
                    }
                   
                    </div>
                    <div className="col-lg-6">
                        <img style={{marginLeft:'130px'}} width={'400px'} src={landingImage} alt="landing-image" className='img-fluid' />
                    </div>
                   </div>
        </div>
    </div>

    <div className="mt-5 text-center">
    <h1 className='mb-5 '>Explore Our Projects</h1>
    <marquee>
      <div className="d-flex">
        <div className="me-5">
          <ProjectCart/>
        </div>
      </div>
    </marquee>
    <button className='btn btn-link mt-3'>CLICK HERE TO VIEW MORE PROJECTS...</button>
    </div>
 

  <div className="d-flex align-items-center mt-5 flex-column ">
  <h1>Our Testimonials</h1>
  <div className="d-flex align-items-center justify-content-evenly mt-3 w-100 " style={{paddingBottom:'3em'}}>

<Card style={{ width: '18rem', paddingTop:'1em'} }>
  <img style={{alignSelf:"center"}
  } width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Photos.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' , paddingTop:'1em'  }}>
  <img style={{alignSelf:"center"}
  } width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://www.pngall.com/wp-content/uploads/12/Avatar-Profile-PNG-Picture.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem',paddingTop:'1em'   }}>
  <img style={{alignSelf:"center"}
  } width={'60px'} height={'60px'} className='rounded-circle img-fluid' src="https://cdn1.iconfinder.com/data/icons/avatars-1-5/136/87-512.png" />
  <Card.Body>
    <Card.Title>Card Title</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the
      bulk of the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
</div>
  </div>

    </>
  )
}

export default Home
