import { FC } from 'react';
import GuestBanner from './GuestBanner';

const Header: FC = () => {
  return (
    <header className="bg-primary">
      <div className="mx-auto flex h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        <GuestBanner />
      </div>
    </header>
  );
};

export default Header;
