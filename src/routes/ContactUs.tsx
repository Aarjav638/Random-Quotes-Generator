import React, { useRef } from 'react'
import { useForm } from 'react-hook-form'
import Header from '../components/Header'
import Footer from '../components/Footer'

type formValues = {
    name: string
    email: string
    phone: string
    message: string
}

const ContactUs = () => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const messageRef = useRef<HTMLTextAreaElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const submitRef = useRef<HTMLButtonElement>(null)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form: formValues = {

            name: nameRef.current!.value,
            email: emailRef.current!.value,
            message: messageRef.current!.value,
            phone: phoneRef.current!.value
        }
        console.log(form)
    }
    console.log(messageRef)
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement>
        | React.RefObject<HTMLButtonElement> | React.RefObject<HTMLTextAreaElement>
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            nextRef.current?.focus();
        }
    };
    return (
        <>
            <Header />
            <div className="flex flex-col justify-center items-center">
                <h1 className='my-4 text-4xl'>ContactUs</h1>
                <div className='flex mb-4 bg-slate-500 w-4/5 md:w-3/4 lg:w-1/2  rounded-lg justify-center items-center p-4'>
                    <form className="flex flex-col  mb-4 w-full justify-center items-center" onSubmit={handleSubmit} >
                        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4'>
                            <label htmlFor="name" className='text-white'>Name:</label>
                            <input
                                type='text'
                                placeholder='Name'
                                className='p-2 w-full sm:w-2/3 border border-gray-300 rounded-md'
                                required={true}
                                ref={nameRef}
                                onKeyDown={(e) => handleKeyDown(e, emailRef)}
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4'>
                            <label htmlFor="email" className='text-white'>Email:</label>
                            <input
                                type="email"
                                placeholder="Email"
                                className="p-2 w-full sm:w-2/3 border border-gray-300 rounded-md"
                                required={true}
                                ref={emailRef}
                                onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                            />
                        </div>

                        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4'>

                            <label htmlFor="phone" className='text-white'>Phone:</label>
                            <input
                                type="tel"
                                placeholder="Phone"
                                className="p-2 border w-full sm:w-2/3  border-gray-300 rounded-md"
                                required={true}
                                ref={phoneRef}
                                onKeyDown={(e) => handleKeyDown(e, messageRef)}
                            />
                        </div>
                        <div className='flex flex-col sm:flex-row gap-4 items-center justify-between w-full  sm:w-3/4 p-4'>
                            <label htmlFor="message" className='text-white'>Message:</label>
                            <textarea
                                className='p-2 w-full sm:w-2/3 min-h-48 border border-gray-300 rounded-md'
                                required={true}
                                ref={messageRef}
                            />
                        </div>
                        <button className="bg-teal-500 text-white p-2 rounded-md" type='submit' ref={submitRef} >Sign In</button>
                    </form>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ContactUs;