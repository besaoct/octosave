/** @type {import('next').NextConfig} */


const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  skipWaiting: true,
  disable: process.env.NODE_ENV === 'development',
})

module.exports = withPWA({
   images: {
    domains: ["misc.scdn.co", "i.scdn.co", "geo-media.beatsource.com", "i1.sndcdn.com", "media.pitchfork.com", "seed-mix-image.spotifycdn.com", "xrxqqakkgezhaqsfgjey.supabase.co"]
  }
})