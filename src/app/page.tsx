import BlockRenderer from "@/components/Blocks/BlockRenderer";
import styles from "./page.module.scss";
import blocks from '@/data/blocks.json';
import type { Block } from "@/types/blocks";

export default function Home() {
  return (
    <main className={styles.main}>
      <section className="block-section">
        <div className={`${styles.hero} container`}>
          <h1 className={styles.title}>Block Demo</h1>
          <p className={styles.description}>
            This is a demo of of the two blocks provided in the Figma design built within a Next.js App. The blocks are rendered using a BlockRenderer component that takes in the block data from a JSON file, mimicking data imported from a CMS, and renders the appropriate block based on the type.
          </p>
          <p>
            The code for this project can be found in the following <a href="https://github.com/your-repo-link">repository</a>.
          </p>
        </div>
      </section>

      {(blocks as Block[]).map((block) => (
        <BlockRenderer key={block.id} block={block} />
      ))}
    </main>
  );
}
