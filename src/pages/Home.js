import React, { useContext } from 'react';
import { ContextData } from '../context/Context';
import { FiSearch } from "react-icons/fi";

function Home(props) {
    // catch the data from context
    const { sidebar, allInfo, search, searchFunction } = useContext(ContextData);

    return (
        <div className='home'>
            {/* sidebar */}
            <aside>
                {
                    sidebar.map((a, b) => (
                        <div className="sidebar_card" key={b}>
                            <figure><img src={a.img} alt={a.title} /></figure>
                            <p className="sidebar_title">{a.title}</p>
                        </div>
                    ))
                }
            </aside>

            {/* main */}
            <main>
                {/* search */}
                <div className="search">
                    <div className="search_content">
                        <label htmlFor='search'>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M17.3556 17.3658C18.8279 15.8961 19.7388 13.8641 19.7388 11.6194C19.7388 7.13518 16.1036 3.5 11.6194 3.5C7.13518 3.5 3.5 7.13518 3.5 11.6194C3.5 16.1036 7.13518 19.7388 11.6194 19.7388C13.8589 19.7388 15.8866 18.8321 17.3556 17.3658ZM17.3556 17.3658L20.5 20.5" stroke="#19191C" strokeWidth="1.5" strokeLinecap="round" />
                            </svg>
                        </label>
                        <input type="text" onInput={(e) => searchFunction(e)} name="search" id="search" placeholder='Qidirish' />
                    </div>
                </div>

                {/* all information rendering */}
                <div className="wrapper">
                    <div className="wrapper_content">
                        {
                            allInfo.filter((item) => {
                                if (item.title.toLowerCase().includes(search.toLowerCase())) {
                                    return item
                                }
                            }).map((a, b) => (
                                <div className="wrapper_card" key={b}>
                                    <figure><img src={a.img} alt={a.title} /></figure>
                                    <h3 className="wrapper_card_title">{a.title}</h3>
                                    <h3 className="wrapper_card_price">$ {a.price}</h3>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </main>
        </div>
    );
}

export default Home;