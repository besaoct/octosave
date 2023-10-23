
const MyLoadedReels = (videoUrl:any) => {
    console.log(videoUrl)
    // If no reel found
    if (!videoUrl) {
        return (
            <div className="flex flex-col items-center justify-center text-center p-8">
            <h1 className="text-2xl font-bold text-red-500">No reel found!</h1>
            <p className="text-gray-500">Make sure you have entered a proper link.</p>
        </div>
        );
    }

    
    return (
        <>
            <div className="p-2 rounded-lg shadow-lg bg-white">
        

         
            <a
                className="mt-4 inline-block px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600"
                target="_blank"
                download="shafin.mp4"
                href={videoUrl}>
                Download Reel
            </a>
  
        </div>
    
          
        </>
    );
};


export default MyLoadedReels;