import Footer from '@/components/layout/Footer';
import Header from '@/components/layout/Header';
import {PropsWithChildren} from 'react';

const Layout = ({children}: PropsWithChildren) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />

      <main className="flex-grow-1">{children}</main>

      <Footer />
    </div>
  );
};

export default Layout;
