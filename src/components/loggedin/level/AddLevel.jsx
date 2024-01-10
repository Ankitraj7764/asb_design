import axios from 'axios'
import React, { useState, useEffect } from 'react'
import Card from './Card'

import { Link, useParams } from 'react-router-dom'
const AddLevel = () => {
    const [levelData, setLevelData] = useState([{}])
    const [renderData, setRenderData] = useState([])
    const [imageWait, setImageWait] = useState(true);
   
    const route = useParams()
    const idValue = route.id;
    const serverURL = process.env.REACT_APP_SERVERURL;
    let result = []
    const levelToRender = async () => {

        let arr = [];
        let arr2 = []
        const val = await axios.get(`${serverURL}/get-all-modules`);

        const data = await val.data.data.data;
        setLevelData(data);

        data.forEach(element => {
            if (element._id === idValue) {
                arr2.push(...element.levellist)




            }
        })
        let arr3 = [];
        arr2.forEach((i) => {
            arr3.push(i.levelname);
        })

        setLevelData(arr2)


        console.log(arr3)

        const valLevel1 = await axios.get(`${serverURL}/get-all-levels`);

        const apiLevel1 = await valLevel1.data.data.data;

        const catVal = await axios.get(`${serverURL}/get-all-categories`);

        const catData = await catVal.data.data.data;
        apiLevel1.forEach((i) => {
            let a = [];
            if (arr3.includes(i._id)) {

                let catList1 = [];
                i.categorylist.forEach((k) => {
                    catList1.push(k.categoryname)
                })

                let catList = [];

                console.log(i.categorylist)
                catData.forEach((j) => {
                    if (catList1.includes(j._id)) {
                        catList.push({ id: j._id, categoryname: j.categoryname })
                    }

                })
                console.log(catList)
                a.push({ id: i._id, levelname: i.levelname, categorylist: { categorylistIn: i.categorylist, catList: catList } });


            }
            if (a.length != 0) {

                result.push(a);
            }


        })
        console.log(result)
        // const valLevel = await axios.get(`${serverURL}/get-all-levels`);

        // const apiLevel = await valLevel.data.data.data;



        // apiLevel.forEach((j) => {

        //     arr2.forEach((i) => {

        //         if (j._id === i.levelname) {
        //             arr.push({
        //                 id: j._id,
        //                 levelname: j.levelname
        //             })


        //         }
        //     })
        // })

        console.log()

        setImageWait(false)
        setRenderData(result);


    }
    console.log(result.catList)
    useEffect(() => {
        levelToRender()


    }, [])


    return (
        <> 
            {imageWait === true ? 
                <div className="flex justify-center items-center w-full h-96 bg-slate-300 ">
                 
                    <div role="status">
                        <svg aria-hidden="true" class="w-8 h-8 mr-2 text-gray-200 animate-spin dark:text-gray-600 fill-blue-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                        </svg>
                        <span class="sr-only">Loading...</span>
                    </div>
                </div>
                :
                <div className="flex flex-col justify-center items-center">


                    <div className="flex flex-wrap  mt-12 mb-12 lg:w-4/6 justify-center">

                        {
                            renderData.map((e) => {

                                return (
                                    <>

                                        <div className="border-2 border-gray-300 mx-4 my-6 text-white rounded-xl shadow-xl">

                                            <div className='text-black flex justify-between  items-center mt-4 mr-4 px-1'>
                                                <p className='flex '>
                                                    <div class="group relative">
                                                        <div class="hidden group-hover:block bg-slate-200 ml-8 text-black rounded-lg p-2 absolute ">
                                                            <p>Topic Strength:0%</p>
                                                        </div>
                                                        <span className='px-1'>   <img className='bg-yellow-200  inline-block rounded-full' src={require("../../../image/star.png")} alt="" /></span>
                                                    </div>

                                                    <span>   <img src={require("../../../image/star.png")} alt="" /></span>
                                                    <span>   <img src={require("../../../image/star.png")} alt="" /></span>


                                                </p>
                                                <p className='flex '>
                                                    <div class="group relative">
                                                        <div class="hidden group-hover:block bg-slate-200 ml-8 text-black rounded-lg p-2 absolute ">
                                                            <p>0% Topic Coverage</p>
                                                        </div>
                                                        <span className=' rounded-3xl border-2 px-10'> </span>
                                                    </div>

                                                   </p>
                                            </div>
                                            <div className=" flex justify-center ">

                                                <div className="flex  justify-between items-center  h-16 font-sans text-white hover:text-black shadow-xl hover:bg-white hover:duration-300 rounded-lg bg-teal-400 my-3 ">
                                                    <p className='px-6'> {e[0].levelname}</p>

                                                </div>

                                            </div>
                                            {
                                                e[0].categorylist.catList.map((j) => {
                                                    return (
                                                        <>
                                                            <div className='my-12'>
                                                                <Link to={`/category/${j.id}`} key={j.id}>
                                                                    <div className="flex justify-center my-4">
                                                                        <button className="bg-yellow-200 mx-4 text-gray-600 rounded-lg shadow-lg px-16 py-1 text-md">{j.categoryname}</button>
                                                                    </div>
                                                                    <div class="flex justify-center items-center">
                                                                        <div class="flex justify-center mx-4 gap-2 px-1 sm:gap-4 md:gap-8 lg:gap-32 xl:gap-52">
                                                                            <Card />
                                                                            <Card />
                                                                        </div>
                                                                    </div>
                                                                </Link>
                                                            </div>

                                                        </>
                                                    )
                                                })
                                            }



                                        </div>
                                    </>
                                )
                            })
                        }


                    </div>



                </div>}
              
        </>
    )
}

export default AddLevel