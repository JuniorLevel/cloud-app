import Footer from 'components/footer/Footer';
import Header from 'components/header/Header';
import { FC, ReactElement } from 'react';

interface ILayoutProps {
  children: ReactElement | ReactElement[];
}

const Layout: FC<ILayoutProps> = ({ children }) => {
  return (
    <div className="flex flex-col min-h-[100vh] max-w-[1600px] mx-auto px-2">
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};

export default Layout;
