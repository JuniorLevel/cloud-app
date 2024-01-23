import Footer from 'components/footer/Footer';
import HeaderHome from 'components/header-home/HeaderHome';
import Header from 'components/header/Header';
import { FC, ReactNode, useEffect } from 'react';

interface ILayout {
  children: ReactNode | ReactNode[] | undefined;
}

const Layout: FC<ILayout> = ({ children }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="flex flex-col min-h-[100vh] max-w-[1920px] mx-auto">
      {window.location.pathname === '/' ? <HeaderHome /> : <Header />}
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
