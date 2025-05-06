import { Outlet } from 'react-router-dom';
import Header from '../components/Header';
import SideBar from '../components/SideBar';

const NoFooterLayout = () => {

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NoFooterLayout;