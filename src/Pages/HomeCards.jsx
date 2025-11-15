import { use, useContext } from "react";
import { toast } from "react-toastify";
import { CardsData } from "../App";

const HomeCards = ({ dataPromiss }) => {

    const {addData, setAddData} = useContext(CardsData)

    const allPlants = use(dataPromiss)

    const addHandler = (card) => {
        setAddData([...addData, card])
        // console.log(addData)
        toast(`Add To Sucsesfully!`)
    }

    return (
        <>
            {
                allPlants.plants.map(plant =>
                    <div key={plant.id} className="p-3 shadow-xl rounded-xl hover:bg-gray-200 bg-white">
                        <img className="h-68 w-full object-cover rounded-lg" src={plant.image} alt="froites" />
                        <h2 className="font-semibold mt-1.5">{plant.name}</h2>
                        <p className="text-[14px] font-normal text-gray-500 mt-2.5">{plant.description}</p>
                        <div className="flex justify-between items-center mt-2.5">
                            <p className="py-1 px-3 flex items-center gap-2 rounded-2xl text-[#15803D] bg-[#DCFCE7]">{plant.category}</p>
                            <p className="text-lg mr-3.5 font-semibold ">${plant.price}</p>
                        </div>
                        <button onClick={() => addHandler(plant)} className="text-white cursor-pointer mt-5 mb-2 bg-[#15803D] py-[8px] rounded-3xl px-3 w-full font-medium">Add to Card</button>
                    </div>
                )
            }
        </>
    );
};

export default HomeCards;