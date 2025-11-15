import React from 'react';
import { useLoaderData } from 'react-router';

const Cards = () => {
    const data = useLoaderData()
    // console.log(data)

    return (
        <>
            <h2 className="text-3xl font-semibold text-center mb-5">Choose Your Trees</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-3'>
                {
                    data.plants.map(plant => <div key={plant.id} className="p-3 shadow-xl rounded-xl hover:bg-gray-200 bg-white">
                        <img className="h-68 w-full object-cover rounded-lg" src={plant.image} alt="froites" />
                        <h2 className="font-semibold mt-1.5">{plant.name}</h2>
                        <p className="text-[14px] font-normal text-gray-500 mt-2.5">{plant.description}</p>
                        <div className="flex justify-between items-center mt-2.5">
                            <p className="py-1 px-3 flex items-center gap-2 rounded-2xl text-[#15803D] bg-[#DCFCE7]">{plant.category}</p>
                            <p className="text-lg mr-3.5 font-semibold ">${plant.price}</p>
                        </div>
                        <button className="text-white mt-5 mb-2 bg-[#15803D] py-[8px] rounded-3xl px-3 w-full font-medium">Add to Card</button>
                    </div>)
                }
            </div>
        </>
    );
};

export default Cards;