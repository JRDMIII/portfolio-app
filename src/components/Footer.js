import React from 'react'

export default function Footer() {

    return (
        <div id='footer' className='h-fit w-full bg-black'>
            <div className='flex justify-center py-5 sm:pl-10'>
                <ul className='flex gap-x-6 sm:gap-x-10 justify-center'>
                    <li className='footerLinks'><a href="/">Home</a></li>
                    <li className='footerLinks'><a href="https://www.instagram.com/damiolatunjii/">Instagram</a></li>
                    <li className='footerLinks'><a href="https://www.linkedin.com/in/dami-olatunji-71b992227/">LinkedIn</a></li>
                    <li className='footerLinks'><a onClick={() => navigator.clipboard.writeText("damiolatunji4tj@gmail.com")} className='hover:cursor-pointer'>Email</a></li>
                    <li className='footerLinks'><a href="https://docs.google.com/document/d/1am8jNgx-7fSWewzev_JtTi_49tmKvoWuTQJ8Mmw5aB0/edit?usp=sharing">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}
