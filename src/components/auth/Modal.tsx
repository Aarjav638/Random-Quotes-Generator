import React, { useRef } from 'react'

import { User } from '../../constants/types'

interface ModalProps {
    isOpen: boolean;
    handleClose: () => void;
}

const SignInModal: React.FC<ModalProps> = ({ isOpen, handleClose }) => {
    const nameRef = useRef<HTMLInputElement>(null)
    const emailRef = useRef<HTMLInputElement>(null)
    const passwordRef = useRef<HTMLInputElement>(null)
    const phoneRef = useRef<HTMLInputElement>(null)
    const submitRef = useRef<HTMLButtonElement>(null)
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const user: User = {
            id: Math.random().toString(),
            name: nameRef.current!.value,
            email: emailRef.current!.value,
            password: passwordRef.current!.value,
            phone: phoneRef.current!.value
        }
        console.log(user)
    }
    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, nextRef: React.RefObject<HTMLInputElement>
        | React.RefObject<HTMLButtonElement>
    ) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            nextRef.current?.focus();
        }
    };

    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'flex' : 'hidden'} justify-center items-center sm:items-start `}>
            <img
                src='/close.svg'
                alt="close"
                className="h-6 w-6 fixed sm:right-12 xl:right-1/3 md:right-16 lg:right-80 top-32 sm:top-16 cursor-pointer "
                onClick={handleClose}
            />
            <div className="bg-white p-4 rounded-lg h-1/2 w-4/5 lg:w-1/3 mt-0 sm:mt-24 ">
                <h2 className="text-center text-2xl font-semibold mb-2">Sign In</h2>
                <form className="flex flex-col gap-y-4" onSubmit={handleSubmit} >
                    <input
                        type='text'
                        placeholder='Name'
                        className='p-2 border border-gray-300 rounded-md'
                        required={true}
                        ref={nameRef}
                        onKeyDown={(e) => handleKeyDown(e, emailRef)}
                    />
                    <input
                        type="email"
                        placeholder="Email"
                        className="p-2 border border-gray-300 rounded-md"
                        required={true}
                        ref={emailRef}
                        onKeyDown={(e) => handleKeyDown(e, passwordRef)}
                    />
                    <input
                        type="password"
                        placeholder="Password"
                        className="p-2 border border-gray-300 rounded-md"
                        required={true}
                        ref={passwordRef}
                        onKeyDown={(e) => handleKeyDown(e, phoneRef)}
                    />
                    <input
                        type="tel"
                        placeholder="Phone"
                        className="p-2 border border-gray-300 rounded-md"
                        required={true}
                        ref={phoneRef}
                        onKeyDown={(e) => handleKeyDown(e, submitRef)}
                    />
                    <button className="bg-teal-500 text-white p-2 rounded-md" type='submit' ref={submitRef} >Sign In</button>
                </form>

            </div>

        </div>


    )
}

export default SignInModal;