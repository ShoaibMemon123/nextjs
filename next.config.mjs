/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects:async()=>{
    return [
      {
        source:'/play/',
        destination:'https://studentspoint.org/griffith-vice-chancellors-international-scholarship/amp/?utm_source=PillayFB&utm_medium=PKR&utm_campaign=pkr222&amp',
        permanent:true
      }
      ]
  }
      
};

export default nextConfig;
