import React, { useState, useEffect } from 'react'

import axios from 'axios'
import { Link, useParams } from 'react-router-dom'


const Challenge = () => {
  const [fData, setfData] = useState([])
  const [fLevel, setfLevel] = useState([])
  const id = useParams();
  const idValue = id.id;
  console.log(idValue)
  const serverURL = process.env.REACT_APP_SERVERURL;
  let data;



  const fetchLevel = async () => {
    const valLevel = await axios.get(`${serverURL}/get-all-categories`);

    const dataLevel = await valLevel.data.data.data;

    {

      dataLevel.map((e) => {
        if (e._id === idValue) {
          setfData(e.problemlist);
        }
      })

    }
    console.log(fData)
    data = await axios.post(`${serverURL}/add-challenge-in-category`,
      {
        "category-name": "test_category_10",
        "extra-challenge": {
          "challenge-name": "Category_3_test_1",
          "description": "description will contain problem description",
          "image-url": "http://example-url-to-images",
          "score-assigned": 10,
          "next-challenge-url": "http://url-to-next-challenge",
          "previous-challenge-url": "http://url-to-previous-challenge",
          "difficulty": "medium"
        }

      })


  }
  useEffect(() => {
    fetchLevel()


  }, [])
  console.log(fData)


  return (


    <div>
      <div className="flex flex-wrap justify-center  md:w-full lg:w-full xl:w-full mt-20 mb-24 ">

        {
          fData.map((e) => {
            return (
              <div className="px-4 flex-1 mb-2 border-x-2 lg:w-5/12 border-2 rounded-xl shadow-xl p-2 mx-2  ">
                <Link to={`/details/${e.challengename}`} >
                  <p className="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 p-5 text-sm lg:text-md md:text-md bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400 "><p className="text-xl bg-blue-500 text-white p-1 mb-2 px-8 rounded-lg"> Challenge</p>{e.challengename} </p>

                  {
                    e.challengename.length <= 100 ? (
                      <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400">
                        <span className="text-blue-600 font-bold">Difficulty: <span className='text-black text-sm'>Easy</span></span>
                      </p>
                    ) : e.challengename.length > 60 && e.challengename.length < 150 ? (
                      <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400">
                        <span className="text-blue-600 font-bold">Difficulty:<span className='text-black text-sm'>Medium</span></span>
                      </p>
                    ) : (
                      <p class="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400">
                        <span className="text-blue-600 font-bold">Difficulty:<span className='text-black text-sm'>Hard</span></span>
                      </p>
                    )
                  }

                  <p className="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">nextchallengeurl</span> :{e.nextchallengeurl} </p>
                  <p className="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">previouschallengeurl</span>: {e.previouschallengeurl} </p>
                  <p className="mb-0.5 md:mb-1 lg:mb-1.5 xl:mb-2 text-sm lg:text-md md:text-md font-normal p-3 bg-slate-200 rounded-lg text-gray-700 dark:text-gray-400"><span className="text-blue-600 font-bold ">Score</span> : {e.score} </p>
                </Link>
              </div>

            )

          })
        }
      </div>
    </div>
  )
}

export default Challenge