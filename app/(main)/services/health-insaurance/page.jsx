import React from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { FaRegCheckCircle } from "react-icons/fa";
import { getSiteData } from "@/lib/functions";

export const metadata = {
  title: "Health Insurance",
  description:
    "Protect yourself and your family from rising medical costs with comprehensive health insurance plans tailored for every stage of life.",
};

const HealthInsurance = async () => {
     const sitedata=await getSiteData()
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                Health Insurance
              </h1>
              <Breadcrumb>
                <BreadcrumbList className="text-white">
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Home</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbLink href="/">Services</BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator />
                  <BreadcrumbItem>
                    <BreadcrumbPage>Health Insurance</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-screen-xl mx-auto main_section">
        {/* Introduction */}
        <p className="text-2xl font-semibold text-gray-800 mb-4">
          Stay Protected, Stay Healthy
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Health insurance is not just an option—it’s a necessity in today’s world of rising healthcare costs. At {sitedata.websiteName}, we offer comprehensive health insurance plans for individuals, families, and senior citizens with wide coverage and easy claim processes.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Our plans provide financial security in medical emergencies, planned surgeries, hospitalizations, and critical illnesses—so you can focus on recovery, not the bills.
          </p>
        </div>

        {/* Types of Health Insurance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Health Insurance Plans
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Individual Health Plan:</strong>
              <span className="ml-2">
                Covers hospitalization and medical expenses for one individual.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Family Floater Policy:</strong>
              <span className="ml-2">
                One policy that covers the entire family under a single sum insured.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Senior Citizen Plans:</strong>
              <span className="ml-2">
                Specially designed for individuals above 60 years of age.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Critical Illness Cover:</strong>
              <span className="ml-2">
                Lump sum payout for life-threatening diseases like cancer, heart attack, etc.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Top-Up & Super Top-Up Plans:</strong>
              <span className="ml-2">
                Enhance your base coverage at minimal cost.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Health Insurance Services
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Cashless Network Hospitals:</strong>
              <span className="ml-2">
                Access 10,000+ hospitals with 24x7 cashless claim assistance.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Instant Policy Issuance:</strong>
              <span className="ml-2">
                Hassle-free digital onboarding with same-day issuance.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Wide Coverage:</strong>
              <span className="ml-2">
                Cover for pre- & post-hospitalization, daycare, ambulance, and more.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Affordable Premiums:</strong>
              <span className="ml-2">
                Premiums starting as low as ₹8/day with tax benefits.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Expert Guidance:</strong>
              <span className="ml-2">
                Dedicated advisors to help you choose the right plan.
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Don&#39;t let medical expenses catch you off guard. Secure your health and finances with a trusted insurance partner—choose {sitedata.websiteName} Health Insurance today.
          </p>
          <Link href="/login" className="btn-default btn-highlighted">
            Get Health Cover Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HealthInsurance;
