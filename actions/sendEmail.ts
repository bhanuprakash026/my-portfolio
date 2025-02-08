"use server"
import { Resend } from 'resend'
import { validateString } from '@/lib/utils'
import { getErrorMessage } from '@/lib/utils'
import ContactFormEmail from '@/Emails/ContactFormEmail'
import React from 'react'
const resend = new Resend(process.env.RESEND_API_KEY)

export const sendEmail = async (formData: FormData) => {
    const firstName = formData.get('firstName') as string
    const lastName = formData.get('lastName') as string
    const senderEmail = formData.get('email') as string
    const message = formData.get('message') as string
    console.log("form server side", firstName, lastName, senderEmail, message)

    if (!validateString(firstName, 20)) {
        return {
            error: 'Invalid First name'
        }
    }

    if (!validateString(lastName, 20)) {
        return {
            error: 'Invalid last name'
        }
    }

    if (!validateString(message, 10000)) {
        return {
            error: 'Invalid Message'
        }
    }

    if (!validateString(senderEmail, 70)) {
        return {
            error: 'Invalid Email name'
        }
    }


    try {
        await resend.emails.send({
            from: 'Contact Form from Portfolio <onboarding@resend.dev>',
            to: 'bhanutankasala26@gmail.com',
            replyTo: senderEmail,
            subject: 'Message from Contact Form',
            react: React.createElement(ContactFormEmail,  {message: message, senderEmail:  senderEmail })
        })
} catch (error: unknown) {
    getErrorMessage(error)
}


}