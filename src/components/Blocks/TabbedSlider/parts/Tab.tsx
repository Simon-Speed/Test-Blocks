/**
 * Tab component for TabbedSlider block
 */
import type { ReactNode } from 'react';
import styles from "./Tab.module.scss";

type TabProps = {
  tabId: string;
  panelId: string;
  isActive: boolean;
  onClick: () => void;
  children: ReactNode;
  className?: string;
};

export default function Tab({ children, tabId, panelId, isActive, onClick, className }: TabProps) {
  return (
    <button
      className={`${styles.tab} ${className} ${isActive ? styles.active : ''}`}
      data-tab={tabId}
      aria-controls={panelId}
      aria-selected={isActive}
      role="tab"
      onClick={onClick}
    >
      {children}
    </button>
  );
}