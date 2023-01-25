import { demos } from '#/lib/demos';
import { HeroScribble } from '#/ui/HeroScribble';
import Link from 'next/link';

function Icon() {
  return (
    <svg fill="none" aria-hidden="true" className="h-9 w-9">
      <defs>
        <linearGradient
          id=":rc:"
          x1="11.5"
          x2="36"
          y1="18"
          y2="15.5"
          gradientUnits="userSpaceOnUse"
        >
          <stop offset="0.194" stopColor="#fff"></stop>
          <stop offset="1" stopColor="#6692F1"></stop>
        </linearGradient>
      </defs>
      <path
        stroke="url(#:rc:)"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M30 15l-4 5-4-11-4 18-4-11-4 7-4-5"
      ></path>
    </svg>
  );
}

const cardWrite = [
  {
    id: 0,
    title: 'Marketing',
    subtitle:
      "Maximizing Your Business's Potential with Multi-Tiered Marketing Campaigns",
    discription:
      "Our agency helps grow clients' businesses by providing customized solutions and multi-tiered marketing campaigns to reach target audiences effectively and increase revenue. Our team of experts work with clients to develop a plan for success.",
  },
  {
    id: 1,
    title: 'Branding',
    subtitle: 'Design is Our Passion: Crafting Exceptional Experiences',
    discription:
      "Our agency specializes in managing all aspects of clients' brand identity through advertising, design, and media to achieve measurable results and help their business grow. We offer full-service brand management and help clients stand out from the competition.",
  },
  {
    id: 2,
    title: 'Design',
    subtitle:
      'Stay on top of things with always up-to-date reporting features.',
    discription:
      "Our agency believes in the power of design to create exceptional experiences and pour hearts and souls into every project to craft visually stunning and impactful designs that help clients stand out. We offer full-service design to bring clients' brand to life.",
  },
];

function CardComponent() {
  return (
    <>
      {cardWrite.map((item) => {
        return (
          <div key={item.id} className="relative my-10 text-center md:my-0 xl:text-left">
            <div className="flex justify-center xl:justify-start">
            <div className="w-9 rounded-lg bg-teal-1000">
              <Icon/>
            </div>
            </div>
            <h3 className="mt-6 text-sm font-medium text-teal-1000">
              {item.title}
            </h3>
            <p className="mt-2 font-display text-xl text-black min-h-[110px] lg:min-h-fit">
              {item.subtitle}
            </p>
            <p className="mt-4 text-sm text-gray-700">{item.discription}</p>
          </div>
        );
      })}
    </>
  );
}

export default function Page() {
  return (
    <div className="space-y-8">
      <h1 className="mx-auto max-w-4xl font-display text-5xl font-medium tracking-tight text-black sm:text-7xl">
        Effective{' '}
        <span className="relative whitespace-nowrap text-[#019D8A]">
          <HeroScribble />
          <span className="relative">Marketing Strategy</span>
        </span>{' '}
        for Business Success
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
      <section
        id="secondary-features"
        aria-label="Features for simplifying everyday business tasks"
        className="pt-20 pb-14 sm:pb-20 sm:pt-32 lg:pb-32"
      >
        <div className="mx-auto lg:max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-2xl md:text-center">
            <h2 className="font-display text-3xl tracking-tight text-slate-900 sm:text-4xl">
              Marketing and Branding is a one-stop shop for all your marketing
              needs.
            </h2>
            <p className="mt-4 text-lg tracking-tight text-slate-700">
              Our goal is simple: make sure that your business has everything it
              needs to succeed!
            </p>
          </div>
          <div className="lg:mt-20 block">
            <div
              className="grid lg:grid-cols-3 gap-x-16 xl:gap-x-40"
              role="tablist"
              aria-orientation="horizontal"
            >
              <CardComponent/>
            </div>
          </div>
        </div>
      </section>
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
