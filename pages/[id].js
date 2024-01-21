import { connectToDatabase } from './api/mongo';
import { useRouter } from 'next/router';


import React from 'react';
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { useRef, useState, useEffect } from 'react';


export default function Page(data) {
  const router = useRouter()
  let id = router.query.id
//   console.log(id)
 
//   function findObjectById(idToFind, dataArray) {
//     for (const obj of dataArray) {
//       if (obj._id === idToFind) {
//         console.log(obj)
//         return obj;

//       }
//     }
//     return null; // Return null if no match is found
//   }
  
//   const matchingObject = findObjectById(id, data["data"]);
  
//   console.log(matchingObject)

    const dataArray = data["data"];
  
  function findObjectById(idToFind, dataArray) {
    if (!dataArray || !Array.isArray(dataArray)) {
      return null; // Return null if dataArray is not valid
    }
  
    for (const obj of dataArray) {
      if (obj._id === idToFind) {
        console.log(obj);
        return obj;
      }
    }
  
    return null; // Return null if no match is found
  }
  
  const idToFind = "65ac19ada20dc9b1d4e8f9f7";
  const matchingObject = findObjectById(id, dataArray);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  console.log(matchingObject);
  
  return (
    <>
 
    <div className="bg-sky-300">
        <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="relative flex items-center justify-between">
                <div className="flex items-center">
                    <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center mr-8"
                    >
                        <svg
                            className="w-8 text-teal-accent-400"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeMiterlimit="10"
                            stroke="currentColor"
                            fill="none"
                        >
                            <rect x="3" y="1" width="7" height="12" />
                            <rect x="3" y="17" width="7" height="6" />
                            <rect x="14" y="1" width="7" height="6" />
                            <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-100 uppercase">
                            Hommies
                        </span>
                    </a>
                    <ul className="flex items-center  space-x-8 lg:flex">

                        <li>
                            <a
                                href="/features"
                                aria-label="Our product"
                                title="Our product"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                Features
                            </a>
                        </li>

                        <li>
                            <a
                                href="/about"
                                aria-label="About us"
                                title="About us"
                                className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                            >
                                About us
                            </a>
                        </li>
                    </ul>
                </div>
                <ul className="flex items-center hidden space-x-8 lg:flex">
                    <li>
                        <a
                            href="/"
                            aria-label="Sign in"
                            title="Sign in"
                            className="font-medium tracking-wide text-gray-100 transition-colors duration-200 hover:text-teal-accent-400"
                        >

                        </a>
                    </li>
                    <li>
                        <a
                            href="/"
                            className="inline-flex items-center justify-center h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                            aria-label="Sign up"
                            title="Sign up"
                        >

                        </a>
                    </li>
                </ul>
                <div className="lg:hidden">
                    <button
                        aria-label="Open Menu"
                        title="Open Menu"
                        className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(true)}
                    >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                            <path
                                fill="currentColor"
                                d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                            />
                            <path
                                fill="currentColor"
                                d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                            />
                        </svg>
                    </button>
                    {isMenuOpen && (
                        <div className="absolute top-0 left-0 w-full">
                            <div className="p-5 bg-white border rounded shadow-sm">
                                <div className="flex items-center justify-between mb-4">
                                    <div>
                                        <a
                                            href="/"
                                            aria-label="Company"
                                            title="Company"
                                            className="inline-flex items-center"
                                        >
                                            <svg
                                                className="w-8 text-deep-purple-accent-400"
                                                viewBox="0 0 24 24"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                                strokeLinecap="round"
                                                strokeMiterlimit="10"
                                                stroke="currentColor"
                                                fill="none"
                                            >
                                                <rect x="3" y="1" width="7" height="12" />
                                                <rect x="3" y="17" width="7" height="6" />
                                                <rect x="14" y="1" width="7" height="6" />
                                                <rect x="14" y="11" width="7" height="12" />
                                            </svg>
                                            <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                                                Company
                                            </span>
                                        </a>
                                    </div>
                                    <div>
                                        <button
                                            aria-label="Close Menu"
                                            title="Close Menu"
                                            className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                                            onClick={() => setIsMenuOpen(false)}
                                        >
                                            <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                                                <path
                                                    fill="currentColor"
                                                    d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                </div>
                                <nav>
                                    <ul className="space-y-4">
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Product
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Our product"
                                                title="Our product"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Features
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Product pricing"
                                                title="Product pricing"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Pricing
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="About us"
                                                title="About us"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                About us
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                aria-label="Sign in"
                                                title="Sign in"
                                                className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                                            >
                                                Sign in
                                            </a>
                                        </li>
                                        <li>
                                            <a
                                                href="/"
                                                className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                                                aria-label="Sign up"
                                                title="Sign up"
                                            >
                                                Sign up
                                            </a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    </div>
    <div>

      {matchingObject ? (
        <div>
          <p className= "hidden">Name: </p>
          <p className= "hidden">{matchingObject.Description}</p>
          <p className= "hidden">{matchingObject.Email}</p>
          <p className= "hidden">{matchingObject.Image}</p>
          <p></p>


          <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-5">
      <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
        <div>
          <p className="inline-block px-3 py-px mb-4 text-sm font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
            CLAIM POINTS
          </p>
        </div>
        <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-red-500 sm:text-4xl md:mx-auto">
          <span className="relative inline-block">
            <svg
              viewBox="0 0 52 24"
              fill="currentColor"
              className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
            >
              <defs>
                <pattern
                  id="679d5905-e08c-4b91-a66c-84aefbb9d2f5"
                  x="0"
                  y="0"
                  width=".135"
                  height=".30"
                >
                  <circle cx="1" cy="1" r=".7" />
                </pattern>
              </defs>
              <rect
                fill="url(#679d5905-e08c-4b91-a66c-84aefbb9d2f5)"
                width="52"
                height="24"
              />
            </svg>
            {/* <span className="relative">The</span> */}
          </span>{' '}
          <p className='text-red-500'>CONGRATS!! , You got points at {matchingObject.Name}</p>
          
        </h2>
        <h2></h2>
        <p className="text-base text-gray-700 md:text-lg">
          Click the image below to claim points
        </p>
      </div>
      <div className="mx-auto lg:max-w-2xl">
        <div className="relative w-full transition-shadow duration-300 hover:shadow-xl">
          <img
            className="object-cover w-full h-56 rounded shadow-lg sm:h-64 md:h-80 lg:h-96"
            src="https://images.pexels.com/photos/927022/pexels-photo-927022.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=3&amp;h=750&amp;w=1260"
            alt=""
          />
          <a
            href="/"
            aria-label="Play Video"
            className="absolute inset-0 flex items-center justify-center w-full h-full transition-colors duration-300 bg-gray-900 bg-opacity-50 group hover:bg-opacity-25"
          >
            <div className="flex items-center justify-center w-16 h-16 transition duration-300 transform bg-gray-100 rounded-full shadow-2xl group-hover:scale-110">
              <svg
                className="w-10 text-gray-900"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M16.53,11.152l-8-5C8.221,5.958,7.833,5.949,7.515,6.125C7.197,6.302,7,6.636,7,7v10 c0,0.364,0.197,0.698,0.515,0.875C7.667,17.958,7.833,18,8,18c0.184,0,0.368-0.051,0.53-0.152l8-5C16.822,12.665,17,12.345,17,12 S16.822,11.335,16.53,11.152z" />
              </svg>
            </div>
          </a>
        </div>
      </div>
    </div>



        </div>
      ) : (
        <p></p>
        
      )}
    </div>
    
    </>
    
  );
}

export async function getStaticPaths() {
    return {
      paths: [
        // String variant:
        '/65abd31964dfa47b33b617de',
      ],
      fallback: true,
    }
  }

export async function getStaticProps() {
    const client = await connectToDatabase();
    const db = client.db('test');
    const collection = db.collection('destinations');

    const data = await collection.find({}).toArray();

    return {
        props: { data: JSON.parse(JSON.stringify(data)) },
    };
}
