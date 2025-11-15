import { use } from "react";
import { NavLink, useNavigate } from "react-router";

const SiteBer = ({ dataPromiss }) => {

    const navigate = useNavigate()

    // const dataPromiss = fetch('https://openapi.programming-hero.com/api/categories').then(res => res.json());
    // console.log(dataPromiss)
    const data = use(dataPromiss)
    // console.log(categories)

    return (
        <div>
            <h2 className="text-xl font-semibold mb-3">Categories</h2>
            <NavLink to='/home'><button className="bg-[#15803D] text-white font-semibold btn py-2 px-3 w-full mb-2">All Tree</button></NavLink>
         {/* <NavLink className="mb-2 btn py-2 px-3 w-full">{category.category_name}</NavLink> */}
            {
                data.categories.map(category =>
                    <button onClick={() => navigate(`/cards/${category.id}`)} key={category.id}  className='btn py-2 mb-2 px-3 w-full font-semibold'>
                        {category.category_name}
                    </button>
                )
            }
        </div>
    );
};

export default SiteBer;