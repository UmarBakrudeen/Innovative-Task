import React from 'react'


const data = [
    {
        imgUrl: 'https://www.tecnorad.com/wp-content/uploads/2018/06/edx.jpg',
        heading: 'E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    },
    {
        imgUrl: 'https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',
        heading: 'Second E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    },
    {
        imgUrl: 'https://gamesncomps.com/wp-content/uploads/2020/10/high-gaming-pc-1024x683.jpg',
        heading: 'Third E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    },
    {
        imgUrl: 'https://p4.wallpaperbetter.com/wallpaper/321/684/988/acer-computer-wallpaper-preview.jpg',
        heading: 'Third E-Learning App Design And How To ',
        para: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit modi numquam nobis quod vel, nulla unde nesciunt'
    }
]

function right() {
    return (
        <div className="blogs__right__container">
            <div className="br__content">
                <div className="br__lists">
                    {
                        data.map((i) => {
                            return (
                                <div className="br__items">
                                    <div className="heading"> {i.heading} </div>
                                    <div className="para"> {i.para}
                                        <span> Design </span>
                                        <img src={i.imgUrl} alt="" />
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

export default right