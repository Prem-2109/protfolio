import React from 'react'
import Image from 'next/image'
import { assets } from '@/assets/assets'

const Footer = () => {
    const currentYear = new Date().getFullYear()

    return (
        <div className="mt-20">
            <div className="text-center">
                <h4 className="mb-2 text-lg font-Ovo">Prem Kumar</h4>

                <div className="w-max flex items-center gap-2 mx-auto">
                    <Image src={assets.mail_icon} alt="Email" className="w-6" />
                    <span>pkprem350@gmail.com</span>
                </div>
            </div>

            <div className="text-center sm:flex items-center justify-between border-t border-gray-400 mx-[10%] mt-12 py-6">
                <p>© {currentYear} Prem Kumar. All rights reserved.</p>

                <ul className="flex items-center gap-10 justify-center mt-4 sm:mt-0">
                    <li>
                        <a href="https://github.com/Prem-2109" target="_blank" rel="noopener noreferrer">
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/premkumar2102/" target="_blank" rel="noopener noreferrer">
                            LinkedIn
                        </a>
                    </li>
                    <li>
                        <a href="/my-resume.pdf" download>
                            Resume
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
