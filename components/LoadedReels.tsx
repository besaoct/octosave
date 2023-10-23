import Link from "next/link";


const LoadedReels = (responseObj:any) => {

    console.log(responseObj);
  
    // If no reel found
    if (responseObj.message) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-2xl font-bold text-red-500">No reel found!</h1>
            <p className="text-gray-500">Make sure you have entered a proper link.</p>
        </div>
        );
    }
   const thisReel = responseObj.responseObj.items[0]
    console.log(thisReel.user.profile_pic_url);
    
    return (
        <>
            <div className="p-2 rounded-lg shadow-lg bg-white">
            <header className="p-2 border-b border-gray-300">
                <div className="flex items-center">
                
                    <div>
                        <h3 className="text-xl font-semibold">{thisReel.user.full_name}</h3>
                        <Link  className="text-gray-600 text-sm" href={`https://instagram.com/${thisReel.user.username}`}>
                            @{thisReel.user.username}
                        </Link>
                    </div>
                    
                </div>
            </header>
         
            <Link
                className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                target="_blank"
                download="shafin.mp4"
                href={thisReel.video_versions[0].url}
            >
                Download Reel
            </Link>
            <h1 className="text-2xl font-bold mt-4">Reel Caption</h1>
            <p className="text-gray-700 mt-2">{thisReel.caption?.text}</p>
        </div>
    
          
        </>
    );
};


export default LoadedReels;