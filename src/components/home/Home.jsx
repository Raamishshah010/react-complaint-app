import React from 'react'
import { Button, Row , Col , Navbar,Nav, Container,Card } from 'react-bootstrap';
import './Home.css' ;
import mainImage  from './assets/person-edited.png';
import Card1  from './assets/social-media.png';
import Card2  from './assets/padlock.png';
import Card3  from './assets/success.png';
import { AiFillCheckCircle ,AiFillPlayCircle } from "react-icons/ai";
import AboutImage from './assets/about.jpg';
import Sign from './assets/01.png';
import AboutImage2 from './assets/about2.jpg';
function Home() {
  return (
    <>
    {/* FIRST NAV */}
    <Navbar className="navbar-first">
    <Container>
      <Navbar.Text className="welcomeText" >Welcome to E-Complaints</Navbar.Text>
    <div className="texts" Style="float: right">
    <Navbar.Text className="welcomeText" >Monday, March 14, 2022</Navbar.Text>
      <Navbar.Text className="welcomeText" >Abc123@xyz.com</Navbar.Text>
    </div>
    </Container>
  </Navbar>

  {/* Second Nav */}
  <Navbar collapseOnSelect expand="lg" >
  <Container>
  <Navbar.Brand href="#home">E-Complaints</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link className="links" href="#home">Home</Nav.Link>
      <Nav.Link className="links"  href="#about">About Us</Nav.Link>
      <Nav.Link className="links" href="#services">Services</Nav.Link>
      <Nav.Link className="links" href="#contact">Contact Us</Nav.Link>
      
      
    </Nav>


    <Nav>
      <Nav.Link><Button className="complaintBtn">Complaints</Button></Nav.Link>
      
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>


  <section className="main">
    <Container>
    <Row>
      <Col className="col-md-6">
        <div className="main-content">
        <h5>Welcome to <span className="logoText">E</span>Complaints<span className="logoText">.</span> </h5>
        <h1>Citizen Complaints System <br />Where you can Complain Digitally</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Omnis saepe error voluptates quisquam, ullam laborum et quaerat vitae. Corrupti, deserunt.</p>
        
        <Button className="customBtn">Read More</Button>
        </div>
      </Col>
      
      
      <Col className="col-xs-12 col-md-6">
    <img src={mainImage} className="img-fluid" height="500" width="500"alt="" />

      </Col>


    </Row>
    </Container>
  </section>

    {/* CARD SECTION Start */}
    <section className="secondSection">
      <Container>
        <Row>

          
          <Col className="col-xs-12 col-md-4">
          <Card className="card">
          <span className="spanLine"></span>
        
        <Card.Body>
          <img src={Card1} alt="" />
          <Card.Title className="title">Send Your complain</Card.Title>
          <Card.Text>
          Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui of ficia dese runt mollit.

          </Card.Text>
          <a href='#home' variant="primary">Read More</a>
        </Card.Body>
      </Card>

          </Col>

          <Col className="col-xs-12 col-md-4">
          <Card className="card">
          <span className="spanLine"></span>
        
        <Card.Body className="card-body">
          <img src={Card2} alt="" />
          <Card.Title className="title">It is 100% Secure</Card.Title>
          <Card.Text>
          Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui of ficia dese runt mollit.

          </Card.Text>
          <a href='#home' variant="primary">Read More</a>
        </Card.Body>
      </Card>

          </Col>

          <Col className="col-xs-12 col-md-4">
          <Card className="card">
          <span className="spanLine"></span>
        
        <Card.Body className="card-body">
          <img src={Card3} alt="" />
          <Card.Title className="title">Work Done </Card.Title>
          <Card.Text>
          Excepteur sint occaecat cupidatat non proi dent sunt in culpa qui of ficia dese runt mollit.

          </Card.Text>
          <a href='#home' variant="primary">Read More</a>
        </Card.Body>
      </Card>

          </Col>

        </Row>

      </Container>

    </section>
    {/* CARD SECTION End */}


    {/* ABOUT SECTION START */}
    <section className="about">
      <Container>
          <Row>
            <Col className="col-sm-12 col-md-6"> 
            
            <div className="about-content">
            <h2>About Our <span className="logoText">E</span>Complaints<span className="logoText">.</span> </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id 
              laboriosam repellat iste sunt ut, beatae veniam. Reiciendis eum, 
              iusto id modi rem voluptatum 
              alias maxime tenetur facilis adipisci ullam quaerat.
              <br /><br />
              <span className="about-secondText">
              We bring more than 24 years’ senior experience forging of 
              collaborations across government.
              </span>
              </p>
              <ul className="listItems">
                <li>< AiFillCheckCircle color='#16C79A'/> We will help peoples</li>
                <li>< AiFillCheckCircle color='#16C79A'/> Immediate work on the complain</li>
                <li>< AiFillCheckCircle color='#16C79A'/> Help to make society happy</li>
              </ul>

              <h5>Call to ask any question : 123-456-7890 or 456-789-1430</h5>
              <div className="aboutBottom">

              <Row>

                <Col className="col-sm-12 col-md-3">
                  <Button className="btn btn-primary">Learn More <AiFillPlayCircle /></Button>
                </Col>
                <Col className="col-sm-12 col-md-3">
                  <span className="sign">
                    <img src={Sign} alt="" />
                  </span>
                </Col>
                <Col className="col-sm-12 col-md-3">
                  <h6>Randon Pexson</h6>
                  <p className="mayor">Mayor of the City</p>
                </Col>
              </Row>
                </div>
            </div>
            
            </Col>
            <Col className="col-sm-12 col-md-6">
            <img src={AboutImage} className="img-fluid" alt="" />

            </Col>
          </Row>
          <Row className="aboutRow">
          
            <Col className="col-sm-12 col-md-6">
            <img src={AboutImage2} className="img-fluid" alt="" />
            <div class="card">
              
              <div class="card-body">
                <h4 class="card-title">FOR ANY INFORMATION</h4>
                <p class="card-text">(+92) 1251521</p>
              </div>
            </div>
            </Col>

            <Col className="col-sm-12 col-md-6"> 
            
            <div className="about-content">
            <h2>About Our <span className="logoText">E</span>Complaints<span className="logoText">.</span> </h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Id 
              laboriosam repellat iste sunt ut, beatae veniam. Reiciendis eum, 
              iusto id modi rem voluptatum 
              alias maxime tenetur facilis adipisci ullam quaerat.
              <br /><br />
              <span className="about-secondText">
              We bring more than 24 years’ senior experience forging of 
              collaborations across government.
              </span>
              </p>
              <ul className="listItems">
                <li>< AiFillCheckCircle color='#16C79A'/> We will help peoples</li>
                <li>< AiFillCheckCircle color='#16C79A'/> Immediate work on the complain</li>
                <li>< AiFillCheckCircle color='#16C79A'/> Help to make society happy</li>
              </ul>

              <h5>Call to ask any question : 123-456-7890 or 456-789-1430</h5>
              <div className="aboutBottom">

              <Row>

                <Col className="col-sm-12 col-md-3">
                  <Button className="btn btn-primary">Learn More <AiFillPlayCircle /></Button>
                </Col>
                <Col className="col-sm-12 col-md-3">
                  <span className="sign">
                    <img src={Sign} alt="" />
                  </span>
                </Col>
                <Col className="col-sm-12 col-md-3">
                  <h6>Randon Pexson</h6>
                  <p className="mayor">Mayor of the City</p>
                </Col>
              </Row>
                </div>
            </div>
            
            </Col>
          </Row>
      </Container>
    </section>
    {/* ABOUT SECTION END */}
</>


  )
}

export default Home