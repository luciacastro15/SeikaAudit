import { Outlet } from 'react-router-dom';
import HeaderJefes from './HeaderJefes.jsx';

export function JefesLayout() {
    return (
        <>  
            <HeaderJefes />
            <main>
                <Outlet />
            </main>
        </>
    );
}
