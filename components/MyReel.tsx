// components/MyReel.tsx
'use client'
import React, { useState } from 'react';
import axios from 'axios';
import { PuffLoader } from 'react-spinners';


const MyReel: React.FC = () => {
    const [reelUrl, setReelUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [Loaded, setHasLoaded] = useState(false);
    const [videoUrl, setVideoUrl] = useState<string>();
    const [videoUrlo, setVideoUrlo] = useState<string>();

    function getId(url: string) {
        return url.split("reel/")[1].split(" ")[0].slice(0, 11);
    }

    function onChangehandler(e: any) {
        setReelUrl(e.target.value);
    }

    async function submitHandler(e: any) {
        const idreel = getId(reelUrl);
        console.log(idreel)
        e.preventDefault();
        if (reelUrl.length === 0) {
            alert("Empty Reel link!");
            return;
        }
        setIsLoading(true);
        const url = await fetchVideoUrl(idreel);
        setVideoUrl(url);
        setHasLoaded(true)
        setVideoUrlo(`https://www.instagram.com/reel/${idreel}`)

    }

    const fetchVideoUrl = async (idreel: string) => {
        try {
            const id = idreel
            const response = await axios.post(`/api/getReel`,
            {
                id
             }, // Send domain as JSON payload
             { headers: { 'Content-Type': 'application/json' } 
            } // Set Content-Type header);
            )
            console.log(response.data.resD)
            return response.data.resD;

        } catch (error) {
            console.error('Error fetching video URL:', error);
            return null;
        }finally{
            setIsLoading(false)
         
        }
    };

    console.log('videoUrl', videoUrl)
    return (
        <div className="max-w-lg mx-auto items-center justify-center flex flex-col p-2">
            <input
                type="text"
                placeholder="Enter Instagram Reel URL"
                className="w-full p-2 rounded-md border border-gray-300 focus:outline-none focus:border-rose-500"
                onChange={onChangehandler}
            />
            <button
                onClick={submitHandler}
                className="mt-2 bg-rose-500 hover:bg-rose-600 text-white rounded-md p-2"
            >
                Search
            </button>

            <div className="reel-response mt-4">
                {isLoading && (
                    <div className="text-gray-500 font-semibold w-full m-auto justify-center text-center mt-10">
                        <PuffLoader />
                    </div>
                ) }
                
            {Loaded &&  (
      <>
   {/* eslint-disable-next-line @next/next/no-head-element */}
   
   <link rel="canonical" href={videoUrlo}></link>
   {/* <video controls crossOrigin='anonymous' src={videoUrl}></video> */}
         <a
         className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
         href={videoUrl || ''}
         download="shafin.mp4"
         rel="noopener noreferrer"
         target="_blank"
     >
         Download Reel
     </a>
                  
      </>
                )}
            </div>
        </div>
    );
};

export default MyReel;
