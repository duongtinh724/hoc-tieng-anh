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
            colorPrimary: "#1e3a8a",
            colorSuccess: "#16a34a",
            colorError: "#dc2626",
            borderRadius: 10,
            fontFamily: '"Segoe UI", system-ui, -apple-system, sans-serif',
            boxShadow: "0 4px 14px rgba(15, 23, 42, 0.08)",
            boxShadowSecondary: "0 2px 8px rgba(15, 23, 42, 0.06)",
          },
          components: {
            Button: {
              controlHeight: 40,
              fontWeight: 600,
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
