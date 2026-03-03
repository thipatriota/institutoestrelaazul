import { dirname } from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = dirname(fileURLToPath(import.meta.url));

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
  }
};

export default nextConfig;
