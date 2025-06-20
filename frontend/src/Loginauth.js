import React, { useRef, useState ,  } from 'react';
import Slider from 'react-slick';
import './styles/login.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import pharmacy1 from './images/pharmacy-1.jpg';
import pharmacy2 from './images/pharmacy-2.jpg';
import pharmacy3 from './images/pharmacy-3.jpg';
import Toast from "./ToastService"

function Login(props) {

  const [UserName,setUserName] = useState('')
  const [PassWord,setPassWord] = useState('')
  const sliderRef = useRef(null);


  

  const handleLogin = (e) => {
    e.preventDefault();
    if(UserName.length > 0 && UserName ==='Admin' && PassWord ==='1590'){
      const loginAuth = Math.random()
      localStorage.setItem("Username", UserName);
      localStorage.setItem("Token", loginAuth.toString());
      props.onLogin(true);
      Toast.success("Login Successfully")
    }
    else{
      Toast.error("Invalid Password")
    }

  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };



  return (
    <div className="login-page">
      <div className="carousel-container">
        <Slider ref={sliderRef} {...sliderSettings}>
          <div className="carousel-slide">
            <img src={pharmacy1} alt="Pharmacy 1" />
          </div>
          <div className="carousel-slide">
            <img src={pharmacy2} alt="Pharmacy 2" />
          </div>
          <div className="carousel-slide">
            <img src={pharmacy3} alt="Pharmacy 3" />
          </div>
        </Slider>
      </div>

      <div className="form-container">
        <div className="form-box">
          <h2>Pharmacy Login</h2>
          <form onSubmit={handleLogin} className='form-div'>
            <input type="text" placeholder="Username" value={UserName} onChange={(e)=>setUserName(e.target.value)} required />
            <input type="password" placeholder="Password" value={PassWord} onChange={(e)=>setPassWord(e.target.value)} required />
            <div style={{display:"flex",justifyContent:"center"}}>
              <button type="submit">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Login;
