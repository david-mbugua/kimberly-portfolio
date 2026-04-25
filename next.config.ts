import type { NextConfig } from "next";
import { networkInterfaces, type NetworkInterfaceInfo } from "node:os";

function isExternalIPv4(
  network: NetworkInterfaceInfo | undefined
): network is NetworkInterfaceInfo {
  return network?.family === "IPv4" && !network.internal;
}

const localDevOrigins = Object.values(networkInterfaces())
  .flat()
  .filter(isExternalIPv4)
  .map((network) => network.address);

const nextConfig: NextConfig = {
  allowedDevOrigins: localDevOrigins,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "drive.google.com",
        pathname: "/thumbnail",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        pathname: "/d/**",
      },
    ],
  },
};

export default nextConfig;
