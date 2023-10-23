import MyReel from "@/components/MyReel";
import InstagramReelSearch from "@/components/Reel";

export default function Home() {
  return (
    <div className='w-full m-auto flex-col items-center justify-center my-4'>
    <h1 className=' text-center'>Instagram Reel Downloader</h1>
    {/* <MyReel/> */}
    <InstagramReelSearch/>
  </div>
  )
}
