import React from 'react'
import SandeshNews from '../newsSandesh.png';
import TimesOfIndia from '../newsToi.png';
import TheHindu from '../newsHindu.jpg';
// import HindistanTimes from '../newsHt.png';
import TheChronicle from '../newsChronicle.png';

export const NewsRack = () => {
  return (
    <>
        <div className='newsRackRow'>
            <div className="newItem">
                <img src={SandeshNews} alt="" srcset="" />
            </div>
            <div className="newItem">
                <img src={TimesOfIndia} alt="" srcset="" />
            </div>
            <div className="newItem">
                <img src={TheHindu} alt="" srcset="" />
            </div>
            <div className="newItem">
                <img src={TheChronicle} alt="" srcset="" />
            </div>
        </div>
    </>
  )
}
