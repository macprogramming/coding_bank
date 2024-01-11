import { useState } from 'react';
import img from '../assets/Login_image.svg'
// import logo from '..assets/Dummy_Logo.svg';
// import MailOutlineOutlinedIcon from '@mui/icons-material/MailOutlineOutlined';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  let navigate = useNavigate();

  const [logUser, setUser] = useState({
    email: '',
    password: ''
  });
  const [isError, setIsError] = useState([0,0]);
  const [isToggle, setIsToggle] = useState(false);
  const [ isUser, setIsuser ] = useState(false);

  const handleInput = (e) => {
    let { email, password } = logUser;
    const number = isError;
    const name = e.target.name;
    const value = e.target.value;
    if(name == 'email') {
      email = value;
      number[0] = 1;
    } else if (name == 'password') {
      password = value;
      number[1] = 1;
    }
    setUser({
      email,
      password
    });
    setIsError(number);
  }


  const login = async () => {
    setIsToggle(!isToggle)
    let { email, password } = logUser;
    const number = isError;
    if(email === '') {
      number[0] = 0;
      toast.error("Please enter email!");
    } else if(password === '') {
      number[1] = 0;
      toast.error("Please enter password!");
    } else {
      // loginCall({email, password}, dispatch)
      const res = await fetch('http://localhost:8000/auth/login',{
        method: 'POST',
        headers: {
          'Content-Type':'application/json'
        },
        body: JSON.stringify({
          email, password
        })
      })

      const response = await res.json();
      if (res.status === 400 || !response) {
        toast.error("Invalid user!");
      } else {
        toast.success("Login Successfull!");
        // dispatch(addUser(response.data))
        sessionStorage.setItem('email',response.data.email)
        navigate('/home')
      }
      // navigate('/home')
    }
    setIsError(number);
  }
  return(
    <>
      <div className="container-fluid bg-light">
        <div className="row mx-md-5 custom-mh-100">
          <div className="offset-md-1 col-12 col-md-10 d-flex justify-content-center align-items-center">
            <div className='row'>
              <div className="col-12 col-md-7 mh-100 order-1 order-md-0">
                {/* <Image className='img img-fluid h-100' src={img} alt="Picture of the author" /> */}
                <img src={img} className="img img-fluid" />
              </div>
              <div className="col col-md-5 mh-100 order-0 order-md-1">
                <div className='card border-0 px-md-4 h-100'>
                  <div className='card-header bg-white border-0 text-center'>
                    <img src={img} className="img img-fluid w-25" />
                    <p>Login into your account</p>
                  </div>
                  <div className='card-body'>
                    <form>
                      <div className='form-group mb-2'>
                        <label className='form-label'>Email Id:</label>
                        <input className='form-control' type='email' name="email" value={logUser.email} onChange={handleInput} placeholder='Enter your email' />
                        {/* <MailOutlineOutlinedIcon className="icon" /> */}
                      </div>
                      <div className='form-group mb-2'>
                        <label className='form-label'>Password</label>
                        <input className='form-control' type='password' name="password" value={logUser.password} onChange={handleInput} placeholder='Enter your password' />
                        {/* <LockOutlinedIcon fontSize='10px' className="icon" /> */}
                      </div>
                      <div className='form-group my-3 text-end'>
                        <Link className='text-decoration-none text-custom-secondary' to="/forgotpassword">Forgot password</Link>
                      </div>
                      <div className='d-grid mb-2 d-block'>
                        <button type='button' className='btn btn-md btn-custom-primary' onClick={login}>Login Now</button>
                      </div>
                      <hr class="hr-text" data-content="OR" />
                      <div className='d-grid mb-2 d-block'>
                        <button type='button' onClick={ () => navigate('/signup')} className='btn btn-md btn-custom-outline-primary'>Signup now</button>
                      </div>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </>
  )
}

export default Login;