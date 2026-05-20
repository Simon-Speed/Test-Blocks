/**
 * Card component for the TabbedSlider block.
 * 
 * Displays an image, title, and description for each slide.
 */
import Image from "next/image";
import styles from "./Card.module.scss";

type CardProps = {
  title: string;
  image: string;
  description: string;
  link: [string, string, string]; // [href, label, target]
};

export function Card( { title, image, description, link } : CardProps ) {
  return (
    <article className={styles.cardWrapper}>
      <a className={styles.card} href={link[0]} target={link[2]} rel="noopener noreferrer">
        <div className={styles.imageWrapper}>
          <Image src={image} alt={title} width={500} height={300} />
        </div>
        <div className={styles.content}>
          <h4 className={styles.cardTitle}>{title}</h4>
          <p className={styles.cardDescription}>{description}</p>
          <span className={styles.cardLink}>
            {link[1]}
            <i>
              <Image src="/assets/arrow-right-sm.svg" alt="Arrow Right Icon" width={12} height={12} />
            </i>
          </span>
        </div>
      </a>
    </article>
  );
}