"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
  Breadcrumb,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbItem,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { calculators, performance } from "@/data/calculators";
import { useSearchParams } from "next/navigation";

export default function Page() {
  const searchParams = useSearchParams();
  const [isMonthlySip, setIsMonthlySip] = useState(true);
 
  // Sync tab from URL on mount
  useEffect(() => {
    const tab = searchParams.get("tab");
    setIsMonthlySip(tab !== "performance"); // default is "calculator"
  }, [searchParams]);
  return (
    <div className="">
       <div className="page-header">
               <div className="container mx-auto">
                 <div className="items-center">
                   <div className="page-header-box">
                     <h1 className="text-anime-style-2" data-cursor="-opaque">
                       Financial calculators
                     </h1>
                     <Breadcrumb>
                       <BreadcrumbList className="text-white">
                         <BreadcrumbItem>
                           <BreadcrumbLink href="/">Home</BreadcrumbLink>
                         </BreadcrumbItem>
                         <BreadcrumbSeparator />
                         <BreadcrumbItem>
                           <BreadcrumbLink href="/tools">Tools</BreadcrumbLink>
                         </BreadcrumbItem>
                         <BreadcrumbSeparator />
                         <BreadcrumbItem>
                           <BreadcrumbPage>Financial calculators</BreadcrumbPage>
                         </BreadcrumbItem>
                       </BreadcrumbList>
                     </Breadcrumb>
                   </div>
                 </div>
               </div>
             </div>
      <div className="max-w-screen-xl mx-auto main_section">
      <section className="">
        <div className=" mx-auto">
        <div className="flex justify-center mb-14">
  <div className="inline-flex   rounded-full shadow-inner">
    <Link
                  href={"/tools/calculators?tab=calculator"}
      className={`px-5 md:px-20 py-2 text-lg font-medium border  hover:bg-[var(--rv-primary)] hover:text-white rounded-l-full transition-all duration-300 ${
        isMonthlySip
          ? "bg-[var(--rv-secondary)] border-[var(--rv-secondary)] text-white"
          : "bg-[var(--rv-primary)] border-[var(--rv-primary)] text-white"
      }`}
    >
      Calculators
    </Link>
    <Link
                  href={"/tools/calculators?tab=performance"}
      className={`px-5 md:px-20 py-2 text-lg hover:bg-[var(--rv-primary)] hover:text-white font-medium border border-[var(--rv-primary)] rounded-r-full transition-all duration-300 ${
        !isMonthlySip
           ? "bg-[var(--rv-secondary)] border-[var(--rv-secondary)] text-white"
          : "bg-[var(--rv-primary)] border-[var(--rv-primary)] text-white"
      }`}
    >
      Performance
    </Link>
  </div>
</div>

          {isMonthlySip ? (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {calculators.map((item, index) => (
                <Link href={item?.route} key={index}>
                  <div className="px-2 bg-[var(--rv-primary)]  h-14  flex  gap-4 rounded items-center text-center shadow-md group">
                    <div>
                      <Image src={item?.image} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-md text-center group-hover:text-[#F3F3E0] mb-0">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          ) : (
            <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
              {performance.map((item, index) => (
                <Link href={item.link} key={index}>
                  <div className="px-2  bg-[var(--rv-primary)]  h-14 flex gap-4 items-center rounded-md  shadow-md group">
                    <div>
                      <Image src={item?.image} alt="" width={20} height={20} />
                    </div>
                    <div>
                      <p className="font-bold text-white text-md group-hover:[#F3F3E0] mb-0">
                        {item?.title}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>
    </div>
    </div>
  );
}
