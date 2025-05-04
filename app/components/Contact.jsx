import React, { useState } from 'react';
import Image from 'next/image'
import { assets } from '@/assets/assets'
import { motion } from "motion/react"
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
        <motion.div
            id="contact"
            className="w-full px-[12%] py-10 scroll-mt-20 
                       bg-[url('/footer-bg-colour.png')] bg-no-repeat bg-center bg-[length:90%_auto]"
                       initial={{opacity: 0 }}
                       whileInView={{opacity: 1 }}
                       transition={{ duration: 1 }}
        >
            {/* Section Header */}
            <motion.h4 
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 0.3 }} className="text-center mb-2 text-lg font-Ovo">Connect With Me</motion.h4>
            <motion.h2
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 0.5 }} className="text-center text-5xl font-Ovo">Get in Touch</motion.h2>
            <motion.p
            initial={{opacity: 0, y: -20 }}
            whileInView={{opacity: 1, y:0 }}
            transition={{ duration: 0.5, delay: 0.9 }} className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo">
                Let’s make something awesome together. Say hi!
            </motion.p>

            {/* Contact Form */}
            <motion.form
            initial={{opacity: 0}}
            whileInView={{opacity: 1}}
            transition={{ duration: 0.5, delay: 0.9 }} className="max-w-2xl mx-auto" onSubmit={onSubmit}>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                    <motion.input
                    initial={{x:-50,opacity: 0}}
                    whileInView={{x:0,opacity: 1}}
                    transition={{ duration: 0.6, delay: 1.1 }}
                        type="text"
                        placeholder="Enter Your Name" name='name'
                        required
                        className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white"
                    />
                    <motion.input
                      initial={{x:50,opacity: 0}}
                      whileInView={{x:0,opacity: 1}}
                      transition={{ duration: 0.6, delay: 1.2 }} type="email" placeholder="Enter Your Email" name='email' required className="w-full p-3 outline-none border border-gray-400 rounded-md bg-white"
                    />
                </div>

                <motion.textarea initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.3, delay: 1 }} rows={6} placeholder="Write Your Message" name='message' required className="w-full p-4 outline-none border border-gray-400 rounded-md bg-white" ></motion.textarea>

                {/* Submit Button */}
                <motion.button initial={{ y: 30, opacity: 0 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.6, delay: 1.2 }} type="submit" className="py-3 px-8 w-max flex items-center justify-between gap-2 bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
                >Submit <Image src={assets.right_arrow_white} alt="" className="w-4" />
                </motion.button>
                <p className='mt-4'>{result}</p>
            </motion.form>
        </motion.div>
    );
}

export default Contact;
