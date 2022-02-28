import { FC, useContext, useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { Alert, Button, Input, Loader } from '..';
import { Context } from '../../context/Context';

const SignUpForm: FC = () => {
  const { loading, signUserUp, signUpResponse, user } = useContext(Context);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {
    signUserUp(name, email, password);
  };

  if (user) return <Navigate to="/" />;

  return (
    <div className="flex-1 flex-col justify-center py-16 px-4 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
      <div className="mx-auto w-full max-w-sm lg:w-96">
        <h2 className="my-6 text-center text-3xl font-extrabold text-gray-900">
          Sign up
        </h2>
        <p className="font-light">
          Already have an account?
          <Link
            to="/sign-in"
            className="ml-2 font-medium text-primary hover:underline">
            Sign in
          </Link>
        </p>

        <div className="mt-6 space-y-6">
          <Input label="Name" type="text" value={name} onChange={setName} />
          <Input label="Email" type="email" value={email} onChange={setEmail} />
          <Input
            label="Password"
            type="password"
            value={password}
            onChange={setPassword}
          />
          <div className="flex flex-col gap-4">
            {signUpResponse && (
              <Alert
                message={signUpResponse.message}
                type={signUpResponse.type}
              />
            )}
            <Button
              onClick={handleSubmit}
              title="Sign up"
              type="secondary"
              disabled={loading}>
              {loading && <Loader />}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUpForm;
