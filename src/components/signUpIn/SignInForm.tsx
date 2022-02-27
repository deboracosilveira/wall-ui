import { FC, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Alert, Button, Input } from '..';

const SignInForm: FC = () => {
  const redirectFromConfirmation = useLocation().search.includes('confirmed');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    console.log('submit');
  };

  return (
    <div className="flex-1 flex-col justify-center py-16 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Sign in
        </h2>
        {redirectFromConfirmation && (
          <div className="mb-6">
            <Alert
              message={
                'Hey, your account has been successfully confirmed! Now you can sign in.'
              }
              type="success"
            />
          </div>
        )}
        {!redirectFromConfirmation && (
          <p className="font-light">
            Don’t have an account?
            <Link
              to="/sign-up"
              className="ml-2 font-medium text-primary hover:underline">
              Sign up
            </Link>
          </p>
        )}

        <div className="mt-6 space-y-6">
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div className="flex flex-col gap-4">
            <Button onClick={handleSubmit} title="Sign in" type="secondary" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignInForm;
