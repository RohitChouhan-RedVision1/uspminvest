"use client"
import React from 'react';
import styles from './HeroSection.module.css';
import Image from 'next/image';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import '@/lib/ScrollSmoother'

const HeroSection = ({siteData}) => {
    return (
        <div className={styles.hero}>
            <div className="max-w-screen-xl mx-auto">
                <div className="grid grid-cols-1 main_section lg:grid-cols-2 items-center">
                    <div>
                        <div className={styles.heroContent}>
                            <div className="section-title dark-section">
                                <h3 className="">Welcome to {siteData.websiteName}</h3>
                                <h1 className={`${styles.textAnimeStyle} `} data-cursor="-opaque">
                                    <span className='text-[var(--rv-secondary)]'>Empowering</span> your financial success journey
                                </h1>
                                <p data-aos="fade-up" data-aos-anchor-placement="bottom" >
                                    Guiding you with expert insights and strategic solutions to achieve financial growth, stability, and long-term success.
                                </p>
                            </div>
                            <div className={styles.heroContentBody} data-aos="fade-up" data-aos-anchor-placement="bottom" >
                                <div className={styles.heroBtn}>
                                    <Link href="/#apps" className="btn-default">Get started</Link>
                                </div>
                                    {/* <div className={styles.heroIntroductionVideo}>
                                        <div className={styles.videoPlayButton}>
                                            <Link href="https://www.youtube.com/watch?v=Y-x0efG1seA" className="popup-video" data-cursor-text="Play">
                                                <Image src="/images/icon-play.svg" alt="Play Icon" width={20} height={20} />
                                            </Link>
                                            <p>Introduction</p>
                                        </div>
                                    </div> */}
                            </div>
                            {/* <div className={styles.heroContentFooter} data-aos="fade-up" data-aos-anchor-placement="bottom" >
                                <h2 className="wow fadeInUp" data-wow-delay="0.6s">We&apos;re working with:</h2>
                                <div className={styles.heroClientSlider}>
                                    <Swiper
                                        spaceBetween={30}
                                        slidesPerView={3}
                                        autoplay={{
                                            delay: 2000,
                                            disableOnInteraction: false,
                                        }}
                                        modules={[Autoplay]}
                                        loop={true}
                                    >
                                        {[1, 2, 3,4,5, 1, 2, 3,4,5].map((logo, index) => (
                                            <SwiperSlide key={index}>
                                                <div className={styles.clientLogo}>
                                                    <Image src={`/images/mf/client-logo-${logo}.png`} alt={`Client Logo ${logo}`} width={100} height={100} />
                                                </div>
                                            </SwiperSlide>
                                        ))}
                                    </Swiper>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    <div>
                        <div className={styles.heroImage}>
                            <div className={styles.heroImg}>
                                <figure>
                                    <Image src="/Home-banner.svg" alt="Hero Image" width={600} height={500} />
                                </figure>
                            </div>
                            <div className={styles.companyExperience}>
                                <h3><span className="counter">10</span>+</h3>
                                <p>Years of experience in finance</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeroSection;
