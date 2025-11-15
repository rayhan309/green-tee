// import { useLoaderData, useLocation } from 'react-router';

import HomeCards from "./HomeCards";

const dataPromiss = fetch('https://openapi.programming-hero.com/api/plants').then(res => res.json());

const Page = () => {

    // console.log(dataPromiss)
    // const plants = useLoaderData()
    // console.log(plants)
    // const location = useLocation()
    // console.log(location)

    return (
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
            <HomeCards dataPromiss={dataPromiss}></HomeCards>
        </div>
    );
};

export default Page;