import React from 'react';

function Tables() {
    return (
        <div className='table_page'>
            <div className="table_page_nav">
                <div className="table_nav_left">
                    <div className="table_nav_caution">
                        <div className="caution_element">
                            <span><i></i></span>
                            <h3>Bo'sh</h3>
                        </div>
                        <div className="caution_element">
                            <span><i></i></span>
                            <h3>Band</h3>
                        </div>
                        <div className="caution_element">
                            <span><i></i></span>
                            <h3>Buyurtma</h3>
                        </div>
                    </div>

                    <div className="table_nav_filter">
                        <button>Barcha stollar</button>
                        <button>Bo'sh</button>
                        <button>Band</button>
                        <button>Buyurtma</button>
                    </div>
                </div>
                <div className="table_nav_right">
                    <label htmlFor='table_nav_search'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.3556 17.3658C18.8279 15.8961 19.7388 13.8641 19.7388 11.6194C19.7388 7.13518 16.1036 3.5 11.6194 3.5C7.13518 3.5 3.5 7.13518 3.5 11.6194C3.5 16.1036 7.13518 19.7388 11.6194 19.7388C13.8589 19.7388 15.8866 18.8321 17.3556 17.3658ZM17.3556 17.3658L20.5 20.5" stroke="#19191C" stroke-width="1.5" stroke-linecap="round" />
                        </svg>
                    </label>
                    <input type="text" name="table_nav_search" id="table_nav_search" placeholder='Qidirish' />
                </div>
            </div>
        </div>
    );
}

export default Tables;