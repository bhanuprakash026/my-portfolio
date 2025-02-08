"use client"
import { motion } from 'framer-motion'
import React from 'react'
import SectionHeader from './section-heading'
import { FaPaperPlane } from 'react-icons/fa'
import { sendEmail } from '@/actions/sendEmail'
import { FaPhoneAlt } from "react-icons/fa";


const ContactMe = () => {
    return (
        <motion.section id="contact" className='scroll-mt-28 flex flex-col justify-center items-center mb-20 sm:mb-28
        w-[min:(100%,38rem)] overflow-hidden flex-wrap'
            initial={{
                opacity: 0
            }}
            whileInView={{
                opacity: 1
            }}
            transition={{
                duration: 1
            }}
            viewport={{
                once: true
            }}>
            <SectionHeader>Contact Me</SectionHeader>
            <p className='-mt-6 text-gray-700 dark:text-white/80'>Please Contact me directly at <a className='underline' href='mailto:bhanutankasala26@gmail.com'>
                bhanutankasala26@gmail.com
            </a> or through this form</p>


            <form className='flex flex-col mt-10 mb-2 dark:text-white/80' action={async (formData) => {
                const firstName = formData.get('firstName') as string
                const lastName = formData.get('lastName') as string
                const email = formData.get('email') as string
                const message = formData.get('message') as string;
                console.log(firstName, lastName, email, message)
                await sendEmail(formData)
            }}>
                <div className='flex mb-4 gap-2'>
                    <input name="firstName" required className='dark:bg-white dark:bg-opacity-20 w-full h-14 p-3 rounded-lg borderBlack' type="text" placeholder='Enter Your First name' />
                    <input name="lastName" required className='dark:bg-white dark:bg-opacity-20 w-full h-14 p-3 rounded-lg borderBlack' type="text" placeholder="Enter Your Last name" />
                </div>
                <div className='flex flex-col flex-wrap'>
                    <input name="email" required placeholder='Enter Your email' className='dark:bg-white dark:bg-opacity-20 w-full h-14 p-3 rounded-lg borderBlack' type='email' />
                    <textarea name="message" required placeholder='Type Your Message' className='dark:bg-white dark:bg-opacity-20 w-full h-52 my-3 rounded-lg p-4 borderBlack' />
                    <div className='flex items-center justify-between'>

                        <button className='dark:bg-white/20 group flex w-[8rem] h-[3rem] gap-2 bg-gray-900 text-white rounded-full outline-none transition-all
                    items-center justify-center focus:scale-110 hover:scale-110 active:scale-105' type="submit">Submit <FaPaperPlane className='text-xs opacity-70 transition-all
                    group-hover:translate-x-1 group-hover:-translate-y-1 hover:bg-gray-950'/></button>
                        <motion.div className='flex items-center gap-2 text-black/70'>
                            <FaPhoneAlt className='dark:text-white/80 '/>
                            <p className='dark:text-white/80 '> +91 7780327539</p>
                        </motion.div>


                    </div>
                </div>
            </form>
        </motion.section>
    )
}

export default ContactMe