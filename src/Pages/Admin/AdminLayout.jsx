import {Outlet} from 'react-router-dom';
import AdminHeader from './AdminHeader';

export function AdminLayout() {
    return (
        <>  
        <AdminHeader />
        <main>
            <Outlet />
        </main>
        </>
    );
}