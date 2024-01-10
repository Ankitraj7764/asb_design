import React, { useState, useEffect } from 'react'
import PickupChild from './PickupChild'
import axios from 'axios'
import { Link } from 'react-router-dom'


const Pickup = () => {

    const [fData, setfData] = useState([])
    const [fLevel, setfLevel] = useState([])
    const [score, setscore] = useState(0)
    const serverURL = process.env.REACT_APP_SERVERURL;

    const fetchData = async () => {


        const val = await axios.get(`${serverURL}/get-all-modules`);

        const data = await val.data.data.data;
        setfData(data)


    }
    const fetchLevel = async () => {
        const valLevel = await axios.get(`${serverURL}/get-all-levels`);

        const dataLevel = await valLevel.data.data.data;

        setfLevel(dataLevel)
        const items = JSON.parse(localStorage.getItem('user'));


        const user = await axios.get(`${serverURL}/get-all-users`);

        const userlist = await user.data.data.data;

        userlist.forEach(element => {
            if (element.emailid === items.emailid) {
                setscore(element.score)
            }
        });
        const val = await axios.get(`${serverURL}/get-all-modules`);

        const data = await val.data.data.data;
        const s = new Set();

        // for (let i = 0; i < data.length; i++) {
        //     if (!s.has(dataLevel[i]._id)) {
        //         await axios.post(`${serverURL}/add-level-in-module`, {


        //             "module-name": `${data[i].modulename}`,
        //             "extra-level": {

        //                 "level-name": `${dataLevel[i]._id}`





        //             }
        //         })
        //     }else{
        //         s.add(dataLevel[i]._id);
        //     }

        // }

    }





    useEffect(() => {

        fetchData();


    }, [])
    return (
        <div className="flex flex-col items-center">
            <div className=" bg-teal-400 text-white text-center border-2 rounded-lg w-1/3 lg:w-2/6 p-2  ">Score : <span className="ml-2"> {score}</span> </div>

            <div className="flex flex-wrap  mt-12 mb-12 lg:w-4/6 justify-center">

                {
                    fData.map((e) => {

                        return (
                            <Link to={`/level/${e._id}`} key={e._id} >
                                <div className="flex  items-center w-7/8 justify-between h-16  font-sans text-white hover:text-black shadow-xl hover:bg-white hover:duration-300 rounded-lg bg-teal-400 m-3 ">

                                    <span className="w-64 text-center md:mx-3 lg:mx-4">
                                        {e.modulename.length >20
                                            ? `${e.modulename.substring(0, 20)}...`
                                            : e.modulename}
                                    </span>
                                    {/* <span className="mx-3">
                                    {e.modulename}
                                    </span> */}


                                </div>
                            </Link>
                        )
                    })
                }


            </div>



        </div>
    )
}

export default Pickup