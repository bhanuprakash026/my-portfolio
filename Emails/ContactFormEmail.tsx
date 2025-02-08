import React from 'react'
import {
    Html,
    Body,
    Head,
    Heading,
    Hr,
    Container,
    Preview,
    Section,
    Text
} from '@react-email/components'

import { Tailwind } from '@react-email/tailwind'

type ContactFormEmailProps = {
    message: string;
    senderEmail: string;
}

const ContactFormEmail = ({ message, senderEmail }: ContactFormEmailProps) => {
    return (
        <Html>
            <Head>
                <meta name="Importance" content="high" />
                <meta name="X-Priority" content="1 (Highest)" />
                <meta name="X-MSMail-Priority" content="High" />
            </Head>
            <Preview>
                New message from your Portfolio site
            </Preview>
            <Tailwind>
                <Body className='!bg-gray-100 !text-black'>
                    <Container>
                        <Section className='bg-white border-black my-10 px-10 py-4 rounded-md'>
                            <Heading className='leading-tight'>You received the following message form the contact from</Heading>
                            <Text>{message}</Text>
                            <Hr />
                            <Text>The sender's email is: {senderEmail}</Text>
                        </Section>
                    </Container>
                </Body>
            </Tailwind>
        </Html>
    )
}

export default ContactFormEmail