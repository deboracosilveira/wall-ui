import { FC } from 'react';
import { Avatars, SignInForm, SignUpForm } from '../components';

interface Props {
  signUp?: boolean;
}

const SignUpIn: FC<Props> = ({ signUp }) => {
  document.body.style.background = 'white';

  return (
    <div className="flex min-h-screen">
      {signUp ? <SignUpForm /> : <SignInForm />}
      <Avatars />
    </div>
  );
};

export default SignUpIn;
