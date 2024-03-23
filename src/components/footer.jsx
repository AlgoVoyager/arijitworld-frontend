import React from 'react'
import {Link} from 'react-router-dom'
const Footer = () => {
  return (
    <footer className='w-full border-t-4 border-blue-200 pt-4 absolute bottom-0 flex flex-col items-center justify-center bg-blue-100'>
    
        <section className='relative w-10/12 flex justify-around flex-wrap'>
            {/* <h2 className='absolute -top-8 text-2xl'>Featured</h2> */}
            <div className='  lg:w-1/3 w-full'>
                <h3 className='text-2xl text-center'>Song  Tags <div className='w-16 h-1 mx-auto bg-blue-400'></div></h3>
                <div className="stag flex flex-wrap justify-around gap-1 mt-1">
                    <Link to="category/party/">Party</Link>
                    <Link to="category/motivational/">Motivational</Link>
                    <Link to="category/classical/">Classical</Link>
                    <Link to="category/calming/">Calming</Link>
                    <Link to="category/classical/">Universal</Link>
                    <Link to="category/classical/">Motherly</Link>
                    <Link to="category/classical/">Patriotic</Link>
                    <Link to="category/classical/">Vocal</Link>
                    <Link to="category/classical/">Drive</Link>
                    <Link to="category/classical/">Chill</Link>
                    <Link to="category/classical/">Haunting</Link>
                    <Link to="category/classical/">Friendly</Link>
                    <Link to="category/classical/">Rage</Link>
                    <Link to="category/classical/">Broken</Link>
                    <Link to="category/classical/">Happy</Link>
                    <Link to="category/classical/">Love</Link>
                    <Link to="category/classical/">Romantic</Link>
                </div>
            </div>
            <div >
                <h3 className='text-2xl lg:text-left text-center '>Info<div className='w-16 h-1 bg-blue-400 lg:mx-0 mx-auto '></div></h3>
                <div className="flinks flex flex-col relative left-2 mt-2 gap-1 lg:text-left text-center">
                    <Link to="info/socials">Social</Link>
                    <Link to="info/career">Career</Link>
                    <Link to="info/concerts">Concerts</Link>
                    <Link to="info/personallife">Personal Life</Link>
                </div>
            </div>
            <div>
                <h3 className='text-2xl lg:text-left text-center '>Community<div className='w-16 h-1 bg-blue-400 lg:mx-0 mx-auto '></div></h3>
                <div className="flinks flex flex-col relative left-2 mt-2 gap-1 lg:text-left text-center">
                    <Link to="info/socials">Join</Link>
                    <Link to="info/concerts">Groups</Link>
                    <Link to="info/personallife">Volunteer</Link>
                    <Link to="info/career">World Chat</Link>
                </div>
            </div>
            <div>
                <h3 className='text-2xl lg:text-left text-center '>Pages<div className='w-16 h-1 bg-blue-400 lg:mx-0 mx-auto '></div></h3>
                <div className=''>
                    <div className="flinks flex flex-col relative left-2 mt-2 gap-1 lg:text-left text-center">
                        <Link to="info/career">Blog</Link>
                        <Link to="info/concerts">Lyrics</Link>
                        <Link to="info/personallife">Songs</Link>
                        <Link to="info/socials">About Us</Link>
                    </div>
                </div>
            </div>
            <div>
                <h3 className='text-2xl lg:text-left text-center '>More<div className='lg:mx-0 mx-auto w-20 h-1 bg-blue-400'></div></h3>
                <div className=''>
                    <div className="flinks flex flex-col relative left-2 mt-2 gap-1 lg:text-left text-center">
                        <Link to="info/career">Privacy Policy</Link>
                        <Link to="info/concerts">Terms & Conditions</Link>
                        <Link to="info/personallife">Feedback/Suggetion</Link>
                        <Link to="info/concerts" className=''>Contribute to this Platform</Link>
                    </div>
                </div>
            </div>
        </section>
        <section>
            <div className=' mx-auto social h-10 flex gap-5 items-center'>
                <a href="#">Wiki</a>
                <a href="#">Twitter</a>
                <a href="#">Youtube</a>
                <a href="#">Instagram</a>
            </div>
        </section>
        <section className=" " >arijitworld.com &copy; All Rights Reserved @2024</section>
    </footer>
  )
}

export default Footer