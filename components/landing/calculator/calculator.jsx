"use client";

import { useState, useEffect } from "react";
import { Card } from "../../ui/card";
import { Slider } from "../../ui/slider";
import { Button } from "../../ui/button";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Cell,
  PieChart,
  Pie,
} from "recharts";
import axios from "axios";
import { Input } from "@/components/ui/input";

export default function Calculator() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(1000);
  const [expectedReturn, setExpectedReturn] = useState(5);
  const [investmentDuration, setInvestmentDuration] = useState(5);
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const calculateSip = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_DATA_API}/api/calculators/sip-calculator?monthlyInvestment=${monthlyInvestment}&investmentDuration=${investmentDuration}&expectedReturn=${expectedReturn}&apikey=${process.env.NEXT_PUBLIC_API_KEY}`
      );
      if (res.status === 200) {
        const data = res.data;
        const futureValue = data.futureValue;
        const totalInvestment = data.totalInvestment;
      const yearlyData = data.yearlyData;
        setResult({
          futureValue: Number(futureValue?.toFixed(2)),
          totalInvestment: Number(totalInvestment?.toFixed(2)),
        });
        setChartData([
          { name: "Invested Amount", value: totalInvestment },
          { name: "Estimated Return", value: futureValue - totalInvestment },
          { name: "Final Amount", value: futureValue },
        ]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    calculateSip();
  }, [monthlyInvestment, investmentDuration, expectedReturn]);

  // console.log(chartData)
  return (
    <div className="">
      <div className="container mx-auto main_section items-center text-center">
        <div className="section-title text-center mb-10">
          {/* <h3 className="text-anime-style-1">Calculator</h3> */}
          <h2 className="" data-cursor="-opaque">
            SIP <span className="text-[var(--rv-primary)]">calculator</span>
          </h2>
          <p data-aos="fade-up" data-aos-anchor-placement="bottom">
            Use our SIP calculator to estimate your future returns and see the
            power of systematic investing.
          </p>
        </div>

        {/* Input and Bar Chart Section */}
        <div className="flex flex-col gap-4  md:flex-row pt-5">
          {/* Form Card */}
          <div className="w-full md:w-1/2 space-y-8 p-5">
            {/* Monthly Investment */}
            <div>
              <div className="flex justify-between">
                <label className="text-md md:text-xl font-semibold">
                  Monthly investment (₹)
                </label>
                <div className="relative w-32 md:w-48 h-12">
                  <input
                    type="number"
                    value={monthlyInvestment}
                    onChange={(e) =>
                      setMonthlyInvestment(Number(e.target.value))
                    }
                    className="w-full h-full pl-4 border border-[var--rv-primary)] text-black font-bold"
                  />
                  {/* <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[var--rv-primary)]">₹</span> */}
                </div>
              </div>
              <Input
                type="range"
                        min="500"
                        max="50000"
                        step="500"
                        value={monthlyInvestment}
                        onChange={(e) =>
                          setMonthlyInvestment(parseFloat(e.target.value))
                        }
                        className="customRange w-full"
                        style={{
                          "--progress": `${((monthlyInvestment - 500) /
                            (50000 - 500)) *
                            100}%`,
                        }}
              />
            </div>

            {/* Expected Return */}
            <div>
              <div className="flex justify-between">
                <label className="text-md md:text-xl font-semibold">
                  Expected return p.a (%)
                </label>
                <div className="relative w-32 md:w-48 h-12">
                  <input
                    type="number"
                    value={expectedReturn}
                    onChange={(e) => setExpectedReturn(Number(e.target.value))}
                    className="w-full h-full pl-4 border border-[var--rv-primary)] text-black font-bold"
                  />
                  {/* <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[var--rv-primary)]">%</span> */}
                </div>
              </div>
              <Input
                
                  type="range"
                        min="1"
                        max="30"
                        step="0.5"
                        value={expectedReturn}
                        onChange={(e) =>
                          setExpectedReturn(parseFloat(e.target.value))
                        }
                        className="customRange w-full"
                        style={{
                          "--progress": `${((expectedReturn - 1) /
                            (30 - 1)) *
                            100}%`,
                        }}
              />
            </div>

            {/* Duration */}
            <div>
              <div className="flex justify-between">
                <label className="text-md md:text-xl font-semibold">
                  Time period (Y)
                </label>
                <div className="relative w-32 md:w-48 h-12">
                  <input
                    type="number"
                    value={investmentDuration}
                    onChange={(e) =>
                      setInvestmentDuration(Number(e.target.value))
                    }
                    className="w-full h-full pl-4 border border-[var--rv-primary)] text-black font-bold"
                  />
                  {/* <span className="absolute left-2 top-1/2 text-xl transform -translate-y-1/2 text-[var--rv-primary)]">Y</span> */}
                </div>
              </div>
              <Input
              
                   type="range"
                        min="1"
                        max="40"
                        step="1"
                        value={investmentDuration}
                        onChange={(e) =>
                          setInvestmentDuration(e.target.value)
                        }
                        className="customRange w-full"
                        style={{
                          "--progress": `${((investmentDuration - 1) /
                            (40 - 1)) *
                            100}%`,
                        }}
              />
            </div>
          </div>

          {/* Bar Chart Card */}
          <div className="w-full md:w-1/2  p-5">
            {/* <h3 className="text-xl font-bold mb-4">Breakdown in Pie Chart</h3> */}
            <div className=" h-[300px]">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={chartData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={100}
                    // label
                  >
                    {chartData.map((entry, index) => {
                      let fillColor = "#ccc";
                      if (entry.name === "Invested Amount")
                        fillColor = "var(--rv-third)";
                      if (entry.name === "Estimated Return")
                        fillColor = "var(--rv-secondary)";
                      if (entry.name === "Final Amount") fillColor = "var(--rv-primary)";
                      return <Cell key={`cell-${index}`} fill={fillColor} />;
                    })}
                  </Pie>
                </PieChart>
                {/* Legend */}
                <div className="flex justify-center gap-6 ">
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 inline-block rounded-full"
                      style={{ backgroundColor: "var(--rv-third)" }}
                    ></span>
                    <span className="text-sm font-medium">Invested amount</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 inline-block rounded-full"
                      style={{ backgroundColor: "var(--rv-secondary)" }}
                    ></span>
                    <span className="text-sm font-medium">
                      Estimated return
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span
                      className="w-4 h-4 inline-block rounded-full"
                      style={{ backgroundColor: "var(--rv-primary)" }}
                    ></span>
                    <span className="text-sm font-medium">Final amount</span>
                  </div>
                </div>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Pie Chart Section */}

        {/* Summary Cards */}
        <div className="flex flex-col md:flex-row gap-5 md:gap-10 pt-10">
          {result && (
            <>
              <Card className="w-full md:w-1/3 pt-6 border-2 border-[var--rv-primary)] bg-[var(--rv-primary)]">
                <label className="text-white text-xl font-bold">
                  Invested amount (₹)
                </label>
                <p className="text-white font-semibold pt-2">
                  {result.totalInvestment.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </Card>

              <Card className="w-full md:w-1/3 pt-6 border-2 border-[var--rv-primary)] bg-[var(--rv-primary)]">
                <label className="text-white text-xl font-bold">
                  Estimated return (₹)
                </label>
                <p className="text-white font-semibold pt-2">
                  {(result.futureValue - result.totalInvestment).toLocaleString(
                    "en-IN",
                    {
                      minimumFractionDigits: 2,
                      maximumFractionDigits: 2,
                    }
                  )}
                </p>
              </Card>

              <Card className="w-full md:w-1/3 pt-6 border-2 border-[var--rv-primary)] bg-[var(--rv-primary)]">
                <label className="text-white  text-xl font-bold">
                  Final amount (₹)
                </label>
                <p className="text-white  font-semibold pt-2">
                  {result.futureValue.toLocaleString("en-IN", {
                    minimumFractionDigits: 2,
                    maximumFractionDigits: 2,
                  })}
                </p>
              </Card>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
