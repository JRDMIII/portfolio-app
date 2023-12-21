import React from 'react'

export default function Footer() {

    return (
        <div id='footer'>
            {/* <div id='line-break' className='bg-gray-200 p-[1px] mx-[155px]' /> */}
            <div className='py-5 pl-10'>
                <ul className='flex gap-x-10 justify-center'>
                    <li className='footerLinks'><a href="/">Home</a></li>
                    <li className='footerLinks'><a href="https://www.instagram.com/damiolatunjii/">Instagram</a></li>
                    <li className='footerLinks'><a href="https://www.linkedin.com/in/dami-olatunji-71b992227/">LinkedIn</a></li>
                    <li className='footerLinks'><a onClick={() => navigator.clipboard.writeText("damiolatunji4tj@gmail.com")} className='hover:cursor-pointer'>Email</a></li>
                    <li className='footerLinks'><a href="">Resume</a></li>
                </ul>
            </div>
        </div>
    )
}
