"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import axios from "axios";
import ForgotPasswordModal from "@/components/Forgotpassword";
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink, BreadcrumbList, BreadcrumbPage, BreadcrumbSeparator } from "@/components/ui/breadcrumb";

const LoginPage = () => {
  const router = useRouter();

  const [showForgotModal, setShowForgotModal] = useState(false);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [selectedRole, setSelectedRole] = useState("CLIENT");

  const [siteData, setSiteData] = useState({ siteUrl: "", callbackUrl: "" });

  const [provider, setProvider] = useState({
    username: "",
    password: "",
    loginFor: "CLIENT",
    siteUrl: "",
    callbackUrl: "",
  });

  // Fetch site data on mount
  useEffect(() => {
    const fetchSiteData = async () => {
      try {
        const res = await axios.get("/api/admin/site-settings");
        console.log(res)
        if (res.status === 200 && res.data[0]) {
          setProvider((prev) => ({
            ...prev,
            siteUrl:res?.data[0]?.siteurl,
            callbackUrl:res?.data[0]?.callbackurl,
          }));
        }
      } catch (error) {
        console.error("Failed to fetch site settings", error);
      }
    };

    fetchSiteData();
  }, []);

  // console.log(provider)
  // Update loginFor when role changes
  useEffect(() => {
    setProvider((prev) => ({
      ...prev,
      loginFor: selectedRole === "ADMIN" ? "ADVISOR" : selectedRole,
    }));
  }, [selectedRole]);

 

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await axios.post("https://redvisionweb.com/api/login/ifa-login", provider);
      if (res.data.status === true) {
        router.push(res.data.url);
      } else {
        setError(res.data.msg);
      }
    } catch (error) {
      setError(error.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="page-header">
                      <div className="container mx-auto">
                          <div className="items-center">
                              <div className="page-header-box">
                                  <h1 className="text-anime-style-2" data-cursor="-opaque">Login</h1>
                                  <Breadcrumb>
                                      <BreadcrumbList className="text-white">
                                          <BreadcrumbItem>
                                              <BreadcrumbLink href="/">Home</BreadcrumbLink>
                                          </BreadcrumbItem>
                                          <BreadcrumbSeparator />
                                          <BreadcrumbItem>
                                              <BreadcrumbPage>Login</BreadcrumbPage>
                                          </BreadcrumbItem>
                                      </BreadcrumbList>
                                  </Breadcrumb>
                              </div>
                          </div>
                      </div>
                  </div>
    <div className="main_section">
      <div className="max-w-screen-xl min-h-[500px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 bg-[var(--rv-secondary)] rounded-2xl shadow-lg overflow-hidden">
        {/* Left Section */}
        <div className="flex flex-col justify-center md:px-10">
          <h2 className="text-sm font-medium text-center text-gray-600 mt-4 uppercase">AMFI Registered Mutual Fund Distributor</h2>
          <h1 className="md:text-4xl text-2xl font-bold text-center mt-4">
            <span className="text-[var(--rv-primary)]">
              Every Investment <br /> A Step Closer to Your <u>Dreams</u>
            </span>
          </h1>
          <p style={{ marginBottom: 0 }} className="mt-5 text-center text-gray-500">
  Don’t have an account?
</p>

          <h2 className=" md:text-2xl text-center font-bold mt-3 uppercase">To create an account download the app now!</h2>
          <div className="flex flex-col md:flex-row  items-center justify-center gap-5 mt-5">
          <Link  href={"https://play.google.com/store/apps"} target="_blank" rel="noopener noreferrer" className="cursor-pointer">
          <button
            className="text-white text-2xl font-semibold px-10 py-6 rounded-2xl cursor-pointer"
            style={{
              backgroundImage: `url(/Playstore.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minWidth: "200px", // Ensures button width increases
            }}
          >
            
          </button>
        </Link>
        <Link  href={"https://apps.apple.com/us/app"} target="_blank" rel="noopener noreferrer" className="cursor-pointer ">
          <button
            className="text-white text-2xl font-semibold px-10 py-6 rounded-2xl cursor-pointer"
            style={{
              backgroundImage: `url(/Appstore.png)`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              minWidth: "200px", // Ensures button width increases
            }}
          >
            
          </button>
        </Link>
         </div>
       
          {/* <div className="mt-10 rounded-xl overflow-hidden relative bg-red-400 w-full h-[155px]">
            <img src="/images/login-2.webp" alt="About" className="object-cover h-full w-full" />
          </div> */}
        </div>

        {/* Right Section */}
        <div className="relative flex items-center bg-white justify-center  md:min-h-[400px]">
          <img src="/login 1.svg" alt="Login Background" className="absolute inset-0 w-full h-full object-cover hidden md:block " />  {/* /images/login-1.webp*/}
          <div className="relative bg-white p-6 rounded-xl w-full md:w-56 md:mt-10 md:mr-8 shadow-lg z-10">
            <h3 className="text-center text-sm font-medium">Login to your account</h3>
            <form onSubmit={handleSubmit} className="mt-4 space-y-3">
              <select
                value={selectedRole}
                onChange={(e) => setSelectedRole(e.target.value)}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              >
                <option value="CLIENT">Client</option>
                <option value="EMPLOYEE">Employee</option>
                <option value="ADMIN">Admin</option>
              </select>
              <input
                type="text"
                placeholder="Username"
                value={provider.username}
                onChange={(e) => setProvider({ ...provider, username: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <input
                type="password"
                placeholder="Password"
                value={provider.password}
                onChange={(e) => setProvider({ ...provider, password: e.target.value })}
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm"
              />
              <div className="flex justify-end items-end text-xs text-gray-600">
                <button type="button" onClick={() => setShowForgotModal(true)} className="text-black underline">
                  Forgot your password?
                </button>
              </div>
              {error && <div className="text-red-600 text-xs">{error}</div>}
              <button
                type="submit"
                className="w-full bg-[--rv-primary] text-white py-2 rounded hover:bg-gray-800 disabled:opacity-60"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Forgot Password Modal */}
      <ForgotPasswordModal
        isOpen={showForgotModal}
        onClose={() => setShowForgotModal(false)}
        logintype={selectedRole === "ADMIN" ? "ADVISOR" : selectedRole}
      />
    </div>
    </div>
  );
};

export default LoginPage;
