"use client";
import { useScroll, useTransform, motion } from "motion/react";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const ref = useRef(null);
  const containerRef = useRef(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div className="w-full bg-secondary-bg font-sans md:px-10" ref={containerRef}>
      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex flex-col justify-start pt-10 md:pt-20">
            <div className="sticky flex items-center z-40 top-20 self-start w-full mb-8">
              <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-secondary-bg flex items-center justify-center">
                <motion.div 
                  initial={{ backgroundColor: "rgba(100, 116, 139, 0.4)", boxShadow: "none", borderColor: "rgba(100, 116, 139, 0.2)" }}
                  whileInView={{ 
                    backgroundColor: "#00f5c3",
                    boxShadow: "0 0 15px rgba(0,245,195,0.4)",
                    borderColor: "rgba(0,245,195,0.3)" 
                  }}
                  transition={{ duration: 0.5, ease: "easeOut" }}
                  viewport={{ once: true, margin: "-40% 0px -40% 0px" }}
                  className="h-4 w-4 rounded-full border p-2" 
                />
              </div>
              <h3 className="text-2xl md:pl-20 pl-16 md:text-4xl font-bold text-accent-1 font-mono tracking-wide">
                {item.title}
              </h3>
            </div>

            <div className="relative pl-16 md:pl-20 pr-4 w-full">
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: height + "px" }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-gray-600/30 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)]">
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0 w-[2px] bg-gradient-to-t from-accent-2 via-accent-1 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
