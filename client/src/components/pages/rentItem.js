import React from 'react';
import '../../styles/rent.css';

const RentItem = () => {
    return (
        <div className='rent-page'>
            <div className='rent-top'>
                <h3>umts</h3>
                
            </div>
            <h1>Rent Item</h1>
            <div className='rent-categories'>
                    <a href='/tv'>TV & Home Theater</a>
                    <a href='/computer'>Desktops & Laptops</a>
                    <a href='/camera'>Cameras & Videocameras</a>
                    <a href='/appliances'>Appliances</a>
                    <a href='/audio'>Audio</a>
                    <a href='/gadgets'>Gadgets</a>
            </div>
            <div className='rent-images'>
                <a href='/tv'><img src={process.env.PUBLIC_URL + "/img/tv-icon.png"} alt='' /></a>
                <a href='/computer'><img src={process.env.PUBLIC_URL + "/img/computer-icon.png"} alt='' /></a>
                <a href='/camera'><img src={process.env.PUBLIC_URL + "/img/camera-icon.png"} alt='' /></a>
                <a href='/appliances'><img src={process.env.PUBLIC_URL + "/img/fridge-icon.png"} alt='' /></a>
                <a href='/audio'><img src={process.env.PUBLIC_URL + "/img/music-note-icon.png"} alt='' /></a>
                <a href='/gadgets'><img src={process.env.PUBLIC_URL + "/img/gadgets-icon.png"} alt='' /></a>
            </div>
            <div className='rent-items'>

            </div>
            <div className='rent-footer'>

            </div>
        </div>
    )
}
export default RentItem