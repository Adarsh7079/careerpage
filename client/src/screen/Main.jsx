import React, { useState } from 'react';
import { IoSearchSharp } from "react-icons/io5";
import {Card} from "../index"

const data=[
    {
        company_name:"Microsoft",
        Job_Title:"Software Developer",
        Degree:"B.Tech / M.Tech",
        Batch:"2023/2024",
        Jobt_Type:"Fulltime",
        Location:"Bangalore",
        Experience:"0-1",
        View:"1231"
    },
    {
        company_name:"Amazon",
        Job_Title:"Software Developer",
        Degree:"B.Tech / M.Tech",
        Batch:"2023/2024",
        Jobt_Type:"Internship",
        Location:"Bangalore",
        Experience:"0-1",
        View:"1231"
    },
    {
        company_name:"Microsoft",
        Job_Title:"Software Developer",
        Degree:"B.Tech / M.Tech",
        Batch:"2023/2024",
        Jobt_Type:"Fulltime",
        Location:"Bangalore",
        Experience:"0-1",
        View:"1231"
    },
    {
        company_name:"Microsoft",
        Job_Title:"Software Developer",
        Degree:"B.Tech / M.Tech",
        Batch:"2023/2024",
        Jobt_Type:"Fulltime",
        Location:"Bangalore",
        Experience:"0-1",
        View:"1231"
    }, {
        company_name:"Microsoft",
        Job_Title:"Software Developer",
        Degree:"B.Tech / M.Tech",
        Batch:"2023/2024",
        Jobt_Type:"Fulltime",
        Location:"Bangalore",
        Experience:"0-1",
        View:"1231"
    }
]
const Main = () => {

    const [showMore,setMore]=useState(false);

    const shoData=showMore ?data:data.slice(0,2);
  return (
   <div className=''> 
     <div className='bg-[#eef5f4] '>
        <section className=' mx-2 md:mx-14 flex flex-col md:flex-row justify-between py-10'>
            {/* left */}
            <div className="w-full md:w-3/5">
                <div className='text-[3rem] md:w-[600px]  font-semibold'>
                    Discover verified
                    <br />
                    tech <span className=' text-blue-600'>Jobs</span> and  <span className=' text-blue-600'>Internships </span>
                     at top companies.
                </div>

                {/* seach bar  */}
                <div className="mt-10 md:w-[1100px]">
                    <div className='h-[50px] bg-white flex justify-between rounded-lg hover:bg-gray-200 outline-none'>
                        <input 
                        className='w-[950px] outline-none px-5 text-blue-300 placeholder-blue-300 placeholder-text-2xl border-none'
                        placeholder='search with title or company name '
                        type='search'/>
                        <div className='mx-14 flex items-center'><IoSearchSharp  className='w-5 h-5'/></div>
                    </div>
                </div>

                {/* filter */}
                <div className='flex flex-wrap gap-2 md:gap-5 mt-5'>
                    <button className='bg-gray-200 h-7 px-2 text-sm rounded-lg'>Frontend</button>
                    <button className='bg-gray-200 h-7 px-2 text-sm rounded-lg'>Backend</button>
                    <button className='bg-gray-200 h-7 px-2 text-sm rounded-lg'>Software engineer</button>
                    <button className='bg-gray-200 h-7 px-2 text-sm rounded-lg'>Web developer</button>
                    <button className='bg-gray-200 h-7 px-2 text-sm rounded-lg'>Test Engineer</button>
                    <button className='bg-gray-200 h-7 px-2 text-sm rounded-lg'>Fullstack</button>
                </div>
                <div className='flex gap-10 mt-7'>
                   <div className='flex  items-center gap-2'>
                   <input 
                     type='radio'
                     id="first"
                     name="jobtype"
                     value="fulltime"/>
                   <div>Fulltime</div>
                   </div>
                   <div className='flex items-center gap-2'>
                   <input 
                      type='radio'
                      id="second"
                      name="jobtype"
                      value="internship"/>
                   <div>Internship</div>
                   </div>
                   
                </div>
            </div>

             {/* right */}
            <div className="hidden md:block md:w-2/5">
                <img
                className='w-[300px] h-[350px]'
                 src="https://careersat.tech/_next/image?url=https%3A%2F%2Fres.cloudinary.com%2Fdvc6fw5as%2Fimage%2Fupload%2Fv1678515591%2F3d-business-young-woman-sitting-with-laptop-and-stylus_fvym3e.png&w=640&q=75" alt="" />
            </div>
        </section>
        
    </div>
    {/* card */}
    
    <section className='mx-2 md:mx-14 mt-5'>
           {/* <Card/> */}
           {
             shoData.map((value)=>(
               <div className='mt-5'>
                <Card value={value}
               className =" "/>
               </div>
                ))
           }
    </section>

    {/* show more option */}
    <section className='px-2 md:px-10'>
        {
            !showMore ?(
                <div
                  onClick={(e)=>setMore(!showMore)}
                 className='bg-blue-300 md:w-[80%]  h-[40px] rounded-md  mt-5'> 
                <div className=' flex justify-center items-center text-2xl text-gray-800 py-1'>
                Show more
                </div>
                </div>
            ):( <div
                onClick={(e)=>setMore(!showMore)}
               className='bg-blue-300 md:w-[80%]  h-[40px] rounded-md  mt-5'> 
              <div className='flex justify-center items-center text-2xl text-gray-800 py-1'>
              Show Less
              </div>
              </div>)
        }
    </section>
   </div>
  )
}

export default Main;
