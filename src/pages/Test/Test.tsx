import { useContext } from 'react';
import cls from './Test.module.scss';
import { ContextUsername } from '@shared/context/username.context';

export const Test = () => {
  const username = useContext(ContextUsername);

  if (username === 'vanya') {
    return (
      <div className={cls.profile}>
        <script src="https://forms.yandex.ru/_static/embed.js"></script>
        <iframe
          src="https://forms.yandex.ru/cloud/6789b01150569074596896ef/?iframe=1"
          frameBorder="0"
          name="ya-form-6789b01150569074596896ef"
          width="650"
        ></iframe>
      </div>
    );
  }
  return <>Такого теста нет</>;
};

Test.displayName = 'Test';
