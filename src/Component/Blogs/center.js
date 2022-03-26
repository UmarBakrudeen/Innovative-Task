import React from 'react';

const centerData = [
    {
        imgUrl: 'https://wallpaperaccess.com/full/3909258.jpg',
        heading: 'How Apples M1 Chips Make macOS Development Much Less Costly',
        para: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
        tags: '#first #second #third #fourth'
    },
    {
        imgUrl: 'https://c4.wallpaperflare.com/wallpaper/860/281/302/pc-gaming-league-of-legends-rgb-cyberpower-pc-wallpaper-preview.jpg',
        heading: 'accusamus beatae ad facilis cum similique qui sunt',
        para: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla',
        tags: '#first #second #third #fourth'
    },
    {
        imgUrl: 'https://wallpapers.oceanofwallpapers.com/wallpapers/previews/wallpaper-lmlgy2-549389-Preview.webp',
        heading: 'officia porro iure quia iusto qui ipsa ut modi',
        para: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut',
        tags: '#first #second #third #fourth'
    },
    {
        imgUrl: 'https://logo-all.ru/uploads/posts/2018-11/0_javascript_logo.jpg',
        heading: 'culpa odio esse rerum omnis laboriosam voluptate repudiandae',
        para: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodi nesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit',
        tags: '#first #second #third #fourth'
    },
    {
        imgUrl: 'https://images.newscientist.com/wp-content/uploads/2017/02/22180000/ff3ywn-1.jpg',
        heading: 'natus nisi omnis corporis facere molestiae rerum in',
        para: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque',
        tags: '#first #second #third #fourth'
    }
]

function center() {
    return (
        <div className="blogs__center__container">
            <div className="bc__content">
                <div className="bc__lists">
                    {
                        centerData.map((index) => {
                            return (
                                <div className="bc__items">
                                    <div className="details">
                                        <div className="heading">{index.heading}</div>
                                        <div className="para">{index.para}</div>
                                        <div className="bc__footer">
                                            <div className="tags">
                                                <a href=""> #tags </a>
                                                <a href=""> #tags </a>
                                                <a href=""> #tags </a>
                                                <a href=""> #tags </a>
                                                <a href=""> #tags </a>
                                            </div>
                                            <div className="btns">
                                                <button> <i class="fas fa-heart"></i> Like </button>
                                                <button> <i class="fas fa-share"></i> Share </button>
                                                <button> <i class="fas fa-comment"></i> Comment </button>
                                            </div>
                                        </div>
                                    </div>
                                    <figure>
                                        <img src={index.imgUrl} alt="" />
                                    </figure>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default center