import { demos } from '#/lib/demos';
import { HeroScribble } from '#/ui/HeroScribble';
import Link from 'next/link';

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-black sm:text-7xl">
        Marketing{' '}
        <span className="relative whitespace-nowrap text-[#019D8A]">
          <HeroScribble />
          <span className="relative">made simple</span>
        </span>{' '}
        for small businesses.
      </h1>
      <div className="mt-10 flex justify-center gap-x-6">
        <a
          className="group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-black text-white hover:bg-teal-1000 hover:text-black active:bg-gray-800 active:text-slate-300 focus-visible:outline-gray-900"
          href="/register"
        >
          Get 6 months free
        </a>
        <a
          className="group inline-flex ring-1 items-center justify-center rounded-full py-2 px-4 text-sm focus:outline-none ring-slate-200 text-slate-700 hover:text-black hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
          href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
        >
          <svg
            aria-hidden="true"
            className="h-3 w-3 flex-none fill-teal-1000 group-active:fill-current"
          >
            <path d="m9.997 6.91-7.583 3.447A1 1 0 0 1 1 9.447V2.553a1 1 0 0 1 1.414-.91L9.997 5.09c.782.355.782 1.465 0 1.82Z"></path>
          </svg>
          <span className="ml-3">Watch video</span>
        </a>
      </div>
      {/* <div className="space-y-10 text-white">
        {demos.map((section) => {
          return (
            <div key={section.name} className="space-y-5">
              <div className="text-xs font-semibold uppercase tracking-wider text-gray-400">
                {section.name}
              </div>

              <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
                {section.items.map((item) => {
                  return (
                    <Link
                      href={`/${item.slug}`}
                      key={item.name}
                      className="group block space-y-1.5 rounded-lg bg-gray-900 px-5 py-3 hover:bg-gray-800"
                    >
                      <div className="font-medium text-gray-200 group-hover:text-gray-50">
                        {item.name}
                      </div>

                      {item.description ? (
                        <div className="line-clamp-3 text-sm text-gray-400 group-hover:text-gray-300">
                          {item.description}
                        </div>
                      ) : null}
                    </Link>
                  );
                })}
              </div>
            </div>
          );
        })}
      </div> */}
    </div>
  );
}
