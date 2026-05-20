/**
 * 
 */
import { NumberedStepsBlock } from "@/types/blocks";
import Image from "next/image";
import styles from "./NumberedSteps.module.scss";

export default function NumberedSteps( { fields, settings } : NumberedStepsBlock ) {
  
  let stepNumber = 1;

  return (
    <section className={`${styles.numberedSteps} bg-${settings.backgroundColor} block-section`}>
      <div className="container">
        <h2 className={styles.blockHeading}>{fields.heading.value}</h2>
        <p className={styles.blockDescription}>{fields.description.value}</p>

        <div className={styles.steps}>
          {fields.steps.items.map((step) => (
              <div key={step.id} className={styles.step}>
                <Image src={step.image} alt={step.title} className={styles.stepImage} width={295} height={246} />
                <h3 className={styles.stepTitle}>
                  <span className={styles.stepNumber}>{stepNumber++}.</span>
                  {step.title}
                </h3>
                <p className={styles.stepDescription}>{step.description}</p>
                
              </div>
          ))}
        </div>
      </div>
    </section>
  );
}