import { FC } from 'react';
import AVATAR from '../../assets/avatars';

const Avatars: FC = () => {
  return (
    <div className="hidden lg:m-auto lg:my-10 lg:grid lg:grid-cols-4 lg:grid-rows-4 lg:gap-8">
      <img src={AVATAR.avatar1} alt="avatar" className="animation1 w-28" />
      <img src={AVATAR.avatar2} alt="avatar" className="animation2 w-28" />
      <img src={AVATAR.avatar3} alt="avatar" className="animation3 w-28" />
      <img src={AVATAR.avatar4} alt="avatar" className="animation4 w-28" />

      <img src={AVATAR.avatar5} alt="avatar" className="animation3 w-28" />
      <img src={AVATAR.avatar6} alt="avatar" className="animation4 w-28" />
      <img src={AVATAR.avatar7} alt="avatar" className="animation1 w-28" />
      <img src={AVATAR.avatar8} alt="avatar" className="animation2 w-28" />

      <img src={AVATAR.avatar9} alt="avatar" className="animation4 w-28" />
      <img src={AVATAR.avatar10} alt="avatar" className="animation1 w-28" />
      <img src={AVATAR.avatar11} alt="avatar" className="animation2 w-28" />
      <img src={AVATAR.avatar12} alt="avatar" className="animation3 w-28" />

      <img src={AVATAR.avatar13} alt="avatar" className="animation2 w-28" />
      <img src={AVATAR.avatar14} alt="avatar" className="animation3 w-28" />
      <img src={AVATAR.avatar15} alt="avatar" className="animation4 w-28" />
      <img src={AVATAR.avatar16} alt="avatar" className="animation1 w-28" />
    </div>
  );
};

export default Avatars;
