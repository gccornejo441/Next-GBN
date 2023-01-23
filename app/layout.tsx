import '#/styles/globals.css';
import { AddressBar } from '#/ui/AddressBar';
import { GlobalNav } from '#/ui/GlobalNav';
import { VercelLogo } from '#/ui/VercelLogo';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="[color-scheme:dark]">
      <head />
      <body className="overflow-y-scroll bg-white">
        <GlobalNav />

        <div>
          <div className="mx-auto max-w-4xl space-y-8 px-2 pt-20 lg:py-8 lg:px-8">
            {/* <div className="rounded-lg bg-vc-border-gradient p-px shadow-lg shadow-black/20">
              <div className="rounded-lg bg-black">
                <AddressBar />
              </div>
            </div> */}

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-20 pb-16 text-center lg:pt-32">
              {children}
            </div>

            <div className="rounded-lg bg-black">
              <Byline />
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}

function FooterLogo() {
  return (
    <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 474.35 474.35"
  >
    <circle
      cx={237.18}
      cy={237.18}
      r={209.12}
      style={{
        fill: "#231f20",
      }}
    />
    <path
      d="M343.24 199.1c7.55-5.67 12.27-14.48 12.27-24.55 0-16.99-13.69-30.68-30.68-30.68h-89.69v36.82h89.69c3.3-.16 5.82-2.83 5.82-6.14s-2.52-5.98-5.82-6.14h-77.42v-12.27h77.58c10.07 0 18.25 8.18 18.25 18.41s-7.87 17.94-17.78 18.41h-41.38v12.27h41.86c9.6.47 17.31 8.65 17.31 18.25 0 10.23-8.18 18.41-18.25 18.41h-77.58v-36.82h12.27v24.55h65.15c3.3-.16 5.82-2.83 5.82-6.14s-2.52-5.98-5.82-6.14h-53.03v-24.55h-36.66v61.37h28.86v42.19l-36.53-42.19h.03v-61.38h-70.49v12.28h58.06v36.81H159.7c-1.89-.1-3.76-.33-5.58-.68-19.82-3.75-34.87-21.22-34.87-42.11s15.05-38.52 34.87-42.28c1.81-.36 3.69-.58 5.58-.68h55.38v12.28h-56.02c-1.69.13-3.35.42-4.94.83-13.26 3.36-22.91 15.66-22.91 29.69s9.75 26.24 22.91 29.72c1.8.49 3.66.82 5.58.97h43.12v-12.28H159.7c-1.98-.27-3.85-.82-5.58-1.61-6.41-2.94-10.79-9.23-10.79-16.8 0-9.28 7.08-17.31 16.37-18.09h67.81v-36.98H159.7c-1.89.07-3.75.25-5.58.52-26.73 3.85-47.15 26.87-47.15 54.71s20.41 50.69 47.15 54.55c1.83.27 3.69.45 5.58.52h20.75v98.52h36.82v-35.25L205 303.26v37.14h-12.27v-85.76h18.88l64.67 74.74v-74.74h12.27v85.76h-18.88L205 265.5v18.88l59.01 68.29h36.82v-98.52h24.01c16.99 0 30.68-13.69 30.68-30.68 0-10.07-4.72-18.88-12.27-24.39Z"
      style={{
        fill: "#fff",
      }}
    />
  </svg>  )
}

function Byline() {
  return (
    <footer className="bg-[white]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="py-16">
          <FooterLogo/>
          <nav className="mt-10 text-sm" aria-label="quick links">
            <div className="-my-1 flex justify-center gap-x-6">
              <a
                className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/#features"
              >
                Features
              </a>
              <a
                className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/#testimonials"
              >
                Testimonials
              </a>
              <a
                className="inline-block rounded-lg py-1 px-2 text-sm text-slate-700 hover:bg-slate-100 hover:text-slate-900"
                href="/#pricing"
              >
                Pricing
              </a>
            </div>
          </nav>
        </div>
        <div className="flex flex-col items-center border-t border-slate-400/10 py-10 sm:flex-row-reverse sm:justify-between">
          <div className="flex gap-x-6">
            <a
              className="group"
              aria-label="GBN Creative on Twitter"
              href="https://twitter.com/GBNCreative"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0 0 22 5.92a8.19 8.19 0 0 1-2.357.646 4.118 4.118 0 0 0 1.804-2.27 8.224 8.224 0 0 1-2.605.996 4.107 4.107 0 0 0-6.993 3.743 11.65 11.65 0 0 1-8.457-4.287 4.106 4.106 0 0 0 1.27 5.477A4.073 4.073 0 0 1 2.8 9.713v.052a4.105 4.105 0 0 0 3.292 4.022 4.093 4.093 0 0 1-1.853.07 4.108 4.108 0 0 0 3.834 2.85A8.233 8.233 0 0 1 2 18.407a11.615 11.615 0 0 0 6.29 1.84"></path>
              </svg>
            </a>
            <a
              className="group"
              aria-label="GBN Creative on GitHub"
              href="https://github.com/gccornejo441"
            >
              <svg
                aria-hidden="true"
                className="h-6 w-6 fill-slate-500 group-hover:fill-slate-700"
              >
                <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2Z"></path>
              </svg>
            </a>
          </div>
          <p className="mt-6 text-sm text-slate-500 sm:mt-0">
            Copyright © 2023 GBN Creative. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
