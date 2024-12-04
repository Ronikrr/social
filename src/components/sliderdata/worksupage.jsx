import React from 'react'
import { useParams } from 'react-router-dom'
const boxdata = [
    {
        id: 1,
        text: "kitkat",
        sub_text: "kitkat",
        src: "https://socialpanga.com/wp-content/uploads/2024/03/KK-LOGO.png",
        case: "Case Studies",
        dis_1: "In our daily, busy lives, we often forget to just ‘Catch a Break’! Research shows that productivity improves significantly when you pause for a moment. Influencers, just like us, experience stressful moments in their lives. They needed a break too, so we gave them one! We invited over 100 influencers to ‘Catch a Break’ with KitKat, where they enjoyed a KitKat and took a break from their hectic schedules. The objective here is simple – all you need is a KitKat to take some time off from your daily routine and catch a break!",
        dis_2: "",
    }, {
        id: 2,
        text: "manipal hispital",
        sub_text: "manipal-doctors-day",
        src: "https://socialpanga.com/wp-content/uploads/2022/01/Manipal-Hospitals.png",
        case: "Doctors Day - Case Studies",
        dis_1: "In the year 2017, the Indian Medical Association reported that 80% of doctors in the country are stressed out in their profession, and one of the important causes of stress is violence against doctors. 75% of doctors in India have faced violence at some point of time in their life. Violence against doctors isn’t a new thing specially since the April 2020. However not much has been spoken about it publicly. Although people are standing against this violence, no brand so far has taken a stand. With the objective to raise awareness and pledge to put a stop to the rising ‘Violence against Doctors’, we launched an integrated 360 degree campaign spanning print and digital mediums.",
        dis_2: "",
    }, {
        id: 3,
        text: "lifestyle",
        sub_text: 'life-style-performance-marketing',
        src: "https://socialpanga.com/wp-content/uploads/2021/04/LifeStyle.png",
        case: "Sleigh With Lifestyle - Case Studies",
        dis_1: "Christmas is known for shopping and celebration. This was leveraged by Lifestyle Stores to conduct an interesting activity which would aim at engaging their audience by dressing up an elf mannequin with the help of gifs created by Lifestyle",
        dis_2: "",
    }, {
        id: 4,
        text: "bengaluru airport",
        sub_text: "bengaluru-airport",
        src: "https://socialpanga.com/wp-content/uploads/2021/04/Kempegowda_International_Airport_Bengaluru_Logo.svg-1-1.png",
        case: "Adopt a Plant - Case Studies",
        dis_1: "The reconstruction of the road leading to the BLR Airport was going to cause a lot of plants to lose their home. BLR Airport took to themselves to ensure these plants found a new home and they give back to the community. That’s how the #AdoptAPlant initiative started. The campaign helped in relocating over 8000 plants into homes of people willing to take care of them thus conveying the message of sustainability which the BLR Airport stands by. Social Panga took it upon themselves to utilise a 360 degree approach to reach out to as large an audience as possible. Watch the video to know more.",
        dis_2: "",
    }, {
        id: 5,
        text: "mamaearth",
        sub_text: "mama-earth",
        src: "https://socialpanga.com/wp-content/uploads/2021/07/MamaEarth.png",
        case: "Mama Earth - Production",
        dis_1: "Upgrading Mamaearth’s positioning on social media, Social Panga took the brand’s visual presentation of products to the next level by frequently introducing and experimenting with shoot images. Keeping the brand’s tonality and color preferences in mind, we started off by using less cultured, authentic, eye catchy, and vibrant photoshoot images on our feed, and revived the existing visual approach through stylized shoots, demonstrating textures and introducing themes for the new launch. The visual element optimization strategy helped the brand entice potential users thereby improving engagement.  ",
        dis_2: "",
    }, {
        id: 6,
        text: "tata health",
        sub_text: "tata_health",
        src: "https://socialpanga.com/wp-content/uploads/2021/06/Brand-logos_GT_Tata-health.png",
        case: "SEO Rank #1 - Performance Marketing",
        dis_1: "In order to be seen and generate traffic to the website at a time when ‘online doctor consultation’ was one of the most sought after search terms, we had to tackle the clutter. So for Tata Health, Social Panga unlocked a treatment plan which was comprehensively designed to nourish Tata Health back to digital fitness! Within a span of 4 months, keywords such as ‘online doctor’ and ‘Online doctor consultation’ were appearing on the top of the search results for Tata Health.",
        dis_2: "",
    }, {
        id: 7,
        sub_text: "pepperfry-wow-womania",
        text: "curefit",
        src: "https://socialpanga.com/wp-content/uploads/2021/06/Asset-43.png",
        case: "Pepperfry Wow Womaniya - Case Studies",
        dis_1: "Social Panga and Pepperfry.com celebrates the Wow Womaniya of the world! : Keep your eyes glued to the screen and don’t feel shy to hit repeat! We bring you the Wow Womaniya anthem celebrating the self-made woman featuring the rap queen Dee MC . You don’t wanna miss this! ",
        dis_2: "",
    }, {
        id: 8,
        sub_text: "curefit-interactive-experience",
        src: "https://socialpanga.com/wp-content/uploads/2021/06/Cure-fit.png",
        case: "Interactive Experience - Case Studies",
        dis_1: "Social Panga and Curefit tackles festive binging – Festive binging is unavoidable, as a matter of fact why avoid once in a year binge on your favorite delicacies? The fact that there is a spike in fitness search after the season gave us room to create this Bandersnatch like interactive experiences that let’s you choose your dish and also makes you burn it.",
        dis_2: "",
    },
]
const Worksupage = () => {
    const { slidetext } = useParams();
    const selecteddata = boxdata.find((item) => item.sub_text === slidetext)
    if (!selecteddata) {
        return (<div className="pt-[60px] md:py-[6rem] data_cla">
            <div className="container mx-auto py-[5rem]">
                <h1 className="text-2xl font-bold text-center">Data Not Found</h1>
            </div>
        </div>)
    }
    console.log(slidetext)
    return (
        <div className='pt-[60px] md:py-[6rem] data_cla' >
            <div className="container mx-auto py-[5rem] ">
                <div className="w-full mx-auto md:w-[1140px]">
                    <div className="flex flex-wrap w-full">
                        <div className="w-full md:w-4/12 px-[15px]">
                            <img src={selecteddata.src} alt={selecteddata.text} />
                        </div>
                        <div className=" text-[18px] w-full md:w-8/12 px-[15px]">
                            <h1 className=' uppercase font-bold pb-[1rem] leading-[1.2] mb-[0.5rem]' >{selecteddata.case}</h1>
                            <p className="mb-[1rem]">
                                {selecteddata.dis_1}
                            </p>

                            {selecteddata.dis_2 && <p className="mb-[1rem]">{selecteddata.dis_2}</p>}

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Worksupage