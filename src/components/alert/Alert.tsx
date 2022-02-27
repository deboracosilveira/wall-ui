import { FC } from 'react';

interface Props {
  message: string;
  type: 'error' | 'success' | 'info';
}

const Alert: FC<Props> = ({ type, message }) => {
  const alerts = {
    error: {
      bgColor: 'bg-red-50',
      icon: 'fa-thumbs-down text-red-400',
      textColor: 'text-red-700'
    },
    success: {
      bgColor: 'bg-green-50',
      icon: 'fa-circle-check text-green-500',
      textColor: 'text-green-700'
    },
    info: {
      bgColor: 'bg-blue-50',
      icon: 'fa-circle-info text-blue-400',
      textColor: 'text-blue-400'
    }
  };

  return (
    <div className={`rounded-md p-4 ${alerts[type].bgColor}`}>
      <div className="flex items-center">
        <i className={`fa-solid ${alerts[type].icon}`}></i>
        <p
          className={`mt-2 ml-3 text-sm leading-normal ${alerts[type].textColor}`}>
          {message}
        </p>
      </div>
    </div>
  );
};

export default Alert;
