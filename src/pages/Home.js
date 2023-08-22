import React, { useContext } from 'react';
import { ContextData } from '../context/Context';
// import { FiSearch } from "react-icons/fi";
import { BsChevronRight } from "react-icons/bs";
import { GrClose } from "react-icons/gr";

function Home() {
    // catch the data from context
    const { sidebar, allInfo, search, searchFunction, orderModal, setOrderModal, ordersModal, setOrdersModal, payState, setPayState, calc, setCalc, orderConfirm, setOrderConfirm } = useContext(ContextData);

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

                {/* Pay modal window */}
                <div className="payModal" onClick={() => setPayState(false)} style={payState ? { right: '0' } : { right: '-200%' }}>

                    {/* Order confimation */}
                    {
                        orderConfirm ?
                            <div className="order_confirmation" onClick={() => setOrderConfirm(false)}>
                                <div className="order_confirmation_box" onClick={(e) => e.stopPropagation()}>
                                    <div className="order_box_header">
                                        <h1>Order confirmation</h1>
                                        <p>Please confirm the order below to completed payment</p>
                                    </div>

                                    <div className="order_main">
                                        <table>
                                            <thead>
                                                <tr>
                                                    <th>Ovqat</th>
                                                    <th>Soni</th>
                                                    <th>Narxi</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>Steak sapi bakar</td>
                                                    <td>1</td>
                                                    <td>$ 25.12</td>
                                                </tr>
                                                <tr>
                                                    <td>Mie kuah pedas</td>
                                                    <td>1</td>
                                                    <td>$ 11.21</td>
                                                </tr>
                                                <tr>
                                                    <td>Mie kuah pedas</td>
                                                    <td>1</td>
                                                    <td>$ 11.21</td>
                                                </tr>
                                                <tr>
                                                    <td>Ayam kentang</td>
                                                    <td>1</td>
                                                    <td>$ 15.40</td>
                                                </tr>
                                                <tr>
                                                    <td>Mie kuah pedas</td>
                                                    <td>1</td>
                                                    <td>$ 11.21</td>
                                                </tr>
                                                <tr>
                                                    <td>Mie kuah pedas</td>
                                                    <td>1</td>
                                                    <td>$ 11.21</td>
                                                </tr>
                                                <tr>
                                                    <td>Mie kuah pedas</td>
                                                    <td>1</td>
                                                    <td>$ 11.21</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>

                                    <div className="order_about">
                                        <div className="order_about_left">
                                            <h3>Izoh</h3>
                                            <p>Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
                                        </div>
                                        <div className="order_about_right">
                                            <div className="order_about_line">
                                                <h3>Mahsulotlar</h3>
                                                <h4>$ 51.73</h4>
                                            </div>
                                            <div className="order_about_line">
                                                <h3>Xizmat haqi</h3>
                                                <h4>$ 0</h4>
                                            </div>
                                            <div className="order_about_line">
                                                <h2>Jami</h2>
                                                <h1>$ 51.73</h1>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="order_footer">
                                        <div className="order_footer_left">
                                            <h3>To'lov usuli</h3>
                                            <div className="order_footer_logo">
                                                <img src="../../img/MoneyLogo.png" alt="money logo" />
                                                <h4>Naqd</h4>
                                            </div>
                                        </div>
                                        <div className="order_footer_right">
                                            <button onClick={() => setOrderConfirm(false)}>Bekor qilish</button>
                                            <button onClick={() => setOrderConfirm(false)}>Tasdiqlash</button>
                                        </div>
                                    </div>
                                </div>
                            </div> : ''
                    }

                    <div className="payModal_card" onClick={(e) => e.stopPropagation()}>
                        <div className="payModal_top">
                            <div className="payModal_top_left">
                                <h3>Buyurtma to'lovi</h3>
                                <p>Buyurtma #102</p>
                            </div>
                            <span onClick={() => setPayState(false)}><GrClose /></span>
                        </div>

                        <div className="payModal_price">
                            <div className="payModal_price_left">
                                <p>Xizmat haqi</p>
                                <p>Jami</p>
                            </div>
                            <div className="payModal_price_right">
                                <h4>$ 8.12</h4>
                                <h3>$ 64.00</h3>
                            </div>
                        </div>

                        <div className="pay_type">
                            <h4>To'lov turi</h4>
                            <div className="pay_type_btns">
                                <button>Naqd</button>
                                <button>Plastik</button>
                            </div>
                        </div>

                        <div className="payModal_value">
                            <h4>Miqdorni kiriting</h4>
                            <form name="calc">
                                <table className="payModal_calculator">
                                    <thead>
                                        <tr>
                                            <input type="text" value={calc} name='window' className="cal_window" placeholder="150 000 so'm" disabled />
                                        </tr>
                                    </thead>

                                    <tbody>
                                        <tr>
                                            <td>
                                                <input type="button" name='one' onClick={() => setCalc([calc + '1'])} value={1} />
                                            </td>
                                            <td>
                                                <input type="button" name='two' onClick={() => setCalc([calc + '2'])} value={2} />
                                            </td>
                                            <td>
                                                <input type="button" name='three' onClick={() => setCalc([calc + '3'])} value={3} />
                                            </td>
                                            <td>
                                                <input type="button" name='ten' onClick={() => setCalc([calc + '10'])} value={10} />
                                            </td>
                                            <td>
                                                <input type="button" name='four' onClick={() => setCalc([calc + '4'])} value={4} />
                                            </td>
                                            <td>
                                                <input type="button" name='five' onClick={() => setCalc([calc + '5'])} value={5} />
                                            </td>
                                            <td>
                                                <input type="button" name='six' onClick={() => setCalc([calc + '6'])} value={6} />
                                            </td>
                                            <td>
                                                <input type="button" name='twenty' onClick={() => setCalc([calc + '20'])} value={20} />
                                            </td>
                                            <td>
                                                <input type="button" name='seven' onClick={() => setCalc([calc + '7'])} value={7} />
                                            </td>
                                            <td>
                                                <input type="button" name='eight' onClick={() => setCalc([calc + '8'])} value={8} />
                                            </td>
                                            <td>
                                                <input type="button" name='nine' onClick={() => setCalc([calc + '9'])} value={9} />
                                            </td>
                                            <td>
                                                <input type="button" name='delete' onClick={() => setCalc([])} value={'del'} />
                                            </td>
                                            <td>
                                                <input type="button" name='clear' onClick={() => setCalc([''])} value={'C'} />
                                            </td>
                                            <td>
                                                <input type="button" name='zero' onClick={() => setCalc([calc + '0'])} value={0} />
                                            </td>
                                            <td>
                                                <input type="button" name='dot' onClick={() => setCalc([calc + '.'])} value={'.'} />
                                            </td>
                                            <td>
                                                <input type="button" name='add' onClick={() => setCalc(calc)} value={'Add'} />
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </form>
                        </div>

                        <div className="payModal_footer">
                            <button>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M3.11006 8.8658C3.39124 8.95302 3.69014 9 4 9C5.65685 9 7 7.65685 7 6C7 5.7078 6.95823 5.42536 6.88032 5.15832M3.11006 8.8658C3.15696 8.25584 3.21954 7.62264 3.29912 6.95365C3.40769 6.04091 4.34486 5.32182 5.51848 5.24315C5.98536 5.21185 6.43843 5.18357 6.88032 5.15832M3.11006 8.8658C2.94158 11.057 2.97548 12.9483 3.15084 15.1219M6.88032 5.15832C10.5606 4.94797 13.4659 4.94716 17.1203 5.1563M3.15084 15.1219C3.19957 15.7259 3.25923 16.3517 3.3285 17.0118C3.42612 17.942 4.37088 18.6849 5.56588 18.7642C6.01541 18.794 6.45241 18.821 6.8793 18.8452M3.15084 15.1219C3.42008 15.0426 3.70507 15 4 15C5.65685 15 7 16.3431 7 18C7 18.2935 6.95786 18.5771 6.8793 18.8452M6.8793 18.8452C10.5253 19.0516 13.4342 19.0519 17.1204 18.8442M17.1204 18.8442C17.5521 18.8199 17.9944 18.7927 18.4497 18.7627C19.6418 18.684 20.5866 17.9451 20.6853 17.0173C20.7557 16.3557 20.8148 15.7293 20.8621 15.1257M17.1204 18.8442C17.042 18.5764 17 18.2931 17 18C17 16.3431 18.3431 15 20 15C20.2997 15 20.5891 15.0439 20.8621 15.1257M20.8621 15.1257C21.0339 12.9343 21.05 11.0442 20.8833 8.86786M20.8833 8.86786C20.8367 8.26 20.7759 7.62981 20.7002 6.96448C20.5958 6.04691 19.6574 5.32059 18.4781 5.24115C18.0128 5.20981 17.5611 5.18153 17.1203 5.1563M20.8833 8.86786C20.604 8.95376 20.3074 9 20 9C18.3431 9 17 7.65685 17 6C17 5.70706 17.042 5.42394 17.1203 5.1563M6.01001 12H6.00001M18.01 12H18M15 12C15 13.6569 13.6569 15 12 15C10.3431 15 9 13.6569 9 12C9 10.3431 10.3431 9 12 9C13.6569 9 15 10.3431 15 12Z" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Xizmat haqi</span>
                            </button>
                            <button>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M5.56588 17.7979C4.37088 17.7299 3.42612 17.0932 3.3285 16.2959C2.94056 13.1273 2.85423 11.8804 3.29912 8.67455C3.40769 7.89221 4.34486 7.27584 5.51848 7.20841C6.20614 7.1689 6.86383 7.135 7.5 7.10673M18.4497 17.7966C19.6418 17.7292 20.5866 17.0958 20.6853 16.3005C21.0825 13.0996 21.1214 11.8582 20.7002 8.68384C20.5958 7.89735 19.6574 7.27479 18.4781 7.2067C17.7921 7.1671 17.1356 7.13319 16.5 7.10497M7.5 7.10673V5.5C7.5 4.11929 8.61929 3 10 3H14C15.3807 3 16.5 4.11929 16.5 5.5V7.10497M7.5 7.10673C10.6871 6.96506 13.3338 6.96438 16.5 7.10497M7.5 14H8.5M8.5 14L7.90765 18.1465C7.6925 19.6525 8.86115 21 10.3825 21H13.6175C15.1388 21 16.3075 19.6525 16.0924 18.1464L15.5 14M8.5 14H15.5M15.5 14H16.5M14.5 10.5H16.5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Chek olish</span>
                            </button>
                            <button onClick={() => setOrderConfirm(true)}>
                                <span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <path d="M4 11.8743L9.18415 17.683C9.26315 17.7715 9.40471 17.7725 9.48506 17.6851L20 6.25" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </span>
                                <span>Tayyor</span>
                            </button>
                        </div>
                    </div>
                </div>

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

                    <button className='pay_button' onClick={() => setPayState(true)}>Pay Now</button>
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
                    <div className="wrapper_content" style={{ height: 'fit-content', paddingBottom: '200px' }}>
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