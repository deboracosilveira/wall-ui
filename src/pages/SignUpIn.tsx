import { FC } from 'react';
import { Avatars, SignUpForm } from '../components';

interface Props {
  signUp?: boolean;
}

const SignUpIn: FC<Props> = ({ signUp }) => {
  return (
    <div className="flex min-h-screen">
      <SignUpForm signUp={signUp} />
      <Avatars />
    </div>
  );
};

export default SignUpIn;
