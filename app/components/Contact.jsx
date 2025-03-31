import React, { useState } from 'react';
import Image from 'next/image'
import { assets } from '@/assets/assets'
const Contact = () => {

    const [result, setResult] = useState("")

    const onSubmit = async (event) => {
        event.preventDefault();
        setResult("Sending....");
        const formData = new FormData(event.target);

        formData.append("access_key", "f81ed0ef-0d2c-4452-904a-0796517cac75");

        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });

        const data = await response.json();

        if (data.success) {
            setResult("Form Submitted Successfully");
            event.target.reset();
            console.log(formData);
        } else {
            console.log("Error", data);
            setResult(data.message);
        }
    };


    return (
        <div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 
                       bg-[url('/footer-bg-colour.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
        >
            {/* Section Header */}
            <h4 className="text-center mb-2 text-lg font-Ovo">Connect With Me</h4>
            <h2 className="text-center text-5xl font-Ovo">Get in Touch</h2>
            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Let’s make something awesome together. Say hi!
            </p>

            {/* Contact Form */}
            <form className="max-w-2xl mx-auto" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <input
                        type="text"
                        placeholder="Enter Your Name" name='name'
                        required
                        className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white"
                    />
                    <input type="email" placeholder="Enter Your Email" name='email' required className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white"
                    />
                </div>

                <textarea rows={6} placeholder="Write Your Message" name='message' required className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white" ></textarea>

                {/* Submit Button */}
                <button type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
                >Submit <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </button>
                <p className='mt-4'>{result}</p>
            </form>
        </div>
    );
}

export default Contact;
