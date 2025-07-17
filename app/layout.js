import { Poppins } from "next/font/google";
import "./globals.css";
import RenewalPopup from "@/components/renewalPopup";
import { SubscriptionProvider } from "@/context/SubscriptionContext";
import Script from "next/script";
import { SpeedInsights } from "@vercel/speed-insights/next"

const poppins = Poppins({
  subsets: ["latin"],
  display: "swap",
  weight: ["400", "600", "700"], // You can adjust the weights as needed
});

export const dynamic = "force-dynamic";
export const metadata = {
  title: {
    default: "uspminvest",
    template: "%s - uspminvest",
  },
  description:
    "Welcome to uspminvest. Trusted platform for investing in mutual funds across equity, debt, and ELSS. Start SIPs, track portfolio growth, and build long-term wealth with expert guidance. Simple, safe, and SEBI-compliant.",
  twitter: {
    card: "summary_large_image",
  },
  author: "uspminvest",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable}`}>
        <SubscriptionProvider>
  <SpeedInsights/>
          {/* <RenewalPopup /> */}
          <div className="bg-white">
            {children}
          </div>
        </SubscriptionProvider>
      </body>
    </html>
  );
}
