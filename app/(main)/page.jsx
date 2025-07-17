
import React from "react";
import Homepage from "@/components/landing/hero-section/heroSection";
import { Suspense } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import AboutUs from "@/components/landing/about-us/aboutus";

import Tickers from "@/components/landing/tickers/tickers";
import ContactUs from '@/components/landing/contactSection/contactSection';

import FeaturesSection from "@/components/landing/featuresSection/featuresSection";
import SubscribCard from "@/components/landing/subscribcard";
import Calculator from "@/components/landing/calculator/calculator";
import { FAQServices } from "@/components/landing/faqsection/page";
import { getAddisLogos, getFAQs, getSiteData } from "@/lib/functions";
import OurServices from "@/components/landing/services/ourservice";
import TopFeatures from "@/components/landing/features/topfeatures";



export default async function Page({ children }) {
    // const Faqs= await getFAQs();
    const siteData=await getSiteData();
    const amclogos= await getAddisLogos()
    return (
        <div className="bg-slate-50 flex flex-col">
            <main>
                <Suspense fallback={<Skeleton />}>
                    <Tickers />
                </Suspense>
                <Suspense fallback={<Skeleton />}>
                    <Homepage siteData={siteData} />
                </Suspense>
                {/* <WhyChouseUs /> */}
                <AboutUs siteData={siteData} />
                <div id="apps">
                    <FeaturesSection/>
                </div>
                {/* <OurServices /> */}
                {/* <WhyChouseUs /> */}
                {/* <TopFeatures /> */}
                {/* <FactsSection />
                <WhatWeDo />
                <HowWork /> */}
                {/* <FinancialTool />
                <EmiCalculator /> */}
                {/* <FaqSection />
                <Testimonials />
                <OurPosts /> */}
                <Calculator/>
                {/* <FAQServices Faqs={Faqs}/> */}
                <SubscribCard amclogos={amclogos}/>
                
                <ContactUs siteData={siteData}/>
                
            </main>
        </div>
    );
}