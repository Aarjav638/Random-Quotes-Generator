import React from 'react'
import useFetch from '../hooks/useFetch';
const Quote: React.FC = () => {
    const [quoteData, loading] = useFetch(`https://dummyjson.com/quotes/random/1`);
    if (loading) {
        return <div>Loading...</div>;
    }
    return (
        <div className='flex justify-center my-4  ' >
            {quoteData && (
                <div className=' p-4 w-4/5 sm:w-1/2 flex-wrap z-10 shadow-gray-500 shadow-md bg-slate-200 rounded-lg '>
                    <p className="text-xl font-bold text-center">{quoteData["0"].quote}</p>
                    <p className="text-xs font-semibold text-center text-slate-500">{"-"}{quoteData["0"].author}</p>
                </div>
            )}
        </div>
    );
}

export default Quote