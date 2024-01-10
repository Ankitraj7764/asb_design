import React, { useState,createContext } from 'react';

import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios';
import { Navigate } from 'react-router-dom';
import Category from './loggedin/level/category/Category';
import swal from 'sweetalert';




function Login() {
  const [emailid, setEmailid] = useState('');
  const [password, setPassword] = useState('');
 const [contextData, setContextData] = useState("")
 const [imageWait, setImageWait] = useState(false);
  const navigate = useNavigate();
  const UserContext = createContext();   

  const handleSubmit = async (event) => {
    event.preventDefault();
    setImageWait(true)
   
    const serverURL= process.env.REACT_APP_SERVERURL;
    const response = await axios.post(`${serverURL}/login`, { emailid, password })
    console.log(serverURL)
     console.log(response)
    if (response.status === 201 || response.status === 200) {
       swal("Done")
      localStorage.setItem('user', JSON.stringify({ emailid, password }));
      setContextData(emailid)
      navigate("/modules")
      
      

    }
      else {

        swal('Invalid ');
      }


    }
   
  return (
    <>
    <div>
   
      <section className="h-screen">
        <div className="h-full">

          <div
            className="g-6 flex h-full flex-wrap items-center justify-center lg:justify-between">
            <div
              className="shrink-1 mb-12 grow-0 basis-auto md:mb-0 md:w-9/12 md:shrink-0 lg:w-6/12 xl:w-6/12">
              <img
                src="https://tecdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample image" />
            </div>


            <div className="mb-12 md:mb-0 md:w-8/12 lg:w-5/12 xl:w-5/12">
              <form onSubmit={handleSubmit}>

                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="text" value={emailid} onChange={event => setEmailid(event.target.value)}
                    className="peer block min-h-[auto]  rounded-lg border-0 shadow-lg w-full md:w-4/5 lg:w-4/5 xl:w-4/5   bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlInput2"
                    placeholder="Email address" />

                </div>


                <div className="relative mb-6" data-te-input-wrapper-init>
                  <input
                    type="password" value={password} onChange={event => setPassword(event.target.value)}
                    className="peer w-full md:w-4/5 lg:w-4/5 xl:w-4/5 border-0  shadow-lg block min-h-[auto]  rounded-lg bg-transparent px-3 py-[0.32rem] leading-[2.15] outline-none transition-all duration-200 ease-linear"
                    id="exampleFormControlInput22"
                    placeholder="Password" />

                </div>

                <div className="mb-6 flex items-center justify-between">

                  <div className="mb-[0.125rem] block min-h-[1.5rem] pl-[1.5rem]">
                    <input
                      className="relative float-left -ml-[1.5rem] mr-[6px] mt-[0.15rem] h-[1.125rem] w-[1.125rem] border-2  rounded-lg border-black outline-none before:pointer-events-none before:absolute before:h-[0.875rem] before:w-[0.875rem] before:scale-0 before:rounded-full before:bg-transparent before:opacity-0 before:shadow-[0px_0px_0px_13px_transparent] before:content-[''] checked:border-primary checked:bg-primary checked:before:opacity-[0.16] checked:after:absolute checked:after:-mt-px checked:after:ml-[0.25rem] checked:after:block checked:after:h-[0.8125rem] checked:after:w-[0.375rem] checked:after:rotate-45 checked:after:border-[0.125rem] checked:after:border-l-0 checked:after:border-t-0 checked:after:border-solid checked:after:border-white checked:after:bg-transparent checked:after:content-[''] hover:cursor-pointer hover:before:opacity-[0.04] hover:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:shadow-none focus:transition-[border-color_0.2s] focus:before:scale-100 focus:before:opacity-[0.12] focus:before:shadow-[0px_0px_0px_13px_rgba(0,0,0,0.6)] focus:before:transition-[box-shadow_0.2s,transform_0.2s] focus:after:absolute focus:after:z-[1] focus:after:block focus:after:h-[0.875rem] focus:after:w-[0.875rem] focus:after:rounded-[0.125rem] focus:after:content-[''] checked:focus:before:scale-100 checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca] checked:focus:before:transition-[box-shadow_0.2s,transform_0.2s] checked:focus:after:-mt-px checked:focus:after:ml-[0.25rem] checked:focus:after:h-[0.8125rem] checked:focus:after:w-[0.375rem] checked:focus:after:rotate-45 checked:focus:after:rounded-none checked:focus:after:border-[0.125rem] checked:focus:after:border-l-0 checked:focus:after:border-t-0 checked:focus:after:border-solid checked:focus:after:border-white checked:focus:after:bg-transparent dark:border-neutral-600 dark:checked:border-primary dark:checked:bg-primary dark:focus:before:shadow-[0px_0px_0px_13px_rgba(255,255,255,0.4)] dark:checked:focus:before:shadow-[0px_0px_0px_13px_#3b71ca]"
                      type="checkbox"
                      id="exampleCheck2" />
                    <label
                      className="inline-block pl-[0.15rem] hover:cursor-pointer mr-2 md:mr-3 lg:mr-5 xl:mr-5 "
                      for="exampleCheck2">
                      Remember me
                    </label>

                  <Link to="/forgot-password" className="border-2 p-1 px-2 rounded-lg shadow-sm">Forgot password?</Link>
                  </div>

                </div>


                <div className="text-center lg:text-left">
                  <button
                    type="submit"
                    className="inline-block rounded bg-primary text-black px-7 pb-2.5 pt-3 text-sm font-medium uppercase leading-normal shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                    data-te-ripple-init
                    data-te-ripple-color="black">{!imageWait == true ?"Login": <div role="status" className="flex justify-center">
                    <svg ariaHidden="true" className="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span className="sr-only">Loading...</span>
                  </div>}

                  </button>


                  <p className="mb-0 mt-2 pt-1 text-sm font-semibold">
                    Don't have an account?
                    <Link
                      to="/register"
                      className="text-danger transition duration-150 ease-in-out hover:text-danger-600 focus:text-danger-600 active:text-danger-700 ml-3"
                    >Register</Link>

                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <UserContext.Provider value={context}>
      <Category/>
    <UserContext.Provider/> */}
    </>
  )
}

export default Login