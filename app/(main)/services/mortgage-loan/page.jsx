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
  title: "Mortgage Loans",
  description:
    "Unlock the value of your property with tailored mortgage loan solutions for business, personal, or housing needs.",
};

const MortgageLoans = async () => {
     const sitedata=await getSiteData()
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                Mortgage Loans
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
                    <BreadcrumbPage>Mortgage Loans</BreadcrumbPage>
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
          Secure Funds with the Power of Your Property
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Mortgage loans are ideal for individuals and businesses looking to
            unlock liquidity by pledging residential or commercial property. At
            {sitedata.websiteName}, we offer mortgage solutions with low interest rates, high
            loan amounts, and flexible repayment terms to meet your needs.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you want to expand your business, consolidate debt, fund
            education, or handle personal emergencies—our mortgage loans offer a
            reliable and secure way to raise funds using your property.
          </p>
        </div>

        {/* Types of Mortgage Loans */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Mortgage Loans We Offer
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Loan Against Property:</strong>
              <span className="ml-2">
                Pledge your residential or commercial property to raise funds.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Home Mortgage Loan:</strong>
              <span className="ml-2">
                Avail financing to purchase or construct a new house.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Commercial Property Loan:</strong>
              <span className="ml-2">
                Loans for business use by mortgaging commercial buildings.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Balance Transfer with Top-Up:</strong>
              <span className="ml-2">
                Transfer existing loan to {sitedata.websiteName} and avail additional funding.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Mortgage Loans
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">High Loan Value:</strong>
              <span className="ml-2">
                Get up to 75% of the property’s market value as a loan.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Competitive Interest Rates:</strong>
              <span className="ml-2">
                Enjoy low interest rates with no hidden charges.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Flexible Tenure:</strong>
              <span className="ml-2">
                Repayment options from 5 to 20 years as per your convenience.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Minimal Documentation:</strong>
              <span className="ml-2">
                Simple paperwork and doorstep document pickup.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">End-to-End Support:</strong>
              <span className="ml-2">
                From valuation to disbursement, our experts are here to assist you.
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Need funds for business, education, or personal needs? Leverage your
            property's value with {sitedata.websiteName}’s flexible mortgage loan offerings.
          </p>
          <Link href="/login" className="btn-default btn-highlighted">
            Apply for a Mortgage Loan
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MortgageLoans;
