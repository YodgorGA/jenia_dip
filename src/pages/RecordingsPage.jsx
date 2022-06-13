import React from 'react';
import Header from '../components/header/header';
import { useState } from 'react';
import Pagination from '../components/pagination/Pagination';
import Dropdown from '../components/dropdown/Dropdown';
import Map from '../components/map/map';
import Calendar from '../components/calendar/Calendar';

const RecordingsPage = () => {
    const [video,setVideo] = useState(null);
    const [currentAdres,setCurrentAdres] = useState(null);
    const handleClick = (evt)=>{
        setVideo(evt.target.innerHTML);
    }
    const prevVideo = () =>{
        if(video === '1')
        {
            setVideo('2');
        }
        else{
            setVideo('1');
        }
    }
    const nextVideo = () =>{
        if(video === '1')
        {
            setVideo('2');
        }
        else{
            setVideo('1');
        }
    }
    const getAdres = (adres) =>{
        setCurrentAdres(adres)
    }
    return (
        <div className='page-wrapper'>
            <Header/>
            <div className="rec-page_body">
                <div className='rec-page-leftside'>
                    <video src={`videos/${video}.mp4`} 
                    className='videoPlayer_rec' 
                    width="940" height="600" 
                    controls="controls"/>

                    <Pagination next={nextVideo} prev={prevVideo} handleclick={handleClick}/>
                </div>
                <div className='rec-page-rightside'>
                    <Dropdown parent='rec' getAdres={getAdres}/>
                    <Map place={currentAdres}/>
                    <Calendar/>
                </div>
            </div>
            
        </div>
    );
};

export default RecordingsPage;