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
  title: "PAN Services",
  description:
    "Simplify your PAN card application, update, and correction process with our expert assistance.",
};

const PANServices = async () => {
    const sitedata=await getSiteData()
  return (
    <div>
      <div className="page-header">
        <div className="container mx-auto">
          <div className="items-center">
            <div className="page-header-box">
              <h1 className="text-anime-style-2" data-cursor="-opaque">
                PAN Services
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
                    <BreadcrumbPage>PAN Services</BreadcrumbPage>
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
          Quick. Reliable. Hassle-Free.
        </p>
        <div className="mb-8">
          <p className="text-gray-700">
            A PAN (Permanent Account Number) is a vital identity and tax
            document for Indian citizens and entities. At {sitedata.websiteName}, we make the
            process of applying for a new PAN card or updating/correcting your
            existing PAN simple, fast, and transparent.
          </p>
        </div>

        {/* Description */}
        <div className="mb-8">
          <p className="text-gray-700">
            Whether you are an individual, business owner, or NRI, our
            streamlined services ensure your PAN-related tasks are completed
            accurately with complete documentation support.
          </p>
        </div>

        {/* Types of PAN Services */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Our PAN Services
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">New PAN Application:</strong>
              <span className="ml-2">
                Hassle-free application process for individuals and businesses.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Correction/Update:</strong>
              <span className="ml-2">
                Modify incorrect name, DOB, or address on your existing PAN.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">Reprint/Duplicate PAN:</strong>
              <span className="ml-2">
                Lost your PAN card? Get a reprinted copy issued quickly.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2">
              <FaRegCheckCircle className="text-green-600 inline-block text-2xl align-top" />
              <strong className="inline-block ml-2">PAN for NRIs:</strong>
              <span className="ml-2">
                Apply PAN card even while living outside India with full support.
              </span>
            </li>
          </ul>
        </div>

        {/* Why Choose Us */}
        <div className="mb-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Why Choose Our PAN Services
          </h2>
          <ul className="list-none pl-5 space-y-4 text-gray-700">
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Expert Assistance:</strong>
              <span className="ml-2">
                Our team ensures your application meets all legal requirements.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Quick Processing:</strong>
              <span className="ml-2">
                Fast turnaround time for application and corrections.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Document Verification:</strong>
              <span className="ml-2">
                We guide and verify your documents to avoid delays.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">Affordable Fees:</strong>
              <span className="ml-2">
                Transparent and competitive pricing for all services.
              </span>
            </li>
            <li className="inline-block w-full items-start gap-2 align-top">
              <FaRegCheckCircle className="text-green-600 text-2xl inline-block align-top" />
              <strong className="inline-block ml-2">End-to-End Support:</strong>
              <span className="ml-2">
                From application to delivery, we’re with you at every step.
              </span>
            </li>
          </ul>
        </div>

        {/* Conclusion and CTA */}
        <div className="text-center mt-8">
          <p className="text-gray-700 mb-4">
            Apply, update, or reissue your PAN card seamlessly with {sitedata.websiteName}.
            We&#39;re here to simplify your experience and ensure timely service
            delivery.
          </p>
          <Link href="/login" className="btn-default btn-highlighted">
            Get PAN Services Now
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PANServices;
