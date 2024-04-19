import React, { useState } from 'react'
import Navbar from './Navbar'

const Viewall = () => {
    const [data, changeData] = useState(
        [
            { "Recipietitle": "biriyani", "imglink": "https://healux.in/wp-content/uploads/2020/11/ChickenBiryani.jpg" },
            { "Recipietitle": "pasta", "imglink": "https://www.saltandlavender.com/wp-content/uploads/2020/04/tomato-goat-cheese-pasta-2.jpg" },
            { "Recipietitle": "garlic bread", "imglink": "https://www.ambitiouskitchen.com/wp-content/uploads/2023/02/Garlic-Bread-4.jpg" },
            { "Recipietitle": "grilled rib", "imglink": "https://www.harryanddavid.com/blog/wp-content/uploads/2021/07/how-to-grill-ribs.jpg" },
            { "Recipietitle": "Spaghetti alla carbonara", "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/33/Espaguetis_carbonara.jpg/330px-Espaguetis_carbonara.jpg" },
            { "Recipietitle": "Tiramisu ", "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/58/Tiramisu_-_Raffaele_Diomede.jpg/330px-Tiramisu_-_Raffaele_Diomede.jpg" },
            { "Recipietitle": "Minestrone", "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Minestrone_soup.jpg/330px-Minestrone_soup.jpg" },
            { "Recipietitle": "Bruschetta", "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/2014_Bruschetta_The_Larder_Chiang_Mai.jpg/330px-2014_Bruschetta_The_Larder_Chiang_Mai.jpg" },
            { "Recipietitle": "Crostini", "imglink": "https://upload.wikimedia.org/wikipedia/commons/d/d4/Crostini_by_Charles_Haynes.jpg" },
            { "Recipietitle": " nasi lemak", "imglink": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/55/Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg/378px-Nasi_Lemak_dengan_Chili_Nasi_Lemak_dan_Sotong_Pedas%2C_di_Penang_Summer_Restaurant.jpg" },
            { "Recipietitle": "Key lime pie", "imglink": "https://media.cnn.com/api/v1/images/stellar/prod/150527112722-cnngo-miami-best-eats-joes-keylime-pie.jpg?q=w_1110,c_fill/f_webp" },
            { "Recipietitle": "Tater tots", "imglink": "https://media.cnn.com/api/v1/images/stellar/prod/170206144443-taters.jpg?q=w_1110,c_fill/f_webp" },
            { "Recipietitle": "Cobb salad", "imglink": "https://media.cnn.com/api/v1/images/stellar/prod/170206144051-cobb-salad-2.jpg?q=w_1110,c_fill/f_webp" },
            { "Recipietitle": "Banana split", "imglink": "https://media.cnn.com/api/v1/images/stellar/prod/170203114255-banana-split.jpg?q=w_1110,c_fill/f_webp" },
            { "Recipietitle": "Jambalaya", "imglink": "https://media.cnn.com/api/v1/images/stellar/prod/170203151709-jambalaya.jpg?q=w_1110,c_fill/f_webp" }
        ]
    )


    return (
        <div>
            <Navbar />
            <div className="container">
                <div className="row">
                    <div className="col col-12 col-sm-12 col-md-12 col-lg-12 col-xl-12 col-xxl-12">
                        <div className="row g-3">
                            {data.map(
                                (value, index) => {
                                    return <div className="col col-12 col-sm-4 col-md-4 col-lg-4 col-xl-4 col-xxl-4">
                                        <div class="card">
                                            <img src={value.imglink} height={"250px"} class="card-img-top" alt="..." />
                                            <div class="card-body">
                                                <p class="card-text">{value.Recipietitle}</p>
                                            </div>
                                        </div>
                                    </div>

                                }
                            )}



                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Viewall