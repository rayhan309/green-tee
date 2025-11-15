const Impact = () => {
    return (
        <div className="bg-[#CFF0DC] md:pt-15 pt-10 pb-14 md:pb-20 mt-10">
            <h2 className="text-3xl font-semibold text-center">Our Impact</h2>
            <div className="max-w-[1400px] mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 mt-6">
                <div className="bg-white rounded-xl py-12 md:py-16 shadow-xl hover:bg-[#CFF0DC] mx-3">
                    <h3 className="text-3xl text-[#15803d] font-semibold text-center">500K+</h3>
                    <h3 className="text-center mt-2 font-medium">Trees Planted</h3>
                </div>
                <div className="bg-white rounded-xl py-12 md:py-16 shadow-xl hover:bg-[#CFF0DC] mx-3">
                    <h3 className="text-3xl text-[#15803d] font-semibold text-center">120+</h3>
                    <h3 className="text-center mt-2 font-medium">Communities Involved</h3>
                </div>
                <div className="bg-white rounded-xl py-12 md:py-16 shadow-xl hover:bg-[#CFF0DC] mx-3">
                    <h3 className="text-3xl text-[#15803d] font-semibold text-center">30+</h3>
                    <h3 className="text-center mt-2 font-medium">Countries Reached</h3>
                </div>
            </div>
        </div>
    );
};

export default Impact;