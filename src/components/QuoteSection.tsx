import React, { useState } from 'react';
import Modal from './Modal';
import Quote from '../constants/types';

export const QuoteSection: React.FC = () => {

  const [num, setNum] = useState<number>(1);



  const [quoteData, setQuoteData] = useState<Quote[]>([]);

  const [loading, setLoading] = useState<boolean>(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClose = () => {
    setIsOpen(false);
  }

  const validiateNum = (num: number) => {
    if (num < 1) {
      alert("Number should be greater than 0");
      return false;
    }
    if (num > 10) {
      alert("Number should be less than 10");
      return false;
    }
    return true;
  }

  const getQuote = async () => {
    if (!validiateNum(num)) {
      return;
    }

    try {
      setLoading(true);

      setIsOpen(true);
      const response = await fetch(`https://dummyjson.com/quotes/random/${num}`);
      const res = await response.json();
      setQuoteData(res);
    }
    catch (err) {

      setLoading(false);
      alert(`Something went wrong,${err}`);
    }
    finally {
      setLoading(false);
    }
  }
  return (
    <div className="flex flex-col items-center my-4 ">
      <h1 className="text-xl sm:text-4xl font-bold">Quotes Section</h1>
      <p className="text-lg">Get as many random quotes</p>
      <input
        type="number"
        max={10}
        min={1}
        value={num}
        onChange={(e) => setNum(parseInt(e.target.value))}
        className="border-2 border-gray-400 p-2 w-40 sm:w-56  rounded my-2 text-center"
        placeholder="Enter the number of quotes"
      />

      <Modal isOpen={isOpen} quoteData={quoteData} handleClose={handleClose} />
      <button className="bg-teal-500 text-black py-2 px-4 rounded" onClick={getQuote}>
        {loading ? "Loading..." : "Get Quote"}
      </button>
    </div>

  );
};
