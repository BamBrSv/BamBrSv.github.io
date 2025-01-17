import { user } from '@shared/mock';
import { ContextUsername } from '@shared/context/username.context';
import { useContext } from 'react';
import cls from './Ind.module.scss';

export const Ind = () => {
  const username = useContext(ContextUsername);
  const { PersonalLink } = user[username];
  const data = PersonalLink;
  return (
    <section aria-label="Ind" className={cls.ind}>
      <h3 className={cls.indTitle}>{data.title}</h3>
      <div>
        <iframe
          src="https://vkvideo.ru/video_ext.php?oid=-29903964&id=456240845&hd=2&autoplay=1"
          width="853"
          height="480"
          allow="autoplay; encrypted-media; fullscreen; picture-in-picture; screen-wake-lock;"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </section>
  );
};
Ind.displaName = 'Ind';
