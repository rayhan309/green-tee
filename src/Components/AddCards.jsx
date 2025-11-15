import { useContext, useEffect, useState } from 'react';
import { X } from 'lucide-react';
import { CardsData } from '../App';
import { toast } from 'react-toastify';
 
const AddCards = () => {

    const { addData, setAddData } = useContext(CardsData)
    // console.log(addData)

    const [totale, setTotale] = useState(0)

    // Calculate total price
    useEffect(() => {
        const totalePrice = addData.reduce((sum, item) => sum + item.price, 0);
         setTotale(totalePrice)
    }, [addData]);

    const removeHanler = (card) => {
        toast('Remove Card!')
        const cards = addData.filter(data => data.id != card.id)
        setAddData([...cards])
        // console.log(card)
    }

    return (
        <>
            <h3 className='text-2xl font-semibold text-center mb-10'>Yor Carts</h3>
            {
                addData.length === 0 ?
                    <h3 className='text-2xl font-semibold text-center mb-10 text-gray-500'>No Add Carts</h3> :
                    <div className='min-h-10 grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                        {
                            addData.map(data => {
                                return <div key={data.id} className='flex items-center gap-6 relative bg-white shadow-xl p-2 rounded-lg'>
                                    <img className='h-[100px] w-[100px] object-cover rounded-lg' src={data.image} alt="" />
                                    <div>
                                        <p className='text-2xl font-semibold'>name: {data.name}</p>
                                        <p className='mt-2 text-xl font-semibold'>price: ${data.price}</p>
                                    </div>
                                    <X onClick={ () => removeHanler(data)} className='absolute right-10 cursor-pointer' />
                                </div>
                            }
                            )
                        }
                    </div>
            }
            <div className='mt-10 w-[350px] mx-auto pt-5 px-10 pb-8 bg-white rounded-xl shadow-xl'>
                <h2 className='text-2xl font-semibold text-center'>All Prices!</h2>
                <div className='flex justify-between items-center mt-5'>
                    <h3 className='text-xl font-medium'>Totale:</h3>
                    <p className='text-xl font-medium'>${totale}</p>
                </div>
            </div>

        </>
    );
};

export default AddCards;