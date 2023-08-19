import React, { useContext } from 'react';
import { ContextData } from '../context/Context';
// import { FiSearch } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";

function Home() {
    // catch the data from context
    const { sidebar, allInfo, search, searchFunction, orderModal, setOrderModal, ordersModal, setOrdersModal } = useContext(ContextData);

    return (
        <div className='home'>
            {/* Order Modal */}
            {
                orderModal ?
                    <div className="order_modal" onClick={() => setOrderModal(false)}>
                        <div className="order_card" onClick={(e) => e.stopPropagation()}>
                            <div className="order_card_top">
                                <h3>Buyurtma qo'shish</h3>
                                <svg onClick={() => setOrderModal(false)} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M5 5L19 19M19 5L5 19" stroke="#282930" strokeWidth="1.5" strokeLinecap="round" />
                                </svg>
                            </div>

                            <div className="selected_food">
                                <div className="food_about">
                                    <figure><img src="../../img/Image.png" alt="" /></figure>
                                    <div className="food_title">
                                        <h4>Steak sapi bakar</h4>
                                        <p>Price</p>
                                        <h3>$ 25.12</h3>
                                    </div>
                                </div>
                                <div className="food_btns">
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16675 10H15.8334" stroke="#9C9C9C" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                    <p>1</p>
                                    <button>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                            <path d="M4.16675 9.99996H15.8334M10.0001 4.16663V15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                        </svg>
                                    </button>
                                </div>
                            </div>

                            <div className="order_list">
                                <h3>Ro'yxat</h3>
                                <div className="order_list_wrapper">
                                    <div className="ordered_food_list">
                                        <div className="list_left">
                                            <figure><img src="../../img/Image1.png" alt="" /></figure>
                                            <div className="list_left_box">
                                                <h4>Rice</h4>
                                                <p>$ 1.40</p>
                                            </div>
                                        </div>
                                        <div className="list_right food_btns">
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16675 10H15.8334" stroke="#9C9C9C" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                            <p>1</p>
                                            <button>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                                    <path d="M4.16675 9.99996H15.8334M10.0001 4.16663V15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="leave_commit">
                                <h4>Izoh yozish</h4>
                                <textarea name="" id="" cols="30" rows="5" placeholder='Izohni shu yerga yozing'></textarea>
                            </div>

                            <div className="order_type">
                                <h3>Buyurtma turi</h3>
                                <button>Shu yerda</button>
                                <button>Yetkazib berish</button>
                                <button>Olib ketish</button>
                            </div>

                            <div className="order_card_footer">
                                <div className="footer_left">
                                    <h4>Jami</h4>
                                    <h3>$ 26.52</h3>
                                </div>
                                <button>Qo'shish</button>
                            </div>
                        </div>
                    </div> : ''
            }

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

            {/* Orders */}
            <div className="orders" style={ordersModal ? { display: 'flex' } : { display: 'none' }}>
                <div className="orders_top">
                    <button>Buy</button>
                    <button>Reservation</button>
                </div>

                <div className="about_costumers">
                    <h3>Costumers Information</h3>
                    <form>
                        <div className="costumer_input">
                            <input type="text" name="" id="" placeholder='Costumer name' />
                        </div>
                        <div className="costumer_input" style={{ cursor: 'pointer' }}>
                            <input type="text" name="" id="" placeholder='Select table' disabled style={{ cursor: 'pointer' }} />
                            <span><BsChevronRight /></span>
                        </div>
                        <button>Add note</button>
                    </form>
                </div>

                <div className="order_details order_list">
                    <h3>Orders details</h3>
                    <div className="details_wrapper order_list_wrapper">
                        <div className="ordered_food_list">
                            <div className="list_left">
                                <figure><img src="../../img/Image1.png" alt="" /></figure>
                                <div className="list_left_box">
                                    <h4>Rice</h4>
                                    <p>$ 1.40</p>
                                </div>
                            </div>
                            <div className="list_right food_btns">
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16675 10H15.8334" stroke="#9C9C9C" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                                <p>1</p>
                                <button>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                                        <path d="M4.16675 9.99996H15.8334M10.0001 4.16663V15.8333" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="orders_price">
                    <ul>
                        <li>
                            <h4>Sub Total</h4>
                            <h5>$ 62.13</h5>
                        </li>
                        <li>
                            <h4>Tax (10%)</h4>
                            <h5>$ 1.87</h5>
                        </li>
                    </ul>

                    <ul>
                        <li>
                            <h4>Total</h4>
                            <h5>$ 64.00</h5>
                        </li>
                    </ul>

                    <button className='pay_button'>Pay Now</button>
                </div>
            </div>

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
                                <div className="wrapper_card" key={b} onClick={() => setOrderModal(true)}>
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