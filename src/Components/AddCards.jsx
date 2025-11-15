import { useContext } from 'react';
import { CardsData } from '../App';

const AddCards = () => {

    const { addData } = useContext(CardsData)
    // console.log(addData)

    return (
        <div className='border-2 border-gray-500 min-h-10'>
            {
                addData.map(data => console.log(data))
            }
        </div>
    );
};

export default AddCards;