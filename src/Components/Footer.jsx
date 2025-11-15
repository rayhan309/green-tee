
const Footer = () => {

    const submitHandler = (e) => {
        e.preventdefault()
    }

    return (
        <div className="bg-[#15803D] pt-28 pb-20 mt-10">
            <form onSubmit={submitHandler} className="bg-[#044210] shadow-2xl max-w-[550px] mx-auto px-5 py-3 rounded-xl">
            <h2 className=" text-xl md:text-3xl font-semibold text-white text-center mb-5">Plant a Tree Today</h2>
                <input className="w-full rounded-4xl mb-3 bg-white h-[36px]" type="text" name="name" />
                <br />
                <input className="w-full rounded-4xl mb-3 bg-white h-[36px]" type="email" name="email" />
                <br />
                <input className="w-full rounded-4xl mb-3 bg-white h-[36px]" type="text" name="text" />
                <br />
                <input className="w-full cursor-pointer rounded-4xl mb-3 bg-[#FACC15] text-[#15803D] font-medium h-10 mt-3" type="submit" value="Donate Now" />
            </form>
            {/* <div className="border-t-2 border-[#521580]">
        <p className="text-gray-800 font-medium text-center pt-4">© 2025 Green Earth. All Rights Reserved.</p>
            </div> */}
        </div>
    );
};

export default Footer;