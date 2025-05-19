import type { NextConfig } from "next";
import createNextIntlPlugin from 'next-intl/plugin';

export const nextConfig: NextConfig = {
  devIndicators: false,
  images : {
    domains: [
      "api.microlink.io"
    ]
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
