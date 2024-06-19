import React from 'react'
import './body.css'
import grad from '../Assets/grad.jpg';
import img from '../Assets/IMG20220107123834.jpg'
import img2 from '../Assets/img2.jpg'
import ruins from '../Assets/ruins.jpg'

function About() {
    const italicfont={
        fontStyle: 'italic'
    };
    const quoteStyle={
        margin: '5rem  0'
    };
  return (
    <>
    <div  id="about">

            <h1 >About Me</h1>
            <div class="vert ">
                <div class="img">
                <img src={grad} alt="img2" />
                </div>
                <div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio.</p>
                </div>
            </div>
            <br/><br/>
            <div style={quoteStyle}><p >It’s not a bug; it’s an undocumented feature. <span style={italicfont}>― Anonymous</span></p></div>

            <div class="content ">
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio.</p>
                </div>
                <img src={img}alt="img1"/>
            </div>


            <div class="content ">
                <img src={img2} alt="img2" />
                <div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio vel aliquid ducimus laboriosam quo, sint saepe corporis nemo. Beatae autem aliquam iure recusandae, adipisci ipsa maiores eligendi quaerat assumenda ab. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi in unde maiores praesentium fugit enim magnam eius earum similique tempora perferendis, reprehenderit dolorem ea nihil sed recusandae quod sunt molestiae! Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo suscipit aperiam officia a? Blanditiis eum dolor consectetur ad atque sed dolore libero sunt? Quibusdam dolor eligendi aliquid ipsa nisi optio.</p>
                </div>

            </div>


            <br/><br/>

            <div class="vert " >
                <div class="img">
                <h4>Lorem ipsum dolor sit amet consectetur adipisicing elit.</h4>
                </div><br /><br />
                <img src={ruins} alt="img3"/>
            </div>

        
        </div>
        </>
  )
}

export default About
