import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { MotionConfig } from "framer-motion";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { Nav } from "@/components/site/Nav";
import { Footer } from "@/components/site/Footer";
import { PROFILE, SITE_URL, absoluteUrl } from "@/data/portfolio";

const OG_IMAGE = absoluteUrl("/og.png");

const PERSON_JSON_LD = JSON.stringify({
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  url: SITE_URL,
  image: OG_IMAGE,
  jobTitle: PROFILE.role,
  worksFor: { "@type": "Organization", name: PROFILE.currentCompany },
  alumniOf: { "@type": "CollegeOrUniversity", name: "Easwari Engineering College" },
  address: { "@type": "PostalAddress", addressLocality: "Chennai", addressCountry: "IN" },
  email: `mailto:${PROFILE.email}`,
  sameAs: [PROFILE.linkedin, PROFILE.github],
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    name: PROFILE.certification.name,
    url: PROFILE.certification.url,
  },
  knowsAbout: [
    "Databricks",
    "Apache Spark",
    "PySpark",
    "SQL",
    "Delta Lake",
    "Unity Catalog",
    "Azure",
    "AWS",
    "Terraform",
    "Power BI",
    "Data Warehousing",
    "Retrieval-Augmented Generation",
  ],
});

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Error 404 — route not resolved
        </div>
        <h1 className="mt-4 text-7xl font-semibold text-gradient">404</h1>
        <p className="mt-4 text-sm text-muted-foreground">
          This endpoint does not exist in the current deployment.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Return home
          </Link>
        </div>
      </div>
    </div>
  );
}

function ErrorComponent({ error, reset }: { error: unknown; reset: () => void }) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <div className="mono text-[10px] uppercase tracking-[0.24em] text-muted-foreground">
          Runtime exception
        </div>
        <h1 className="mt-4 text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong. You can retry or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-border bg-background px-4 py-2 text-sm text-foreground hover:bg-white/[0.04]"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Lokesh Devaraj — Data Engineer · Databricks, PySpark, Azure & AWS" },
      {
        name: "description",
        content:
          "Databricks Certified Data Engineer at Presidio. I build Lakehouse platforms, ETL/ELT pipelines and dimensional models on Databricks, PySpark and SQL across Azure and AWS, plus AI-assisted analytics with RAG and Claude MCP.",
      },
      { name: "author", content: "Lokesh Devaraj" },
      { property: "og:site_name", content: "Lokesh Devaraj" },
      { property: "og:title", content: "Lokesh Devaraj — Data Engineer" },
      {
        property: "og:description",
        content:
          "Databricks Certified Data Engineer. Lakehouse platforms on Azure and AWS, financial analytics for a 17-entity group, and AI on enterprise data.",
      },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG_IMAGE },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      {
        property: "og:image:alt",
        content:
          "Lokesh Devaraj, Data Engineer: Databricks Certified, Lakehouse platforms on Azure and AWS",
      },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Lokesh Devaraj — Data Engineer" },
      {
        name: "twitter:description",
        content:
          "Databricks Certified Data Engineer. Lakehouse platforms on Azure and AWS, financial analytics for a 17-entity group, and AI on enterprise data.",
      },
      { name: "twitter:image", content: OG_IMAGE },
      { name: "theme-color", content: "#070B14" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.svg", type: "image/svg+xml" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Space+Grotesk:wght@500;600;700&family=JetBrains+Mono:wght@400;500&display=swap",
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: PERSON_JSON_LD }} />
      </head>
      <body className="min-h-screen bg-background text-foreground antialiased">
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();
  return (
    <QueryClientProvider client={queryClient}>
      <MotionConfig reducedMotion="user">
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[60] focus:rounded-md focus:bg-white focus:px-3 focus:py-2 focus:text-sm focus:text-black"
        >
          Skip to content
        </a>
        <Nav />
        <main id="main" className="min-h-screen">
          <Outlet />
        </main>
        <Footer />
      </MotionConfig>
    </QueryClientProvider>
  );
}
