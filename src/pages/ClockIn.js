import React, { useContext } from 'react';
import { ContextData } from '../context/Context';

function ClockIn() {
    const { clock, weekdays, monthName, session } = useContext(ContextData);

    return (
        <div className='clockIn'>
            {
                clock.map((a, b) => (
                    <div className="clock_wrapper" key={b}>
                        <div className="top">
                            <div className="hour">{a.hour < 10 ? '0' + a.hour : a.hour}</div>
                            <span className='hour'>:</span>
                            <div className="hour minute">{a.minute < 10 ? '0' + a.minute : a.minute}</div>
                            <span className='session'>{session}</span>
                        </div>

                        <div className="bottom">
                            <div className="day">{weekdays[a.day]},</div>
                            <div className="date">{a.date < 10 ? '0' + a.date : a.date}</div>
                            <div className="month">{monthName[a.month]}</div>
                            <div className="year">{a.year}</div>
                        </div>
                    </div>
                ))
            }
            <div className="clockIn_footer">
                <figure><img src="../../img/Oval3.png" alt="" /></figure>
                <div className="clockIn_title">
                    <h1>Coca Coffeetalk</h1>
                    <h3>Logged in as, <span>Bean Kean</span></h3>
                </div>
            </div>
        </div>
    );
}

export default ClockIn;