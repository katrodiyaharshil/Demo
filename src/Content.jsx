import React from 'react';

const Content =(props)=>{
    return(
        <>
            <div className='conntaner-fluid mt-5'>
                <div className="col-10 mx-auto">
                    <div className='row' style={{alignItems:"center"}}> 
                        <div className='col-6'>
                            <h2>Grow Your Business With <br/><strong>{props.title}</strong></h2>
                        </div>
                        <div className='col-6'>
                            <img className='slider-img img-fluid' src={props.imgsrc} alt="slider"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Content;