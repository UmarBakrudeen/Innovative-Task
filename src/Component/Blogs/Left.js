import React from 'react'


const data = [
    {
        imgUrl: 'https://c4.wallpaperflare.com/wallpaper/694/888/914/keyboards-hands-internet-network-wallpaper-preview.jpg',
        heading: 'E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    },
    {
        imgUrl: 'https://wallpapercave.com/wp/wp9501662.jpg',
        heading: 'Second E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    },
    {
        imgUrl: 'https://salemcollege.org/wp-content/uploads/2020/04/artificial-neural-network.jpg',
        heading: 'Third E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    },
    {
        imgUrl: 'https://www.pandasecurity.com/en/mediacenter/src/uploads/2019/03/hero-1.jpg',
        heading: 'Third E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    }
]

function Left() {
    return (
        <div className="blogs__left__container">
            <div className="bl__content">
                <div className="bl__lists">
                    {
                        data.map((i) => {
                            return (
                                <div className="bl__items">
                                    <img src={i.imgUrl} alt="" />
                                    <div className="heading"> {i.heading} </div>
                                    <div className="para"> {i.para}
                                        <span> Design </span>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Left