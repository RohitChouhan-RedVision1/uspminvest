"use client";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import { motion } from "framer-motion";

const SubscribCard = ({ amclogos }) => {
   
    return (
        <div className="container mx-auto main_section text-center">
                {/* <motion.h2 initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
          variants={fadeInVariants}
          custom={0}
           className="topheading  text-[#0E314D] ">PARTNERS</motion.h2> */}
<div className="section-title">
  <h3 className="">we are working with</h3>
  <h2 className="" data-cursor="-opaque">
    Reliable partners for <span className="text-[--rv-secondary]">mutual success</span>
  </h2>
  <p data-aos="fade-up" data-aos-anchor-placement="bottom">
    As our valued partner, we believe in building long-term relationships rooted in trust, transparency, and shared goals. With a collaborative approach and proven expertise, we are committed to driving growth — together.
  </p>
</div>

              <Marquee
        speed={60}
        gradient={false}
        pauseOnHover={true}
        className="mt-6"
      >
        {amclogos.map((logo, index) => (
            
                <div
                key={index}
                  className="px-5"
                >
                  <a
                    href={logo.logourl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src={`https://redvisionweb.com/${logo.logo}`}
                      alt={logo.logoname}
                      width={140}
                      height={180}
                      className="opacity-80 hover:opacity-100 transition ease-in-out duration-75"
                    />
                  </a>
                </div>
            
            ))}
      </Marquee>
        </div>
    );
};

export default SubscribCard;