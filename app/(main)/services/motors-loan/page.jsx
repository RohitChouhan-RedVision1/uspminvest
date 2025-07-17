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
  title: "Motor Loans",
  description:
    "Get the best motor loan deals with flexible EMI options and quick approvals tailored for your vehicle financing needs.",
};

const MotorLoans = async () => {
     const sitedata=await getSiteData()
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                Motor Loans
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
                    <BreadcrumbPage>Motor Loans</BreadcrumbPage>
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
          Drive Your Dream Vehicle with Ease
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Looking to buy a new or used car or bike? At {sitedata.websiteName}, we offer
            motor loan solutions that are fast, flexible, and affordable. With
            minimal documentation and attractive interest rates, your vehicle
            ownership journey becomes smooth and stress-free.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether it&#39;s a two-wheeler for daily commute or a four-wheeler for
            your family, we help you secure the right financing plan that fits
            your budget and preferences.
          </p>
        </div>

        {/* Types of Motor Loans */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our Motor Loan Options
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">New Vehicle Loans:</strong>
              <span className="ml-2">
                Financing available for brand-new cars and bikes.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Used Vehicle Loans:</strong>
              <span className="ml-2">
                Get loans for certified pre-owned vehicles at attractive terms.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Two-Wheeler Loans:</strong>
              <span className="ml-2">
                Ideal for purchasing bikes and scooters with minimal EMI.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Top-Up Loans:</strong>
              <span className="ml-2">
                Already have a vehicle loan? Get additional funding with ease.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Motor Loans
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Fast Approval:</strong>
              <span className="ml-2">
                Get loan approval within hours with easy online application.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Flexible EMI Plans:</strong>
              <span className="ml-2">
                Choose EMI options that suit your financial comfort.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Low Interest Rates:</strong>
              <span className="ml-2">
                Competitive interest rates with no hidden charges.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Zero Foreclosure Charges:</strong>
              <span className="ml-2">
                Close your loan anytime without extra fees.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Expert Assistance:</strong>
              <span className="ml-2">
                Our team helps you through every step, from documentation to disbursement.
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Turn your driving dreams into reality. Apply now for a quick and
            easy motor loan through {sitedata.websiteName} and hit the road in your new ride.
          </p>
          <Link href="/login" className="btn-default btn-highlighted">
            Apply for a Motor Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MotorLoans;
