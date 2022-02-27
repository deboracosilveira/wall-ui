import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Input } from '..';

interface Props {
  signUp?: boolean;
}

const SignUpForm: FC<Props> = ({ signUp }) => {
  document.body.style.background = 'white';

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('subtmit');
  };

  return (
    <div className="flex-1 flex-col justify-center py-16 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          {signUp ? 'Sign up' : 'Sign in'}
        </h2>
        <p className="font-light">
          {signUp ? 'Already have an account?' : 'Don’t have an account?'}
          <Link
            to={signUp ? '/sign-in' : '/sign-up'}
            className="ml-2 font-medium text-primary hover:underline">
            {signUp ? 'Sign in' : 'Sign up'}
          </Link>
        </p>

        <form className="mt-6 space-y-6">
          {signUp && (
            <Input label="Name" type="text" value={name} onChange={setName} />
          )}
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div className="flex flex-col gap-4">
            <Button onClick={handleSubmit} title="Sign up" type="secondary" />
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUpForm;
