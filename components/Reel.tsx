// components/InstagramReelSearch.tsx
'use client'
import React, { useState } from 'react';
import LoadedReels from './LoadedReels';
import axios from 'axios';
import { PuffLoader } from 'react-spinners';

const InstagramReelSearch: React.FC = () => {
    const [reelUrl, setReelUrl] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [hasLoaded, setHasLoaded] = useState(false);
    const [responseObj, setResponseObj] = useState();
    const KeyApi = process.env.NEXT_PUBLIC_RAPID_API_IG
    function getId(url: string) {
        
        return url.split("reel/")[1].split(" ")[0].slice(0,11);
    }

    function onChangehandler(e:any) {
        setReelUrl(e.target.value);
    }

    function submitHandler(e:any) {
        e.preventDefault();
        if (reelUrl.length === 0) {
            alert("Empty Reel link !");
            return;
        }
        setIsLoading(true);
        fetchReel();
    }

    async function fetchReel() {
        const reelId = getId(reelUrl);
        console.log(reelId)
        if (reelId.length !== 11) {
            alert("Invaid Reel URL");
            setIsLoading(false);
            return;
        }
        const response = await axios(
            `https://instagram-bulk-profile-scrapper.p.rapidapi.com/clients/api/ig/media_by_id?shortcode=${reelId}&response_type=reels&corsEnabled=false`,
            {
                method: "GET",
                headers: {
                    'X-RapidAPI-Key': KeyApi,
                    'X-RapidAPI-Host': 'instagram-bulk-profile-scrapper.p.rapidapi.com'
                },
                params: {
                    ig: 'fairytalefolkdorset',
                    response_type: 'short',
                    corsEnabled: 'false'
                  },
            }
        );
        const data = await response.data;
        // console.log(process.env.RAPIDAPI_KEY)
        setResponseObj(data[0]);
        setIsLoading(false);
        setHasLoaded(true);
    }

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
            <div className=" text-gray-500 font-semibold w-full m-auto justify-center  text-center mt-10">
                <PuffLoader/>
            </div>
        )}
        {hasLoaded && <LoadedReels responseObj={responseObj} />}
    </div>
</div>
  );
};

export default InstagramReelSearch;
