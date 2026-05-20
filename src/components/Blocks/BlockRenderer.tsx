/**
 * BlockRenderer.tsx
 * Renders different block types based on the provided block data.
 * This component acts as a central point for rendering various block types,
 * making it easier to manage and extend the block rendering logic in the future.
 */

import TabbedSlider from "@/components/Blocks/TabbedSlider";
import NumberedSteps from "@/components/Blocks/NumberedSteps";
import type { Block } from "@/types/blocks";

type BlockRendererProps = {
  block: Block;
};

export default function BlockRenderer({ block }: BlockRendererProps) {
  switch (block.type) {
    case "TabbedSlider":
      return <TabbedSlider {...block} />;

    case "NumberedSteps":
      return <NumberedSteps {...block} />;

    default:
      return null;
  }
}