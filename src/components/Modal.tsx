import React from 'react'

import Quote from '../constants/types'

interface ModalProps {
    isOpen: boolean;
    quoteData: Quote[];
    handleClose: () => void;
}

const Modal: React.FC<ModalProps> = ({ isOpen, quoteData, handleClose }) => {
    return (
        <div className={`fixed inset-0 bg-black bg-opacity-50 z-50 ${isOpen ? 'flex' : 'hidden'} justify-center items-center sm:items-start `}>
            <img
                src='/close.svg'
                alt="close"
                className="h-6 w-6 fixed sm:right-12 xl:right-72 md:right-16 lg:right-52 top-32 sm:top-16 cursor-pointer "
                onClick={handleClose}
            />
            <div className={`flex flex-col ${quoteData.length === 0 && "justify-center"} bg-white  w-4/5 lg:w-3/5 h-1/2 p-4 rounded-lg overflow-y-auto mt-0 sm:mt-24  `}>




                {quoteData.length === 0 ? <img src="/timer.png" alt="loading" className="w-12 h-12 mx-auto animate-spin " /> :
                    <>
                        <h1 className="text-2xl font-bold">Quotes</h1>

                        <div className="items-center justify-center bg-slate-100 p-4 my-2">
                            {
                                quoteData?.map((quote, index) => (
                                    <div key={index} className="my-4 ">
                                        <h2 className="text-xl font-semibold">Quote {index + 1}</h2>
                                        <p className="text-lg">{quote.quote}</p>
                                        <p className="text-sm text-gray-500">{quote.author}</p>
                                    </div>
                                ))

                            }
                        </div>
                    </>
                }



                {quoteData.length != 0 && <button className="bg-teal-500 text-white py-2 px-4 rounded w-1/2 sm:w-1/4 " onClick={handleClose}>Close</button>}

            </div>
        </div>


    )
}

export default Modal