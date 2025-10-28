import React from 'react'
import menImage from '../assets/men2.jpg';
import jweImage from '../assets/jwe2.jpg';
import eleImage from '../assets/el1.jpg';
import womenImage from '../assets/1.jpg';
import womenImage1 from '../assets/women.jpg';
import jwelImage1 from '../assets/jwel.jpg';
import more from '../assets/av2.png';
import menImage1 from '../assets/men1.jpg'


const Cards = () => {
    return (
        <>
            <div className='  '>
                <h1 className='text-center mt-10 font-serif text-5xl pt-5'>Products Hub</h1>
                <div className="cards mt-10 flex flex-row ms-10 me-10 gap-5">

                    <img src={menImage} alt="error" className='rounded-2xl w-[400px] h-[300px]' />
                    <img src={womenImage} alt="error" className='rounded-2xl w-[300px] h-[300px]' />
                    <img src={jweImage} alt="error" className='rounded-2xl w-[300px] h-[300px]' />
                    <img src={eleImage} alt="error" className='rounded-2xl w-[350px] h-[300px] ' />

                </div>
                <div className="cards mt-10 flex flex-row ms-10 me-10 gap-5">

                    <img src={womenImage1} alt="error" className='rounded-2xl w-[400px] h-[300px]' />
                    <img src={jwelImage1} alt="error" className='rounded-2xl w-[300px] h-[300px]' />
                    <img src={menImage1} alt="error" className='rounded-2xl w-[300px] h-[300px]' />
                    <img src={more} alt="error" className='rounded-2xl w-[300px] h-[300px] ' />

                </div>
            </div>

        </>
    )
}

export default Cards