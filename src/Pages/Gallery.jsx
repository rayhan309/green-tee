import { useEffect, useState } from "react"; 

const Gallery = () => {

    const [datas, setDatas] = useState([])

    useEffect(() => {
        fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json().then(data => setDatas([...data.plants])))
    }, [])

    // console.log(datas)
    return (
        <>
        <h2 className="text-3xl font-semibold text-center mb-5">Your Gallery!</h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-3">
           {
            datas.map(cardData => <div key={cardData.id} className="shadow-2xl bg-white p-2 rounded-lg"><img className="h-[300px] w-full object-cover rounded-lg cursor-pointer" src={cardData.image} alt="photo" /></div>)
           } 
           </div>
        </>
    );
};

export default Gallery;