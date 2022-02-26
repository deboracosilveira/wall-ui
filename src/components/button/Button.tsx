import { FC } from 'react';

interface Props {
  onClick?: () => void;
  title: string;
  type: 'outlined' | 'primary' | 'secondary' | 'white';
}

const Button: FC<Props> = ({ onClick, title, type }) => {
  const style = {
    outlined: {
      class:
        'border border-white bg-primary text-white hover:bg-white hover:text-primary'
    },
    white: {
      class: 'bg-white text-primary'
    },
    primary: {
      class: 'bg-primary text-white'
    },
    secondary: {
      class: 'bg-secondary text-white'
    }
  };

  return (
    <button
      onClick={onClick}
      className={`
        text-md ml-6 inline-flex items-center rounded-md bg-opacity-90
        px-4 py-2 font-medium hover:bg-opacity-100 ${style[type].class}`}>
      {title}
    </button>
  );
};

export default Button;
