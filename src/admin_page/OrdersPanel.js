import React from 'react';
import AdminSidebar from '../utils/AdminSidebar';
import AdminNavbar from '../utils/AdminNavbar';

function OrdersPanel() {
    return (
        <div className='dashboard'>
            <AdminNavbar />

            <div className="dashboard_main">
                <AdminSidebar />

                <div className="dashboard_main_card">
                </div>
            </div>
        </div>
    );
}

export default OrdersPanel;