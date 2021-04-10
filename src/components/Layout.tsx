import { ReactNode } from 'react';
import Header from './Header';

interface layoutProps {
  children: ReactNode;
}

function Layout({ children }: layoutProps) {
  return (
    <>
      <Header />
      <main className="mx-auto mt-11 max-w-instaWidth w-full">{children}</main>
    </>
  );
}

export default Layout;
