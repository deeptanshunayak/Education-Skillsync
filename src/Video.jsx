import React from 'react'
import babbar from '../src/assets/babbar.png'
import striver from '../src/assets/striver.png'
import harry from '../src/assets/Harry.png'
import python from '../src/assets/python.png'
import simp from '../src/assets/simplified.png'
import web from '../src/assets/web.png'
export default function Video() {
  return (
    <div className='font-Poppins bg-Solitude'>
      <h1 className=' mb-2 text-center capitalize text-4xl text-Teal'>Explore the Courses</h1>
      <hr className='w-1/5 mx-auto'></hr>
      <div className='grid grid-cols-1 md:grid-cols-3 gap-4 justify-items-center mt-10'>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    
                    <button className='button-34'><a href='https://youtube.com/playlist?list=PLDzeHZWIZsTryvtXdMr6rPh4IDexB5NIA&si=_csGXlCKTjM0JBaO'>Apply</a></button>
                </div>
               
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={striver} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in Java</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'><a href='https://youtube.com/playlist?list=PLmnXSMW2x4mPwrIqiNovEIBLTiDGSvjpu&si=gZnHCCHaBh2gHf_r'>Apply</a></button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={harry} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Javascript</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'><a href='https://youtube.com/playlist?list=PLu0W_9lII9ahR1blWXxgSlL4y9iQBnLpR&si=ywlGEtLEYVG8hDBQ'>Apply</a></button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={python} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Python</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>< a href='https://youtube.com/playlist?list=PLu0W_9lII9agwh1XjRt242xIpHhPT2llg&si=0I3QGZb1sCEjyk4A'>Apply</a></button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={simp} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>React</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'><a href='https://youtube.com/playlist?list=PLZlA0Gpn_vH_NT5zPVp18nGe_W9LqBDQK&si=e1MpP1vTGUGLfBt_'>Apply</a></button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={web} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Web Development</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'><a href='https://youtube.com/playlist?list=PLfqMhTWNBTe3H6c9OGXb5_6wcc1Mca52n&si=-_87pQQt7Jv6c5ue'>Apply</a></button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
        <div className='py-5'>
            <div className='rounded overflow-hidden shadow-lg max-w-sm'>
                <img src={babbar} alt='course' className='w-full'></img>
                <div className='px-6 py-4'>
                    <div className='font-bold text-xl mb-2'>Dsa in C++</div>
                    <p className='text-gray-600 pb-2'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis dolor voluptatibus eaque iure quasi, nisi eius error, laboriosam corporis </p>
                    <button className='button-34'>Apply</button>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}
