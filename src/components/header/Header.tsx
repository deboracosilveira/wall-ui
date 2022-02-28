import { useContext, FC } from 'react';
import { Context } from '../../context/Context';
import GuestBanner from './GuestBanner';
import AuthedBanner from './AuthedBanner';

const Header: FC = () => {
  const { user, signUserOut } = useContext(Context);
  const headerBgColor = user ? 'bg-white' : 'bg-primary ';

  return (
    <header className={`shadow ${headerBgColor}`}>
      <div className="mx-auto flex h-16 max-w-7xl px-4 sm:px-6 lg:px-8">
        {user ? (
          <AuthedBanner user={user} signUserOut={signUserOut} />
        ) : (
          <GuestBanner />
        )}
      </div>
    </header>
  );
};

export default Header;
