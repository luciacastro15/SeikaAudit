import {Outlet} from 'react-router-dom';
import HeaderAuditores from './HeaderAuditores.jsx';

export function AuditoresLayout() {
    return (
        <>  
        <HeaderAuditores />
        <main>
            <Outlet />
        </main>
        </>
    );
}