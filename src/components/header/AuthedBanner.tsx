import { FC, useState } from 'react';
import logo from '../../assets/logo.png';
import roundedLogo from '../../assets/roundedLogo.png';
import User from '../../types/user';

interface Props {
  user: User;
}
const AuthedBanner: FC<Props> = ({ user }) => {
  const [showUserMenu, setShowUserMenu] = useState(false);

  return (
    <div className="flex w-full items-center justify-between">
      <img src={logo} alt="logo" className="hidden w-52 md:block" />
      <img src={roundedLogo} alt="rounded logo" className="w-12 md:hidden" />

      <div className="relative">
        <button className="menu" onClick={() => setShowUserMenu(!showUserMenu)}>
          <i className="fa-solid fa-circle-user text-5xl text-primary"></i>
        </button>
        {showUserMenu && (
          <div className="absolute right-0 z-50 my-4 origin-top-right list-none divide-y divide-gray-100 rounded bg-white text-base shadow">
            <div className="px-4 py-3">
              <span className="block text-sm">{user.name}</span>
              <span className="block truncate text-sm font-medium text-gray-900">
                {user.email}
              </span>
            </div>
            <ul className="py-1">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                  Sign out
                </a>
              </li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default AuthedBanner;
