import React, { useContext } from 'react';
import { ContextData } from '../context/Context';
import { FiChevronDown } from "react-icons/fi";
import { GrClose } from "react-icons/gr";

function Tables() {
    const { tableInfo,
        selectedTablesFunc,
        selectedTables,
        deleteTableCardFunc,
        filterTables,
        setFilterTables,
        searchTable,
        setSearchTable,
        tableModalState,
        setTableModalState } = useContext(ContextData);

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
                        <button onClick={() => setFilterTables('')} id={filterTables === '' ? 'selected_filter_btn' : ''}>Barcha stollar</button>
                        <button onClick={() => setFilterTables('empty')} id={filterTables === 'empty' ? 'selected_filter_btn' : ''}>Bo'sh</button>
                        <button onClick={() => setFilterTables('busy')} id={filterTables === 'busy' ? 'selected_filter_btn' : ''}>Band</button>
                        <button onClick={() => setFilterTables('order')} id={filterTables === 'order' ? 'selected_filter_btn' : ''}>Buyurtma</button>
                    </div>
                </div>
                <div className="table_nav_right">
                    <label htmlFor='table_nav_search'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <path d="M17.3556 17.3658C18.8279 15.8961 19.7388 13.8641 19.7388 11.6194C19.7388 7.13518 16.1036 3.5 11.6194 3.5C7.13518 3.5 3.5 7.13518 3.5 11.6194C3.5 16.1036 7.13518 19.7388 11.6194 19.7388C13.8589 19.7388 15.8866 18.8321 17.3556 17.3658ZM17.3556 17.3658L20.5 20.5" stroke="#19191C" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                    </label>
                    <input type="text" name="table_nav_search" id="table_nav_search" onInput={(e) => setSearchTable(e.target.value)} placeholder='Qidirish' />
                </div>
            </div>

            <div className="table_page_main">
                <div className="table_main_wrapper">
                    {
                        tableInfo.filter((item) => {
                            if (
                                item.type.toLowerCase().includes(filterTables.toLowerCase()) &&
                                item.name.toLowerCase().includes(searchTable.toLowerCase())
                            ) {
                                return item
                            }
                        }).map((a, b) => (
                            <div className="table_card" id={selectedTables.map(foo => foo.name === a.name ? 'this_is_selected_card' : '')} key={b} onClick={() => selectedTablesFunc(a)}>
                                <figure><img src={a.img} alt={a.name} /></figure>
                                <h1 style={a.type === 'empty' ? { backgroundColor: 'rgba(236, 246, 255, 1)', color: '#3395F0' } : a.type === 'busy' ? { backgroundColor: 'rgba(255, 245, 238, 1)', color: '#FF5C00' } : a.type === 'order' ? { backgroundColor: 'rgba(236, 254, 237, 1)', color: '#13C91B' } : ''}>{a.name}</h1>
                            </div>
                        ))
                    }
                    <div className="table_page_footer" id={selectedTables.length > 0 ? 'visible_table_page_footer' : ''}>
                        <div className="table_footer_left">
                            <span>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                    <path d="M15.7454 4.50126C16.849 4.50126 17.4009 4.50126 17.8279 4.74202C18.1269 4.91057 18.3845 5.16724 18.5597 5.47099C18.81 5.90485 18.835 6.47099 18.8851 7.60325C19.0487 11.3011 19.0341 14.009 18.8636 17.7532C18.8169 18.7779 18.7936 19.2902 18.5691 19.7046C18.4149 19.9894 18.1743 20.2504 17.9075 20.4225C17.5194 20.6727 17.0414 20.7161 16.0852 20.8029C13.1731 21.0673 10.8447 21.0651 7.91978 20.7999C6.96461 20.7134 6.48703 20.6701 6.09939 20.4206C5.83297 20.2492 5.59239 19.9888 5.43791 19.7048C5.21315 19.2916 5.18868 18.7815 5.13973 17.7612C4.96088 14.0326 4.95209 11.3236 5.12278 7.59999C5.17467 6.46809 5.20061 5.90214 5.45104 5.46906C5.62645 5.16572 5.88383 4.90977 6.18267 4.7415C6.60933 4.50126 7.16069 4.50126 8.2634 4.50126M9.60724 6.00251H14.4045C15.1994 6.00251 15.8437 5.33037 15.8437 4.50125C15.8437 3.67213 15.1994 3 14.4045 3H9.60724C8.8124 3 8.16805 3.67213 8.16805 4.50125C8.16805 5.33037 8.8124 6.00251 9.60724 6.00251Z" stroke="#FF5C00" strokeWidth="1.5" />
                                </svg>
                            </span>
                            <aside>
                                <h3>Joy</h3>
                                <p>Buyurtma #102</p>
                            </aside>
                        </div>

                        <div className="table_footer_wrapper">
                            {
                                selectedTables.map((a, b) => (
                                    <div className="table_footer_card" key={b}>
                                        <button onClick={() => deleteTableCardFunc(a.name)}>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                                                    <path d="M2.0835 2.08325L7.91683 7.91658M7.91683 2.08325L2.0835 7.91658" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
                                                </svg>
                                            </span>
                                        </button>
                                        <h4>{a.name}</h4>
                                    </div>
                                ))
                            }
                        </div>

                        <button className="table_footer_btn" onClick={() => setTableModalState({ ...tableModalState, modal: true })}>Joyni band qilish</button>
                    </div>
                </div>

                <div className="table_page_modal" onClick={() => setTableModalState({ ...tableModalState, modal: false })} style={tableModalState.modal ? { display: 'flex' } : { display: 'none' }}>
                    <div className="table_page_modal_card" onClick={(e) => e.stopPropagation()}>
                        <div className="table_page_modal_calendar">
                            <div className="calendar_top">
                                <h4>Sanani tanlang</h4>
                                <button><span>March 2023</span> <span><FiChevronDown /></span></button>
                            </div>
                            <div className="calendar_footer">
                                <div className="calendar_cells">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                        <path d="M4.76588 6.98274C4.86239 5.93961 5.69543 5.11779 6.73865 5.02788C11.0269 4.65829 14.0044 4.65722 18.2583 5.0256C19.3066 5.11639 20.1407 5.94647 20.2335 6.99512C20.6079 11.2276 20.5734 14.2161 20.2203 18.484C20.1326 19.5444 19.2928 20.3889 18.2331 20.4787C13.9667 20.8405 10.9928 20.8397 6.78078 20.4805C5.71856 20.3899 4.87877 19.5409 4.792 18.4778C4.44716 14.253 4.37042 11.2572 4.76588 6.98274Z" stroke="#FF5C00" strokeWidth="1.5" />
                                        <path d="M8.5 3.25V6.75" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M16.5 3.25V6.75" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M5 9.75H20" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
                                        <path d="M8.5 13.25H8.51" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M8.5 16.75H8.51" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M12.5098 13.25H12.5198" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M12.5098 16.75H12.5198" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M16.52 13.25H16.53" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                        <path d="M16.52 16.75H16.53" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                    </svg>
                                </div>
                                <div className="calendar_cells"><span>Sun</span><span>5</span></div>
                                <div className="calendar_cells"><span>Mon</span><span>6</span></div>
                                <div className="calendar_cells"><span>Tue</span><span>7</span></div>
                                <div className="calendar_cells"><span>Wed</span><span>8</span></div>
                                <div className="calendar_cells"><span>Thu</span><span>9</span></div>
                                <div className="calendar_cells"><span>Fri</span><span>10</span></div>
                                <div className="calendar_cells"><span>Sat</span><span>11</span></div>
                            </div>
                        </div>

                        <div className="table_modal_customers_list">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Mijoz ismi</th>
                                        <th>Vaqti</th>
                                        <th>Joy</th>
                                        <th>Joy soni</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Matilda R</td>
                                        <td>08:00 AM</td>
                                        <td>T-11</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>12</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Margaret</td>
                                        <td>08:00 AM</td>
                                        <td>T-8</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Joseph M</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Maikhel D</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Wesley</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Francis Eli</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>John Sparrow</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Cecilia F</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Rodnew</td>
                                        <td>08:00 AM</td>
                                        <td>T-7</td>
                                        <td>
                                            <span>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="17" height="16" viewBox="0 0 17 16" fill="none">
                                                    <path d="M10.833 4.33333C10.833 5.622 9.78829 6.66667 8.49963 6.66667C7.21097 6.66667 6.1663 5.622 6.1663 4.33333C6.1663 3.04467 7.21097 2 8.49963 2C9.78829 2 10.833 3.04467 10.833 4.33333Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                    <path d="M4.11572 11.6599C4.34425 10.0765 5.57007 8.78259 7.16562 8.66635C8.07723 8.59994 8.9252 8.59983 9.83507 8.66599C11.43 8.78196 12.6549 10.0758 12.8833 11.6585L12.9278 11.9663C13.0594 12.8785 12.4257 13.73 11.5093 13.8282C9.3586 14.0589 7.6477 14.0562 5.49377 13.8265C4.57593 13.7286 3.94013 12.8764 4.072 11.9628L4.11572 11.6599Z" stroke="#9C9C9C" strokeWidth="1.5" />
                                                </svg>
                                            </span>
                                            <span>2</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <button className="table_page_modal_btn" onClick={() => setTableModalState({ ...tableModalState, popup: true })}>Yangi buyurtmani qo'shish</button>
                    </div>
                </div>

                <div className="table_page_popup" onClick={() => setTableModalState({ ...tableModalState, popup: false })} style={tableModalState.popup ? { display: 'flex' } : { display: 'none' }}>
                    <div className="table_page_popup_card" onClick={(e) => e.stopPropagation()}>
                        <div className="table_page_popup_top">
                            <h3>Yangi buyurtma</h3>
                            <button onClick={() => setTableModalState({ ...tableModalState, popup: false })}><GrClose /></button>
                        </div>

                        <div className="table_popup_person_info">
                            <div className="popup_inputs">
                                <label htmlFor="who_gave_that">Kim tomonidan</label>
                                <input type="text" name="who_gave_that" id="who_gave_that" />
                            </div>
                            <div className="popup_inputs">
                                <label htmlFor="phone_number">Telefon raqami</label>
                                <input type="text" name="phone_number" id="phone_number" />
                            </div>
                            <div className="guests_num">
                                <h3>Mehmonlar soni</h3>
                                <div className="select_num_guests">
                                    <h2>1 - 4</h2>
                                    <h2>5 - 8</h2>
                                    <h2>8+</h2>
                                </div>
                            </div>
                            <div className="table_page_modal_calendar">
                                <div className="calendar_top">
                                    <h4>Sanani tanlang</h4>
                                    <button><span>March 2023</span> <span><FiChevronDown /></span></button>
                                </div>
                                <div className="calendar_footer">
                                    <div className="calendar_cells">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                                            <path d="M4.76588 6.98274C4.86239 5.93961 5.69543 5.11779 6.73865 5.02788C11.0269 4.65829 14.0044 4.65722 18.2583 5.0256C19.3066 5.11639 20.1407 5.94647 20.2335 6.99512C20.6079 11.2276 20.5734 14.2161 20.2203 18.484C20.1326 19.5444 19.2928 20.3889 18.2331 20.4787C13.9667 20.8405 10.9928 20.8397 6.78078 20.4805C5.71856 20.3899 4.87877 19.5409 4.792 18.4778C4.44716 14.253 4.37042 11.2572 4.76588 6.98274Z" stroke="#FF5C00" strokeWidth="1.5" />
                                            <path d="M8.5 3.25V6.75" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M16.5 3.25V6.75" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M5 9.75H20" stroke="#FF5C00" strokeWidth="1.5" strokeLinecap="round" />
                                            <path d="M8.5 13.25H8.51" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M8.5 16.75H8.51" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12.5098 13.25H12.5198" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M12.5098 16.75H12.5198" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M16.52 13.25H16.53" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                            <path d="M16.52 16.75H16.53" stroke="#FF5C00" strokeWidth="2" strokeLinecap="round" />
                                        </svg>
                                    </div>
                                    <div className="calendar_cells"><span>Sun</span><span>5</span></div>
                                    <div className="calendar_cells"><span>Mon</span><span>6</span></div>
                                    <div className="calendar_cells"><span>Tue</span><span>7</span></div>
                                    <div className="calendar_cells"><span>Wed</span><span>8</span></div>
                                    <div className="calendar_cells"><span>Thu</span><span>9</span></div>
                                    <div className="calendar_cells"><span>Fri</span><span>10</span></div>
                                    <div className="calendar_cells"><span>Sat</span><span>11</span></div>
                                </div>
                            </div>

                            <div className="time_of_order">
                                <h3>Vaqti</h3>
                                <table>
                                    <tbody>
                                        <tr>
                                            <td><span>09:00</span><span>AM</span></td>
                                            <td><span>09:15</span><span>AM</span></td>
                                            <td><span>11:00</span><span>AM</span></td>
                                            <td><span>12:45</span><span>PM</span></td>
                                            <td><span>01:00</span><span>PM</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>01:15</span><span>PM</span></td>
                                            <td><span>02:45</span><span>PM</span></td>
                                            <td><span>03:00</span><span>PM</span></td>
                                            <td><span>05:15</span><span>PM</span></td>
                                            <td><span>06:00</span><span>PM</span></td>
                                        </tr>
                                        <tr>
                                            <td><span>07:15</span><span>AM</span></td>
                                            <td><span>07:45</span><span>AM</span></td>
                                            <td><span>08:30</span><span>AM</span></td>
                                            <td><span>08:45</span><span>AM</span></td>
                                            <td><span>09:00</span><span>AM</span></td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        <div className="table_popup_footer">
                            <button onClick={() => setTableModalState({ ...tableModalState, popup: false })}>Bekor qilish</button>
                            <button>Saqlash</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Tables;