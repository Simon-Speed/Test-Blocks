/**
 * Panel component for TabbedSlider block
 */
'use client';

import { Children, useCallback, useMemo, useState, type ReactNode } from 'react';

import { Swiper, SwiperSlide } from "swiper/react";
import type { Swiper as SwiperType } from 'swiper';
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";
//import "swiper/css/navigation";
//import "swiper/css/pagination";

import styles from "./Panel.module.scss";

type PanelProps = {
  panelId: string;
  tabId: string;
  sliderId: string;
  isActive: boolean;
  children: ReactNode;
  className?: string;
};

function getBlankSlideCount(totalSlides: number, slidesPerView: number) {
  if (!slidesPerView || slidesPerView <= 1) return 0;

    const remainder = totalSlides % slidesPerView;

    return remainder === 0 ? 0 : slidesPerView - remainder;
  }

  export default function Panel( { panelId, tabId, sliderId, isActive, children } : PanelProps ) {

    const childArray = useMemo(() => Children.toArray(children), [children]);

  const [activeSlidesPerView, setActiveSlidesPerView] = useState(1);

  const syncSlidesPerView = useCallback((swiper: SwiperType) => {
    const perView = swiper.params.slidesPerView;

    // Only handle numeric slidesPerView. Ignore "auto" if you ever use it.
    if (typeof perView === "number") {
      setActiveSlidesPerView(perView);
    }
  }, []);

  const blankSlideCount = useMemo(
    () => getBlankSlideCount(childArray.length, activeSlidesPerView),
    [childArray.length, activeSlidesPerView]
  );

  return (
    <div 
      className={`${styles.panel} ${isActive ? styles.active : ''}`} 
      data-panel={panelId}
      id={panelId}
      role="tabpanel"
      aria-labelledby={tabId}
      hidden={!isActive}
    >
      <button id={`${sliderId}-prev`} className={`swiper-button-prev ${styles.navButton} ${styles.navButtonLeft}`}>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M14.3244 8.4404H3.3521L8.14572 13.234C8.52882 13.6171 8.52882 14.2458 8.14572 14.6289C7.76262 15.012 7.14377 15.012 6.76068 14.6289L0.287322 8.15553C-0.0957747 7.77243 -0.0957747 7.15358 0.287322 6.77049L6.75086 0.287309C6.93438 0.10337 7.18354 0 7.44338 0C7.70321 0 7.95237 0.10337 8.1359 0.287309C8.51899 0.670405 8.51899 1.28925 8.1359 1.67235L3.3521 6.4758H14.3244C14.8647 6.4758 15.3067 6.91783 15.3067 7.4581C15.3067 7.99836 14.8647 8.4404 14.3244 8.4404Z" fill="#312719"/>
      </svg>
      </button>
      <Swiper
        modules={[Navigation, Pagination]}
        navigation={{
          nextEl: `#${sliderId}-next`,
          prevEl: `#${sliderId}-prev`,
        }}
        pagination={{ clickable: true }}
        slidesPerView={1}
        spaceBetween={26}
        loop={false}
        onSwiper={syncSlidesPerView}
        onBreakpoint={syncSlidesPerView}
        breakpoints={{
          768: {
            slidesPerView: 2,
            slidesPerGroup: 2,
            spaceBetween: 26,
          },
          1280: {
            slidesPerView: 3,
            slidesPerGroup: 3,
            spaceBetween: 26,
          },
        }}
      >
        {childArray.map((child, index) => (
          <SwiperSlide key={index}>{child}</SwiperSlide>
        ))}

        {Array.from({ length: blankSlideCount }).map((_, index) => (
          <SwiperSlide
            key={`blank-${index}`}
            aria-hidden="true"
            className="swiper-slide-blank"
          />
        ))}
      </Swiper>
      <button id={`${sliderId}-next`} className={`swiper-button-next ${styles.navButton} ${styles.navButtonRight}`}>
        <svg width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M0.9823 8.4404H11.9546L7.16097 13.234C6.77787 13.6171 6.77787 14.2458 7.16097 14.6289C7.54406 15.012 8.16291 15.012 8.54601 14.6289L15.0194 8.15553C15.4025 7.77243 15.4025 7.15358 15.0194 6.77049L8.55583 0.287309C8.37231 0.10337 8.12315 0 7.86331 0C7.60347 0 7.35431 0.10337 7.17079 0.287309C6.78769 0.670405 6.78769 1.28925 7.17079 1.67235L11.9546 6.4758H0.9823C0.442035 6.4758 0 6.91783 0 7.4581C0 7.99836 0.442035 8.4404 0.9823 8.4404Z" fill="white"/>
        </svg>
      </button>
    </div>
  );
}