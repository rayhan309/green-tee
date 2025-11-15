import img from '../assets/aboutImg.png'

const About = () => {
    return (
        <div className='max-w-[1440px] mx-auto mt-16 p-5 md:p-0'>
            <h2 className='text-3xl font-semibold text-center mb-0 md:mb-5'>About the Campaign</h2>
            <div className='flex flex-col lg:flex-row items-center gap-4 md:gap-20'>
                <img className='rounded-lg shadow-xl' src={img} alt="img mama" />
                <div className='max-w-[550px]'>
                    <p className='font-medium '>Green Earth is a global tree plantation initiative dedicated to fighting climate change. Since our start, we’ve planted over 500,000 trees worldwide. By joining our campaign, you help restore forests, create habitats for wildlife, and combat global warming.</p>
                    <p className='font-medium mt-4 mb-2'>. Restoration of natural habitats</p>
                    <p className='font-medium mb-2'>. Improvement of air quality</p>
                    <p className='font-medium'>. Support for local communities</p>
            </div>
        </div>
        </div >
    );
};

export default About;