import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '..';

const GuestBanner: FC = () => {
  return (
    <div className="flex w-full items-center justify-between">
      <span className="hidden text-xl font-light text-white md:block">
        Don’ t miss the chance to interact with us!
      </span>
      <div className="flex w-full justify-around md:w-auto">
        <Link to="/sign-in">
          <Button title="Sign in" type="outlined" />
        </Link>
        <Link to="/sign-up">
          <Button title="Sign up" type="white" />
        </Link>
      </div>
    </div>
  );
};

export default GuestBanner;
