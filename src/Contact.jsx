import React, { useState } from 'react';

const Contact = () => {
    const [data, setData] = useState({
        fullname:"",
        mobile:"",
        message:"",
    });

    const inputEvent = (e) =>{
        const {name,value} = e.target;
        
        setData({...data, [name]:value})
            
    }
    
    console.log(data);

    const submit =(e)=>{
        e.preventDefault();
    }

    return (
        <>
            <div className='col-6 mx-auto mt-5'>
                <form >
                    <div className='input-group mb-3'>
                        <input className='form-control'name="fullname" value={data.fullname} onChange={inputEvent} placeholder='Enter Your Fullname' type="text"/>
                    </div>
                    <div className='input-group mb-3'>
                    <input className='form-control'name="mobile" value={data.mobile} onChange={inputEvent} placeholder='Enter Your Mobile Number' type="Number"/>
                    </div><div className='input-group mb-3'>
                    <textarea className='form-control'name="message" value={data.message} onChange={inputEvent} placeholder='Enter Your Message' type="text"/>
                    </div>
                    <button onClick={submit}>Submit</button>
                </form>
            </div>
        </>
    )
}

export default Contact;