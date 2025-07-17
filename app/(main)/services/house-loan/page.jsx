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
  title: "House Loans",
  description:
    "Get affordable and flexible house loans to buy, build, or renovate your dream home with {sitedata.websiteName}'s expert guidance.",
};

const HouseLoans = async () => {
     const sitedata=await getSiteData()
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                House Loans
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
                    <BreadcrumbPage>House Loans</BreadcrumbPage>
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
          Build Your Dream Home with Ease
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you’re buying your first house, constructing a new one, or
            renovating your current home—{sitedata.websiteName} offers home loan solutions with
            competitive rates, flexible repayment, and expert support at every step.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Our housing loans are designed to meet your needs—be it buying a flat,
            a villa, a plot, or upgrading your current home. We help make your
            homeownership journey simple and stress-free.
          </p>
        </div>

        {/* Types of House Loans */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of House Loans We Offer
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Home Purchase Loan:</strong>
              <span className="ml-2">
                Buy a ready-to-move-in or under-construction property.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Home Construction Loan:</strong>
              <span className="ml-2">
                Get funding to construct your dream home on your own plot.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Plot Purchase + Construction Loan:</strong>
              <span className="ml-2">
                Buy a residential plot and construct on it within a specified time.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Home Renovation Loan:</strong>
              <span className="ml-2">
                Renovate, repair, or upgrade your existing house with easy EMIs.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Balance Transfer:</strong>
              <span className="ml-2">
                Transfer your existing home loan to us at lower interest rates.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our House Loan Services
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Attractive Interest Rates:</strong>
              <span className="ml-2">
                Competitive rates with flexible repayment tenures up to 30 years.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Fast Processing:</strong>
              <span className="ml-2">
                Quick approval and disbursal to help you move in faster.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Minimal Documentation:</strong>
              <span className="ml-2">
                Simple paperwork and end-to-end application support.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Pre-Approved Loans:</strong>
              <span className="ml-2">
                Special loan offers for salaried and self-employed professionals.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Dedicated Relationship Manager:</strong>
              <span className="ml-2">
                Personalized guidance from inquiry to key handover.
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Take the first step toward your new home. Let {sitedata.websiteName} make homeownership simple, fast, and affordable with customized house loan solutions.
          </p>
          <Link href="/login" className="btn-default btn-highlighted">
            Apply for a House Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HouseLoans;
