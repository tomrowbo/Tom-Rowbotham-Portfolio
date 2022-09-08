import styles from "../../styles/Construction.module.css";
import Image from "next/image";

export default function UnderConstructionBody() {
  return (
    <main className={styles.main}>
      <div className={styles.constructionDiv}>
        <Image
          src="/constructionPicArt.png"
          width={500}
          height={400}
          alt="Under Construction Image"
        />
      </div>
      <h1 className={styles.title}>Coming Soon...</h1>
    </main>
  );
}
