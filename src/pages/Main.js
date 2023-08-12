import React, { useContext } from 'react';
import { ContextData } from '../context/Context';
import { NavLink } from 'react-router-dom';

function Main() {
    const { admin } = useContext(ContextData);

    return (
        <div className='main_home'>
            <div className="admin_list">
                {
                    admin.map((a, b) => (
                        <div className="admin_card" key={b}>
                            <figure><img src={a.img} alt={a.name} /></figure>
                            <p>{a.name}</p>
                        </div>
                    ))
                }
            </div>
            <div className="main_btns">
                <div className="top">
                    <button>Clock in</button>
                    <button>Clock out</button>
                </div>
                <NavLink to={'/login'}>Login</NavLink>
            </div>
        </div>
    );
}

export default Main;