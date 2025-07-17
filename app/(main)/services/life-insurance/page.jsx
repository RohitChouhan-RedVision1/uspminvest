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
  title: "Life Insurance",
  description:
    "Secure your family’s future with our reliable life insurance solutions tailored to your needs and goals.",
};

const LifeInsurance = async () => {
     const sitedata=await getSiteData()
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                Life Insurance
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
                    <BreadcrumbPage>Life Insurance</BreadcrumbPage>
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
          Protection That Lasts a Lifetime
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            Life insurance ensures that your loved ones remain financially
            secure in your absence. At {sitedata.websiteName}, we help you choose the best
            life insurance policy that aligns with your future goals, lifestyle,
            and family needs.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you want to protect your income, plan for your child’s
            education, or build wealth over time, our life insurance solutions
            give you peace of mind and financial certainty.
          </p>
        </div>

        {/* Types of Life Insurance */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Types of Life Insurance We Offer
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Term Insurance:</strong>
              <span className="ml-2">
                Affordable pure protection plan with large coverage at low premiums.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Whole Life Insurance:</strong>
              <span className="ml-2">
                Lifetime coverage and savings combined in a single plan.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Endowment Plans:</strong>
              <span className="ml-2">
                Offers life cover and maturity benefits to support long-term goals.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">ULIPs (Unit Linked Plans):</strong>
              <span className="ml-2">
                Investment + insurance with market-linked returns.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Child Plans:</strong>
              <span className="ml-2">
                Secure your child&#39;s education and future expenses with guaranteed returns.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our Life Insurance Services
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Expert Guidance:</strong>
              <span className="ml-2">
                Get help selecting the right policy tailored to your financial goals.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Trusted Partners:</strong>
              <span className="ml-2">
                We work with leading life insurers to provide reliable coverage.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Flexible Premium Options:</strong>
              <span className="ml-2">
                Pay monthly, quarterly, or annually as per your convenience.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Quick Claims Support:</strong>
              <span className="ml-2">
                Dedicated help for claim filing and faster settlement.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Tax Benefits:</strong>
              <span className="ml-2">
                Enjoy tax deductions under Section 80C and 10(10D) of the IT Act.
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Don’t wait to protect what matters most. Choose a life insurance
            plan today and give your family the security they deserve—only with {sitedata.websiteName}.
          </p>
          <Link href="/login" className="btn-default btn-highlighted">
            Get Insured Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LifeInsurance;
