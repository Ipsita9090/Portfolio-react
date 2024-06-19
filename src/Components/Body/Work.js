import React from 'react';
import Forestsvg from '../Assets/forest-svg.png';
import meme from '../Assets/meme.png';
import farmer from '../Assets/farmer.png'
import tourism from '../Assets/tourism.png'
import android from '../Assets/android.png'
import memesvg from '../Assets/meme-svg.png'
import androidsvg from '../Assets/android-svg.png'
import toursvg from '../Assets/tour-svg.png'

function Work() {
    const farmerStyle = { width: '9rem' };
    return (
        <>
            <div id="work">
                <h1 >NOTABLE</h1>

                <div class="content ">
                    <div class="svg">
                        <img src={Forestsvg} alt="img1" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio. Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt sit dignissimos blanditiis nihil, aspernatur corrupti nisi laudantium inventore, fugit beatae sequi fugiat iure necessitatibus! Necessitatibus cupiditate eveniet dolor atque? Laboriosam.</p>
                    </div>
                </div>
                <h1 >LATEST WORKS</h1>

                <div class="boxcontain" >
                <div class="box">
                    <div class="boximage">
                        <img src={meme} alt="" />
                    </div>
                    <p>Meme Classification</p>
                </div>
                <div class="box">
                    <div class="boximage">
                        <img src={farmer} alt="" style={farmerStyle} />
                    </div>
                    <p>IOT based Precision Farming</p>

                </div>
                <div class="box">
                    <div class="boximage">
                        <img src={tourism} alt="" />
                    </div>
                    <p>Tourism recommendation Sytem</p>
                </div>
                <div class="box">
                    <div class="boximage">
                        <img src={android} alt="" />
                    </div>
                    <p>Android Scientific Calculator</p>

                </div>
                </div>




                <div class="content ">
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio.</p>
                    </div>
                    <div class="svg">
                        <img src={memesvg} alt="img1" />
                    </div>
                </div>
                <div class="content ">
                    <div class="svg">
                        <img src={androidsvg} alt="img1" />
                    </div>
                    <div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio.</p>
                    </div>

                </div>
                <div class="content ">

                    <div>
                        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio.</p>
                    </div>
                    <div class="svg" >
                        <img src={toursvg} alt="img1" />
                    </div>

                </div>

            </div>

        </>
    )
}

export default Work
