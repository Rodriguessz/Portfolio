"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type Tab = {
  title: string;
  value: string;
  component: React.ReactNode;
};

type TabsProps = {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
};

export const Tabs = ({
  tabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: TabsProps) => {
  const [activeTab, setActiveTab] = useState<Tab>(tabs[0]);
  const [hovering, setHovering] = useState(false);

  return (
    <>
      {/* Botões das Tabs */}
      <div
        className={cn(
          "flex flex-row items-center justify-center [perspective:1000px] relative overflow-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full",
          containerClassName
        )}
      >
        {tabs.map((tab) => (
          <button
            type="button"
            key={tab.value}
            onClick={() => setActiveTab(tab)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-full cursor-pointer", tabClassName)}
            style={{
              transformStyle: "preserve-3d",
            }}
          >
            {activeTab.value === tab.value && (
              <motion.div
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-gray-200 dark:bg-zinc-800 rounded-full z-0",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white z-10">
              {tab.title}
            </span>
          </button>
        ))}
      </div>

      {/* Conteúdo da Tab ativa */}
      <motion.div
        id="teste"
        key={activeTab.value}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className={cn("w-full", contentClassName)}
      >
        {activeTab.component}
      </motion.div>
    </>
  );
};
