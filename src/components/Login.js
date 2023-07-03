import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
} from "mdb-react-ui-kit";


import {auth,provider} from '../firebase-configuration'
import {signInWithRedirect} from 'firebase/auth'
import { useNavigate } from "react-router-dom";
function Login({setLogin}) {
  let navigate=useNavigate()
  const loginwithgoogle = () => {
    signInWithRedirect(auth, provider)
      localStorage.setItem("login",true)
      setLogin(true)
    
      navigate("/")
    
    
   }
   
  
  return (
    <>
      <MDBContainer fluid>
        <MDBRow className="d-flex justify-content-center align-items-center h-100 ">
          <MDBCol col="12">
            <MDBCard
              className="bg-white my-5 mx-auto "
              style={{ borderRadius: "1rem", maxWidth: "500px" }}
            >
              <MDBCardBody className="p-5 w-100 d-flex flex-column ">
                <h2 className="fw-bold mb-2 text-center lg-fs-30">
                  Login with Google Gmail
                </h2>

                <hr className="my-4" />

                <button
                  
                  style={{ textDecoration: "none" }}
                  className="fw-bold btn btn-outline-success w-100"
                  onClick={loginwithgoogle}
                >
                  Login with Google
                </button>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </>
  );
}

export default Login;
