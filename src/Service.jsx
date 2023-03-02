import React from 'react';
import Card from './Card';
import Cdata from './Cdata';

const Service = () => {
    return (
        <>
        <div className='col-10 mx-auto'>
            <div className='row gy-4'>
                {Cdata.map((value,index)=>{
                    return <Card key={index} name={value.title} imgsrc={value.img}/>
                })}
            </div>
        </div>
            
        </>
    )
}

export default Service;