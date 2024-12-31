import style from '../index.module.css';
import avatar from '../assets/images/image-jeremy.png';
import { Links } from './Links';

const NameCard = () => {
  return (
    <section className={style.nameCardContent}>
      <div className={style.nameCardContentAvatar}>
        <img src={avatar} alt="jeremy" />
        <p>
          <span>Report for</span>
          <span>Jeremy Robson</span>
        </p>
      </div>
      <div className={style.nameCardContentLinks}>
        <ul>
          <Links />
        </ul>
      </div>
    </section>
  );
};

export { NameCard };