import {
  FacebookOutlined,
  InstagramOutlined,
  TwitterOutlined,
  YoutubeOutlined,
} from "@ant-design/icons";
import styles from "./Footer.module.css";
import logo from "./assets/logo.png";
import { Button, Input } from "antd";

export const Footer = () => {
  return (
    <footer>
      <div className={styles.footerContent}>
        <div className={styles.footerLeft}>
          <div className={styles.logo}>
            <img src={logo} alt="logo" />
            <p>Comforty</p>
          </div>
          <p className={styles.leftP}>
            Vivamus Tistique odio sit amet velit semper, eu posuere turpis
            interdum.
            <br />
            Cras egestas purus
          </p>
          <div className={styles.socialMedia}>
            <FacebookOutlined />
            <TwitterOutlined />
            <InstagramOutlined />
            <YoutubeOutlined />
          </div>
        </div>
        <div className={styles.footerRight}>
          <h3>NEWSLETTER</h3>
          <div className={styles.subscribe}>
            <Input placeholder="Your email" className={styles.input} />
            <Button className={styles.subscribeButton}>Subscribe</Button>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            <br />
            Nullam tincuident erat enim.
          </p>
        </div>
      </div>
      <div className={styles.copy}>
        &#x40; 2021 - Blogy - Designed & Develop by NMG
      </div>
    </footer>
  );
};
