import { use } from "react";
import { NavLink } from "react-router";

const SiteBer = ({ dataPromiss }) => {

    // const navigate = useNavigate()
    // console.log(navigate)

    const data = use(dataPromiss)
    // console.log(categories)

    return (
        <div>
            <h2 className="text-xl font-semibold mb-3">Categories</h2>
            <NavLink 
            to='/home'
            className={({ isActive }) => isActive ? "activ" : "none"}>
            <button className="btns btn font-semibold btn py-2 px-3 w-full mb-2">
                All Tree
            </button>
            </NavLink>
            {
                data.categories.map(category =>
                    <NavLink
                        key={category.id}
                        to={`/cards/${category.id}`}
                        className={({ isActive }) => isActive ? "activ" : "none"}>
                        <button className='btn btns py-2 mb-2 px-3 w-full font-semibold'>
                            {category.category_name}
                        </button>
                    </NavLink>
                    // onClick={() => navigate(`/cards/${category.id}`)}
                )
            }
        </div>
    );
};

export default SiteBer;