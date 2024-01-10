import React, { useState, useEffect } from 'react'

import axios from 'axios'
import Card from './Card'
import { Link, useParams } from 'react-router-dom'

const LevelCard = () => {
    const [fData, setfData] = useState([])
    const [imageWait, setImageWait] = useState(true);

    const route = useParams()
    const idValue = route.id;
    const serverURL = process.env.REACT_APP_SERVERURL;

    let arr = [];
    const moduleData = async () => {


        const val = await axios.get(`${serverURL}/get-all-levels`);

        const data = await val.data.data.data;

        data.forEach(element => {
            if (element._id === idValue) {



                element.categorylist.forEach(async (i) => {
                    const val = await axios.get(`${serverURL}/get-all-categories`);

                    const data = await val.data.data.data;
                    data.forEach(async (j) => {


                        if (j._id === i.categoryname) {




                            arr.push({id:j._id,
                                categoryname:  j.categoryname})

                        }
                    })
                    setfData(arr)
                    console.log(arr)
                    setImageWait(false)
                })
            }
        });
    }

    // const fetchCategory = async () => {
    //     const valLevel = await axios.get(`${serverURL}/get-all-categories`);

    //     const dataLevel = await valLevel.data.data.data;


    //     const val = await axios.get(`${serverURL}/get-all-levels`);

    //     const data = await val.data.data.data;
    //     console.log(data)
    //     const s = new Set();

    //     // for (let i = 0; i < data.length && dataLevel[0]._id != dataLevel[1]._id; i++) {
    //         // if (!s.has(dataLevel[i]._id)) {
    //             const add_level = await axios.post(`${serverURL}/add-category-in-level`, {


    //                 // "level-name": `${data[i].levelname}`,
    //                 "level-name":"DLevel 2: Understanding UX Design",
    //                 "extra-category": {

    //                     "category-name": "6481fa27e9e030015df176ca"


    //                 }


    //             })



    //         // } else {
    //         //     s.add(dataLevel[i]._id);
    //         // }
    //     // }

    // }
   
    useEffect(() => {
        moduleData()



    }, [])
    return (
        <>

            {imageWait === true ?
                <div className="flex justify-center items-center mt-24 mb-24">

                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <div>
                
                    {
                    fData.map((e) => {
                        return (
                           
                            <Link to={`/challenge/${e.id}`} key={e.id}>
                                <div className="flex flex-col flex-wrap  m-8 ">
                                    {e.categoryname}
                                    <div className="flex flex-col items-center justify-center">
                                        <button className="bg-yellow-200 rounded-lg shadow-lg px-16 py-1 text-md">{e.categoryname}</button>
                                        
                                    </div>

                                    <div class="flex justify-center items-center">
                                        <div class="flex justify-center gap-2 sm:gap-4 md:gap-8 lg:gap-32 xl:gap-52">
                                            <Card />
                                            <Card />
                                        </div>
                                    </div>

                                </div>
                            </Link>

                        )
                    })
                }
                </div>

            }
        </>
    )
}

export default LevelCard