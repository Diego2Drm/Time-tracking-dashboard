import style from '../index.module.css';
import avatar from '../assets/images/image-jeremy.png';

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
          <li>Daily</li>
          <li>Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </section>
  );
};

export { NameCard };