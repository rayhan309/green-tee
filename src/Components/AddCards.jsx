import { useContext } from 'react';
import { CardsData } from '../App';
import { X } from 'lucide-react';

const AddCards = () => {

    const { addData } = useContext(CardsData)
    // console.log(addData)

    return (
        <>
            <h3 className='text-2xl font-semibold text-center mb-10'>Yor Cards</h3>
            {
                addData.length == 0 ? 
                <h3 className='text-2xl font-semibold text-center mb-10 text-gray-500'>No Add Cards</h3> : 
                <div className='min-h-10 grid grid-cols-2 gap-5'>
                {
                    addData.map(data =>
                        <div className='flex items-center gap-10 relative bg-white shadow-xl p-2 rounded-lg'>
                            <img className='h-[100px] w-[100px] object-cover rounded-lg' src={data.image} alt="" />
                            <div>
                                <p className='text-2xl font-semibold'>name: {data.name}</p>
                                <p className='mt-2 text-xl font-semibold'>price: ${data.price}</p>
                            </div>
                            <X className='absolute right-15 cursor-pointer' />
                        </div>
                    )
                }
            </div>
            }
            
            </>
            );
};

            export default AddCards;