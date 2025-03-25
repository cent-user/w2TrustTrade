export default async function Vision(){
    return(
        <>
           <section className='w-full relative text-primary5' id="vision">
                <div className='p-[3em] bg-primary1'>
                    <header className="text-center mb-[2em]">
                        <h3 className='font-h1 pb-[1em]'>Our Vision</h3>
                    </header>
                    
                    {/* Flex container for responsive design */}
                    <div className='flex flex-wrap justify-center gap-[1.5em] text-primary1'>
                        {[
                            { icon: "🌍", title: "Sustainable Future", text: "Creating furniture with eco-friendly materials and responsible sourcing." },
                            { icon: "🎨", title: "Timeless Craftsmanship", text: "Blending tradition with innovation for designs that last a lifetime." },
                            { icon: "🏡", title: "Personalized Living", text: "Bringing your unique style to life with fully customizable furniture." },
                            { icon: "🤝", title: "Global Reach, Personal Touch", text: "Connecting with clients worldwide while maintaining a handcrafted, personal approach." },
                            { icon: "🚀", title: "Pushing Boundaries", text: "Continuously evolving to redefine custom furniture with new designs and techniques." }
                        ].map((item, index) => (
                            <div key={index} className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md 
                                min-w-[250px] sm:min-w-[300px] w-full sm:w-[48%] md:w-[30%] lg:w-[18%]">
                                <header className='font-bold text-lg flex items-center justify-center space-x-2'>
                                    <span>{item.icon}</span>
                                    <span>{item.title}</span>
                                </header>
                                <p className='text-sm mt-2'>{item.text}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>



        </>
    );
}