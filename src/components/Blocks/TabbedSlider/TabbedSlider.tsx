/**
 * Tabbed Slider Block
 */
'use client';

import { useState } from "react";

import { TabbedSliderBlock } from "@/types/blocks";

import styles from "./TabbedSlider.module.scss";
import "./swiper.scss";

import Tab from "./parts/Tab";
import Panel from "./parts/Panel";
import { Card } from "./parts/Card";

export default function TabbedSlider( { fields, settings } : TabbedSliderBlock ) {

  const firstTabId = fields.tabs.items[0]?.id;
  const [activeTabId, setActiveTabId] = useState(firstTabId);

  if (!firstTabId) {
    return null;
  }

  return (
    <section className={`${styles.TabbedSlider} bg-${settings.backgroundColor} block-section`}>
      <div className="container">
        <h2 className={styles.blockHeading}>{fields.heading.value}</h2>
        <p className={styles.blockDescription}>{fields.description.value}</p>

        <div className={styles.tabs} role="tablist" aria-orientation="horizontal">
          {fields.tabs.items.map((tab) => {

            const isActive = activeTabId === tab.id;

            return (
              <Tab 
                key={tab.id} 
                tabId={tab.id} 
                panelId={`${tab.id}-panel`}
                className={styles.tab}
                isActive={isActive}
                onClick={() => setActiveTabId(tab.id)}
              >
                {tab.subfields.subheading.value}
              </Tab>
            )
          })}
        </div>

        <div className={styles.panels}>
          {fields.tabs.items.map((tab) => {

            const isActive = activeTabId === tab.id;

            return (
              <Panel 
                key={tab.id}
                panelId={`${tab.id}-panel`}
                tabId={tab.id}
                sliderId={`${tab.id}-slider`}
                className={styles.panel}
                isActive={isActive}
              >
                {tab.subfields.cards.items.map((item) => (
                  <Card
                    key={item.id}
                    title={item.title}
                    image={item.image}
                    description={item.description}
                    link={item.link}
                  />
                ))}
              </Panel>  
            )
          })}
        </div>
      </div>
    </section>
  );
}