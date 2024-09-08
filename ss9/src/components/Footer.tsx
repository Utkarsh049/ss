

const Footer = () => {
  return (
    <>
        <div className=' bg-gradient-to-r from-transparent from-0% via-[#A416C8] via-50% to-transparent to-100% pt-0.5 '>
            <div className='h-full w-full bg-black pt-12'>
            <div className='grid grid-cols-1 md:grid-cols-2 flex items-center'>
                <img src='/src/assets/SS10.png' alt='logo' className='p-5 md:p-10 h-auto object-contain'></img>
                <div className='grid grid-cols-2'>
                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                        </div>
                    </button>

                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                        </div>
                    </button>

                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                        </div>
                    </button>

                    <button className='text-white bg-green-300 p-[0.1rem] h-[3rem] md:h-[6rem] m-5 md:m-10 bg-gradient-to-r from-fuchsia-400 via-purple-500 to-purple-900 rounded-xl '>
                        <div className='text-[1rem] md:text-[2rem] h-full w-full rounded-xl  bg-black flex items-center justify-center'>
                    Open
                        </div>
                    </button>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-3 text-white text-[1.25rem] md:text-[2rem] text-center m-10 md:m-20 justify-items-center'>
                <div className='mb-5 md:mb-0 flex items-center'>
                    <img src='/src/assets/insta.svg' className='md:w-18 w-12'></img>
                    <a href='#' className='p-5'>csed.vit.ac.in</a>
                </div>
                <div className='mb-5 md:mb-0 flex items-center'>
                <img src='/src/assets/whatsapp.svg' className='md:w-18 w-12'></img>
                    <a href='#' className='p-5'>csed.vit.ac.in</a>
                </div>
                <div className='mb-5 md:mb-0 flex items-center'>
                <img src='/src/assets/email.svg' className='md:w-18 w-12'></img>
                    <a href='#' className='p-5'>csed.vit.ac.in</a>
                </div>
            </div>
            </div>
        </div>
    </>
  )
}

export default Footer