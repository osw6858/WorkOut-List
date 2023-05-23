import './App.css';
import React from 'react';

function App() {
  return (
    <div className="bg-[#F2F2F2] h-screen  dark:bg-slate-800">
        <div className='h-full w-10/12 m-auto'>
            <header className='flex-col align-middle justify-center'>
                <h1
                    className='text-center text-5xl pt-10 mb-3 font-serif text-black  dark:text-white'>Work out - List</h1>
                <h3 className='text-[15px] font-bold text-center mb-5 dark:text-slate-400'>오늘은 어떤 운동을 할까요?</h3>
            </header>
            <div className="inline-flex items-center justify-center w-full">
                <hr className="w-2/4 h-1 my-8 bg-gray-200 border-0 rounded dark:bg-gray-700"/>
                <div className="absolute px-4 -translate-x-1/2 left-1/2 bg-[#F2F2F2] dark:bg-slate-800">
                    <svg
                        aria-hidden="true"
                        className="w-5 h-5 text-gray-700 dark:text-gray-300"
                        viewBox="0 0 24 27"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"><path
                        d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                        fill="currentColor"/></svg>
                </div>
            </div>
            <nav className=' h-14 flex flex-row justify-center align-middle'>
                <button className='mx-3 dark:text-slate-400  hover:text-[#f75c35] duration-500'>홈</button>
                <button className='mx-3 dark:text-slate-400  hover:text-[#f75c35] duration-500'>운동일지</button>
            </nav>

            <main className='h-3/5 border border-gray-300 dark:border-gray-700 overflow-y-auto'>contents</main>
        </div>
        <footer className='h-20 bg-gray-200 border-t border-t-gray-300 dark:bg-slate-600 dark:border-t dark:border-t-gray-700'>
            <h2 className='text-3xl text-center dark:text-slate-400'>Made By Woong<div className='text-lg mt-2'>osw7890@gmail.com</div>
            </h2>
        </footer>
    </div>
);
}

export default App;
