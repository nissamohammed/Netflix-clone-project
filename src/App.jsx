
import './App.css'

import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';

import Dropdown from 'react-bootstrap/Dropdown';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faGreaterThan ,faArrowDown,faPlus} from '@fortawesome/free-solid-svg-icons'

function App() {


  return (
    <>
      <div className='div1'>
        <div className='div2'>
          <div className='div3'>



            <div className='d-flex'>
              <div>
                <img src="./images/logo2.png" alt="this is logo" style={{ width: '200px', height: '100px' }} className='img1' />
              </div>
              <div className='d-flex navdiv p-2' >
                <div className='mt-4 border border-dark rounded me-3' style={{height:'37px'}}>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-white" id="dropdown-basic">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white absolute top-[10px] mx-3" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg> 
                    English
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    
                    <Dropdown.Item href="#/action-2" >English</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div>
                <div className='mt-4 ms-2'>
                <button className='btn btn-danger'>Sign In</button></div>
              </div>
            </div>



 {/*
            <div>
              {['xxl'].map((expand) => (
                <Navbar key={expand} expand={expand} className="bg-body-transparent mb-3">
                  <Container fluid>
                    <Navbar.Brand href="#"><img src="./images/logo2.png" alt="this is logo" style={{ width: '200px', height: '100px' }} className='img1' /></Navbar.Brand>
                    <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
                    <Navbar.Offcanvas 
                      id={`offcanvasNavbar-expand-${expand}`}
                      aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
                      placement="end"
                    >
                      <Offcanvas.Header closeButton>
                        <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                          Offcanvas
                        </Offcanvas.Title>
                      </Offcanvas.Header>
                      <Offcanvas.Body >
                        <Nav className="justify-content-end flex-grow-1 pe-3">
                          <Nav.Link href="#action1">Home</Nav.Link>
                          <Nav.Link href="#action2">Link</Nav.Link>
                          <NavDropdown 
                            title="English"
                            id={`offcanvasNavbarDropdown-expand-${expand}`}
                          >
                            <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action4">
                              Another action
                            </NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action5">
                              Something else here
                            </NavDropdown.Item>
                          </NavDropdown>
                        </Nav>
                        <Form className="mt-1">
                          {/*<Form.Control
                    type="search"
                    placeholder="Search"
                    className="me-2"
                    aria-label="Search"
                  />*/}
                  {/*
                          <Button variant="danger">SignIn</Button>
                        </Form>
                      </Offcanvas.Body>
                    </Navbar.Offcanvas>
                  </Container>
                </Navbar>
              ))}
            </div>

  */}          
            <div className='div5'>
              <h2 className='fw-bolder p-2'>Unlimited movies, TV shows and more</h2>
              <h4 className='p-2'>Watch anywhere. Cancel anytime.</h4>
              <h5 className='p-2'>Ready to watch? Enter your email to create or restart your membership.</h5>
              <input type="text" placeholder='Email address' className=' rounded border border-secondary p-3  fs-6 input1' />
              <button className='btn btn-danger p-3 ms-3 fw-bold  btn3'>Get Started <FontAwesomeIcon icon={faGreaterThan} /> </button>
            </div>



          </div>
        </div>
      </div>


      <div className='div6'></div>

      <div className='p-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 p-5 mt-5 ms-3">
            <h2 className='fw-bolder'>Enjoy on your TV</h2>
            <h5>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</h5>
          </div>
          <div className="col-md-5  div66" style={{position:'relative'}}>
            <img src="./images/tv.png" alt="this is a image" className='img2' style={{width:'550px'}}/>
            <div style={{position:'absolute'}} className='div67'>
              <video autoPlay playsInline muted loop className='div67v'>
              <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-tv-in-0819.m4v' type='video/mp4'/>
               {/*<source src='./images/video1.m4v?autoplay=1' type='video/mp4'/>*/}
              </video>
            </div>
          </div>
          <div className="col-md-1"></div>


        </div>
      </div>
    

      <div className='div6'></div>

      <div className='p-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5  div66" style={{ position: 'relative' }}>
            <img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/mobile-0819.jpg" alt="this is a image" className='img2' style={{ width: '550px' }} />
            <div style={{ position: 'absolute' }} className='div68'>
              <div className='d-flex rounded border border-secondary bg-black'>
                <div><img src="https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/boxshot.png" alt="this is image" style={{ width: '70px', height: '80px' }} className='p-2' /></div>
                <div className='ms-2 p-2'>
                  <div>Stranger Things</div>
                  <div style={{ color: 'blue' }}>Downloading...</div>
                </div>
                <div className='ms-5 p-2 mt-3'><FontAwesomeIcon icon={faArrowDown} /></div>
              </div>
            </div>
          </div>
          <div className="col-md-5 p-4 mt-5 ms-3">
            <h2 className='fw-bolder'>Download your shows to watch offline</h2>
            <h5>Save your favourites easily and always have something to watch.</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>


      <div className='div6'></div>

      <div className='p-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5 p-5 mt-5 ms-3">
            <h2 className='fw-bolder'>Watch everywhere</h2>
            <h5>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</h5>
          </div>
          <div className="col-md-5  div66" style={{position:'relative'}}>
            <img src="./images/apple.png" alt="this is a image" className='img2' style={{width:'550px'}}/>
            <div style={{position:'absolute'}} className='div67'>
              <video autoPlay playsInline muted loop className='div67vv'>
              <source src='https://assets.nflxext.com/ffe/siteui/acquisition/ourStory/fuji/desktop/video-devices-in.m4v' type='video/mp4'/>
               {/*<source src='./images/video1.m4v?autoplay=1' type='video/mp4'/>*/}
              </video>
            </div>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className='div6'></div>

      <div className='p-5'>
        <div className="row">
          <div className="col-md-1"></div>
          <div className="col-md-5  div66" style={{ position: 'relative' }}>
            <img src="./images/children.png" alt="this is a image" className='img2' style={{ width: '550px' }} />
            
          </div>
          <div className="col-md-5 p-4 mt-5 ms-3">
            <h2 className='fw-bolder'>Create profiles for kids</h2>
            <h5>Send children on adventures with their favourite characters in a space made just for them—free with your membership.</h5>
          </div>
          <div className="col-md-1"></div>
        </div>
      </div>

      <div className='div6'></div>

      <div className='p-4'>
        <div className='p-5 text-align-center div7a'><h2 className='fw-bolder'>Frequently Asked Questions</h2></div>
        <div className='ms-5'>
          <div className='divbtn p-1 mt-2 me-2 d-flex'>
            <div className='headbtn'>
            <h5 className='p-4'>What is Netflix?</h5></div>
            <div className='plussym'>
            <FontAwesomeIcon icon={faPlus} size='2x'/></div>
          </div>
        </div>
        <div className='ms-5'>
          <div className='divbtn p-1 mt-2 me-2 d-flex'>
          <div className='headbtn'>
          <h5 className='p-4'>How Much does Netflix cost?</h5></div>
            <div className='plussym'>
            <FontAwesomeIcon icon={faPlus} size='2x'/></div>
          </div>
        </div>
        <div className='ms-5'>
          <div className='divbtn p-1 mt-2 me-2 d-flex'>
          <div className='headbtn'>
          <h5 className='p-4'>Where can I watch?</h5></div>
            <div className='plussym'>
            <FontAwesomeIcon icon={faPlus} size='2x'/></div>
          </div>
        </div>
        <div className='ms-5'>
          <div className='divbtn p-1 mt-2 me-2 d-flex'>
          <div className='headbtn'>
          <h5 className='p-4'>How do I cancel?</h5></div>
            <div className='plussym'>
            <FontAwesomeIcon icon={faPlus} size='2x'/></div>
          </div>
        </div>
        <div className='ms-5'>
          <div className='divbtn p-1 mt-2 me-2 d-flex'>
          <div className='headbtn'>
          <h5 className='p-4'>What can I watch on Netflix?</h5></div>
            <div className='plussym'>
            <FontAwesomeIcon icon={faPlus} size='2x'/></div>
          </div>
        </div>
        <div className='ms-5'>
          <div className='divbtn p-1 mt-2 me-2 d-flex'>
          <div className='headbtn'>
          <h5 className='p-4'>Is Netflix good for kids?</h5></div>
            <div className='plussym'>
            <FontAwesomeIcon icon={faPlus} size='2x'/></div>
          </div>
        </div>
        {/*form */}
        <div className='p-5 divform'>
          <h5 className='p-3'>Ready to watch? Enter your email to create or restart your membership.</h5>
          <input type="text" placeholder='Email address' className=' rounded border border-secondary p-3  fs-6 input1 ms-5 ' />
          <button className='btn btn-danger p-3 ms-3 fw-bold  btn3'>Get Started <FontAwesomeIcon icon={faGreaterThan} /> </button>
        </div>
         {/*form  end*/}
      </div>

      <div className='div6'></div>

      {/*footer*/}
      <div>
        <div className="row">
          <div className="col-md-2"></div>
          <div className="col-md-2 mt-5">
            <p>Questions? <u>Call 000-800-919-1694</u></p>
            <p>
              <u>FAQ</u></p>
            <p><u>Investor Relations</u></p>
            <p><u>Privacy</u></p>
            <p><div className='mt-4 border border-white rounded me-3' style={{height:'37px'}}>
                <Dropdown>
                  <Dropdown.Toggle variant="outline-white" id="dropdown-basic">
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-white absolute top-[10px] mx-3" data-name="Languages" aria-hidden="true"><path fill-rule="evenodd" clip-rule="evenodd" d="M10.7668 5.33333L10.5038 5.99715L9.33974 8.9355L8.76866 10.377L7.33333 14H9.10751L9.83505 12.0326H13.4217L14.162 14H16L12.5665 5.33333H10.8278H10.7668ZM10.6186 9.93479L10.3839 10.5632H11.1036H12.8856L11.6348 7.2136L10.6186 9.93479ZM9.52722 4.84224C9.55393 4.77481 9.58574 4.71045 9.62211 4.64954H6.41909V2H4.926V4.64954H0.540802V5.99715H4.31466C3.35062 7.79015 1.75173 9.51463 0 10.4283C0.329184 10.7138 0.811203 11.2391 1.04633 11.5931C2.55118 10.6795 3.90318 9.22912 4.926 7.57316V12.6667H6.41909V7.51606C6.81951 8.15256 7.26748 8.76169 7.7521 9.32292L8.31996 7.88955C7.80191 7.29052 7.34631 6.64699 6.9834 5.99715H9.06968L9.52722 4.84224Z" fill="currentColor"></path></svg> 
                    English
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    
                    <Dropdown.Item href="#/action-2" >English</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Hindi</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                </div></p>
            <p>Netflix India</p>
          </div>
          <div className="col-md-2 mt-5">
            <div className='mt-5'>
              <p><a href="" style={{color:'gray'}}>
                Help Centre</a></p>
              <p><a href="" style={{color:'gray'}}>
                Jobs</a></p>
              <p><a href="" style={{color:'gray'}}>
                Cookie Preferences</a></p>
              <p><a href="" style={{color:'gray'}}>Legal Notices</a></p>
            </div>
          </div>
          <div className="col-md-2 mt-5">
            <div className='mt-5'>
              <p><a href="" style={{color:'gray'}}>
                Account</a></p>
              <p><a href="" style={{color:'gray'}}>
                Ways to Watch</a></p>
              <p><a href="" style={{color:'gray'}}>
                Corporate Information</a></p>
              <p><a href="" style={{color:'gray'}}>
                Only on Netflix</a></p>
            </div>
          </div>
          <div className="col-md-2 mt-5">
            <div className='mt-5'>
              <p><a href="" style={{color:'gray'}}>
                Media Centre</a></p>
              <p><a href="" style={{color:'gray'}}>
                Terms of Use</a></p>
              <p><a href="" style={{color:'gray'}}>
                Contact Us</a></p>
            </div>
          </div>
          <div className="col-md-2"></div>
        </div>
      </div>




    </>
  )
}

export default App
