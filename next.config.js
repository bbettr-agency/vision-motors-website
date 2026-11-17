/** @type {import('next').NextConfig} */

// Security headers (GEO audit 2026-11-17 — only HSTS was being sent).
// The CSP is deliberately scoped to directives that cannot break the site
// (framing, <base>, plugins, form targets); it does not restrict scripts,
// styles or connections, which Next.js inline bootstrapping and the booking
// form's fetch() rely on. Tighten script-src only with nonces + testing.
const securityHeaders = [
  {
    key: "Content-Security-Policy",
    value: "frame-ancestors 'self'; base-uri 'self'; object-src 'none'; form-action 'self'",
  },
  { key: "X-Frame-Options", value: "SAMEORIGIN" },
  { key: "X-Content-Type-Options", value: "nosniff" },
  { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
  {
    key: "Permissions-Policy",
    value: "camera=(), microphone=(), geolocation=(), payment=(), usb=(), interest-cohort=()",
  },
];

const nextConfig = {
  reactStrictMode: true,
  images: {
    // No remote hosts. Every image is a real asset in /public per SYSTEM/08.
    remotePatterns: [],
  },
  async headers() {
    return [{ source: "/:path*", headers: securityHeaders }];
  },
};

module.exports = nextConfig;
