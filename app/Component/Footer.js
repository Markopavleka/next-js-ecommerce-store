import style from './Footer.module.scss';

export default function Footer() {
  return (
    <div className={style.FooterBody}>
      <div>
        <p>SUBSCRIBE FOR NEWSLETTER</p>
        <input type="email" placeholder="E-MAIL HERE" />
        <button>Submit</button>
      </div>
      <div>
        <p>CONTACT US!</p>
        <p>0660 31415653</p>
        <p>三刀流@gmail.com</p>
      </div>
      <div>
        <p>AT YOUR SERVICE</p>
        <p>MON-Fr</p>
        <p>9 – 19 CEST</p>
      </div>
    </div>
  );
}
