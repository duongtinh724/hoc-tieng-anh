"use client";

import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import type { ReactNode } from "react";

interface PracticeAntdProviderProps {
  children: ReactNode;
}

export function PracticeAntdProvider({ children }: PracticeAntdProviderProps) {
  return (
    <AntdRegistry>
      <ConfigProvider
        theme={{
          algorithm: theme.defaultAlgorithm,
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
