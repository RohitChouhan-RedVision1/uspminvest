"use client";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";
import axios from "axios";
import React, { useEffect, useState } from "react";

const CommissionDisclosures = () => {
    const [commissionData, setCommissionData] = useState([]);
    const [disclosureText, setDisclosureText] = useState('');
    const [disclosureDescription, setDisclosureDescription] = useState('');
    const [disclaimerText, setDisclaimerText] = useState('');

    useEffect(() => {
        const fetchServices = async () => {
            try {
                const response = await axios.get(`${process.env.NEXT_PUBLIC_DATA_API}/api/open-apis/commission-disclosures?apikey=${process.env.NEXT_PUBLIC_API_KEY}`);
                if (response.status === 200 && response.data && response.data[0]) {
                    const data = response.data[0];
                    const parsedData = parseDisclosureData(data.disclosure);
                    setCommissionData(parsedData);
                } else {
                    console.error("Invalid data format:", response.data);
                    alert("Failed to fetch services. Please try again.");
                }
            } catch (error) {
                console.error("Error fetching services:", error);
                alert("An error occurred while fetching services. Please try again.");
            }
        };

        fetchServices();
    }, []);

    const parseDisclosureData = (disclosureText) => {
        const lines = disclosureText.split("\n").filter(line => line.trim() !== "");
        setDisclosureText(lines[0]);
        setDisclosureDescription(lines[1]);
        setDisclaimerText(lines[16]);
        const schemeData = lines.slice(3, 16).map(line => {
            const columns = line.split("\t"); // Split by tab
            return {
                type: columns[0],
                year1: columns[1],
                year2: columns[2],
            };
        });

        return schemeData;
    };

    return (
        <section>
            <div className="page-header">
                    <div className="container mx-auto">
                      <div className="items-center">
                        <div className="page-header-box">
                          <h1 className="text-anime-style-2" data-cursor="-opaque">
                            Commission disclosure
                          </h1>
                          <Breadcrumb>
                            <BreadcrumbList className="text-white">
                              <BreadcrumbItem>
                                <BreadcrumbLink href="/">Home</BreadcrumbLink>
                              </BreadcrumbItem>
                              <BreadcrumbSeparator />
                              <BreadcrumbItem>
                                <BreadcrumbPage>Commission disclosure</BreadcrumbPage>
                              </BreadcrumbItem>
                            </BreadcrumbList>
                          </Breadcrumb>
                        </div>
                      </div>
                    </div>
                  </div>
            <div className="container mx-auto main_section">
                <div className=" ">
                    {/* Static Header Text */}
                    <h1 className="text-center text-lg font-bold mb-5">
                        {disclosureText || "Commission disclosure under SEBI circular SEBI/IMD/CIR No.4 /168230/09"}
                    </h1>

                    {/* API Data Content */}
                    <p className="mb-4 text-center">
                        {disclosureDescription || "The details of the commission earned by us from various Asset Management Companies (AMCs) are as below:"}
                    </p>
                    {/* Table for Commission Data */}
                    <div className="overflow-x-auto">
                        <table className="w-full border-collapse border border-[var(--rv-primary)] text-sm text-left">
                            <thead className="bg-[var(--rv-primary)] text-white">
                                <tr>
                                    <th className="border border-[var(--rv-primary)] px-4 py-2">Scheme Type</th>
                                    <th className="border border-[var(--rv-primary)] px-4 py-2">Trail 1st Year</th>
                                    <th className="border border-[var(--rv-primary)] px-4 py-2">Trail 2nd Year Onwards</th>
                                </tr>
                            </thead>
                            <tbody>
                                {commissionData.map((item, index) => (
                                    <tr key={index} className={index % 2 === 0 ? "bg-[var(--rv-secondary)]" : ""}>
                                        <td className="border border-[var(--rv-primary)] px-4 py-2">{item.type}</td>
                                        <td className="border border-[var(--rv-primary)] px-4 py-2">{item.year1}</td>
                                        <td className="border border-[var(--rv-primary)] px-4 py-2">{item.year2}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>

                    {/* Display Disclaimer Text Dynamically */}
                    <div className="mt-6 text-justify">
                        <h2 className="font-bold text-lg">Disclaimer:</h2>
                        <p className="whitespace-pre-wrap break-words">{disclaimerText || "*Investments in mutual funds are subject to market risk and customers should read the scheme-related documents / key information documents of the Mutual Fund products carefully before investing. This is on a best-effort basis and rates are updated as and when actual rates are received from AMCs. This is for information purposes only and does not represent any financial or other advice. The information contained in this presentation is general in nature. The client acknowledges that the prices and net asset values of the mutual fund schemes are subject to fluctuation based on the factors and forces affecting the capital markets. Past performance of the sponsors, mutual funds, or their affiliates does not indicate or guarantee the future performance of any scheme in any manner, and historical performance, when presented, is purely for reference purposes. This page is an integral part of the document generated by us. Investment proposals are prepared on request of the client for general information and reference purposes. It aims to demonstrate a proposal considering the client’s investment objective and investment preferences designed based on information provided by the client. The proposal is purely on a non-binding basis and the client is free to accept or reject the proposal. We shall not be held responsible for any direct or indirect loss caused by relying on this information. The client is free to seek the opinion of the legal, investment, and taxation advisor for making investment decisions."}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CommissionDisclosures;
