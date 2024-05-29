import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import "../App.css"

const Home = () => {
  return (
    <Container>
      
      <img src="https://www.logo.wine/a/logo/Snapchat/Snapchat-Logo.wine.svg" className="img" />
      <Button>
        

      <button className="btn1"> <img src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA" className="google" />Continue with Google</button>
      <button className='btn2'>Sign Up</button>

      <p>Already have an account? <Link to="/login"> <span style={{color:"rgb(14,173,255)"}}> Log in </span></Link></p>
      </Button>

    </Container>
  )
}

const Container = styled.div`

background-color: rgb(255,252,0);
margin-top: -40px;
/* max-width: 15000px; */
/* max-width: 100%; */
height: 105vh;

.img{
  width: 500px;
  height: 500px;
  /* margin: 5px0 auto; */
  /* margin-left: 510px; */
  margin-left: -50px;
  
}

`;

const Button = styled.div`
button{
  background-color: #fff;
  border: none;
  text-align: center;
  align-items: center;
  border-radius: 20px;
  width: 350px;
  height: 45px;
  display: grid;
  margin: 10px auto;
  font-size: 16px;
  /* gap: 10px; */

}

.google{
  width: 20px;
  position: absolute;
  margin-left: 60px;
  height: 20px;
}

.btn2{
color: white;
font-weight: 600;
  background-color: rgb(14,173,255);
}

p{
    text-decoration: none;
    /* margin-left: 630px; */
    margin-left: 70px;
}



`;


export default Home