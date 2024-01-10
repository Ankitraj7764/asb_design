import React, { useEffect, useState } from 'react'

import NavbarModule from '../../NavbarModule';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import swal from 'sweetalert';




function Category() {
  const [problems, setProblems] = useState({})
  const [imageurl, setImageurl] = useState("");
  const [waitImage, setWaitImage] = useState(false)
  const route = useParams()
  const idValue = route.id;
  const serverURL = process.env.REACT_APP_SERVERURL;
  const [uploadRes, setUploadRes] = useState("")
  const fetchCategory = async () => {
    const valLevel = await axios.get(`${serverURL}/get-all-categories`)

    const dataLevel = await valLevel.data.data.data;

    dataLevel.forEach(element => {


      element.problemlist.forEach((i) => {

        if (idValue === i.challengename) {
          setProblems(i);
        }
      })

    });




  }
  const preset_key = "";
  const cloud_name = "dh5cpqscd";
  const handleImage = async (e) => {
    const files = e.target.files;
    console.log(files[0]);

    const formData = new FormData();
    formData.append('file', files[0]);

    formData.append('upload_preset', 'project_1');
    setWaitImage(true)

    try {
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dh5cpqscd/image/upload",
        formData
      );

      const data = response.data;
      setWaitImage(false);
      setImageurl(data.secure_url);


    } catch (error) {
      console.error(error);
    }

  }
  const finalSubmit = async (e) => {
    e.preventDefault();
    const items = JSON.parse(localStorage.getItem('user'));
    const name = items.emailid;
    const problemname = String(problems.challengename);
    const marks = 5;

    const res = await axios.post(`${serverURL}/submit-solution`, { marks, 'user-name': name, 'solution-url': imageurl, 'problem-name': problemname })


    if (imageurl && res.status === 201 || res.status === 200) {
      swal("Submitted Successfully")
    } else {
      swal("Please upload your solution")
    }
  }

  useEffect(() => {
    fetchCategory()
  }, [])
  console.log(String(String(problems.challengename)).length)
  return (
    <>
      <NavbarModule />
      <div className="m-4 md:m-16 lg:m-18 xl:m-18 md:w-1/2 lg:w-1/2 ">
        <div className="border-2 rounded-xl shadow-xl p-2">
          <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 p-5 text-sm lg:text-md md:text-md bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400 "><p className="text-xl bg-blue-400 p-1 mb-2 px-8 rounded-lg"> Challenge</p>{(problems.challengename)} </p>

          {
            String(problems.challengename).length <= 100 ? (
              <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400">
                <span className="text-blue-600 font-bold">Difficulty: <span className='text-black text-sm' >Easy</span></span>:
              </p>
            ) : String(problems.challengename).length > 100 && String(problems.challengename).length < 120 ? (
              <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400">
                <span className="text-blue-600 font-bold">Difficulty: <span className='text-black text-sm'>Medium</span></span>:
              </p>
            ) : (
              <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400">
                <span className="text-blue-600 font-bold">Difficulty: <span className='text-black text-sm'>Hard</span></span>:
              </p>
            )
          }


          <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">nextchallengeurl</span> :{problems.nextchallengeurl} </p>
          <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">previouschallengeurl</span>: {problems.previouschallengeurl} </p>
          <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">Score</span> : {problems.score} </p>

        </div>
        <p className='my-2 font-sans font-semibold'>Your Previos solution: {imageurl}</p>
        <div className="flex justify-center items-center mt-4">
          <form method="post" onSubmit={finalSubmit}>
            <input onChange={handleImage} type="file" />
            {
              waitImage === true ?
                <div role="status" mt-1>
                  <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                  </svg>
                  <span class="sr-only">Loading...</span>
                </div>
                : <button type='submit' className="bg-blue-400 text-white hover:bg-blue-800 px-2 py-1 rounded-lg">Upload Your Solution </button>
            }

          </form>
        </div>
      </div>

    </>
  )
}

export default Category