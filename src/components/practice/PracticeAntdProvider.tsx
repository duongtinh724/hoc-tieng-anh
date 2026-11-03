"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import type { ReactNode } from "react";
import { useSyncExternalStore } from "react";
import { readTheme } from "@/lib/theme";

function subscribe(onChange: () => void) {
  window.addEventListener("theme-change", onChange);
  return () => window.removeEventListener("theme-change", onChange);
}

interface PracticeAntdProviderProps {
  children: ReactNode;
}

export function PracticeAntdProvider({ children }: PracticeAntdProviderProps) {
  const mode = useSyncExternalStore(subscribe, readTheme, () => "light" as const);

  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: mode === "dark" ? theme.darkAlgorithm : theme.defaultAlgorithm,
          token: {
            colorPrimary: "#f05a94",
            colorSuccess: "#1dc638",
            colorError: "#ea001b",
            colorText: mode === "dark" ? "#fff2f7" : "#051d4c",
            colorLink: "#009ada",
            borderRadius: 6,
            fontSize: 14,
            fontFamily: '-apple-system, BlinkMacSystemFont, "SF Pro Display", "Segoe UI", sans-serif',
            controlHeight: 36,
            boxShadow: "0 4px 14px rgba(5, 29, 76, 0.08)",
            boxShadowSecondary: "0 2px 8px rgba(5, 29, 76, 0.06)",
          },
          components: {
            Button: {
              controlHeight: 36,
              controlHeightLG: 40,
              fontWeight: 600,
              borderRadius: 6,
            },
            Card: {
              paddingLG: 18,
            },
            Tag: {
              borderRadiusSM: 999,
            },
          },
        }}
      >
        {children}
      </ConfigProvider>
    </AntdRegistry>
  );
}
