import React from 'react';
import Menu from './Menu';
import HeaderLogo from "./img/logo.png";
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
         <>
            <div className='containerFluid header pt-3'> 
                    <div className="col-10 mx-auto">
                        <div className='row mr-auto'>
                            <div className='col-3'>
                                <NavLink to="/"><img src={HeaderLogo} alt="logoimage"/></NavLink>
                            </div>
                            <div className='col-9 menu-link' style={{textAlign:"right"}}>
                                    <Menu/>
                            </div>
                        </div>
                    </div>
            </div>
         </>
    )
}

export default Header;