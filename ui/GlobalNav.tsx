'use client';

import { demos, type Item } from '#/lib/demos';
import { NextLogo } from '#/ui/NextLogo';
import Link from 'next/link';
import { useSelectedLayoutSegment } from 'next/navigation';
import { MenuAlt2Icon, XIcon } from '@heroicons/react/solid';
import clsx from 'clsx';
import { useState } from 'react';
import * as React from 'react'

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);

  return (
    <div className="flex w-full flex-row border-b border-gray-800 bg-white lg:bottom-0 lg:border-r lg:border-gray-800 justify-between">
      <div className="flex h-14 items-center py-4 px-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <div className="h-7 w-7 rounded-full border border-white/30 group-hover:border-white/50">
            <NextLogo />
          </div>

          <h3 className="font-semibold tracking-wide text-teal-1000 group-hover:text-black">
           <span className="Gabe Brian Nick">GBN</span> Creative Studio
          </h3>
        </Link>
      </div>
      <button
        type="button"
        className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="font-medium text-teal-1000 group-hover:text-black">
          Menu
        </div>
        {isOpen ? (
          <XIcon className="block w-6 text-black" />
        ) : (
          <MenuAlt2Icon className="block w-6 text-black" />
        )}
      </button>

      <div
        className={clsx('overflow-y-auto lg:static lg:block', {
          'fixed inset-x-0 bottom-0 top-14 mt-px bg-white': isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="px-2 py-5 flex">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-black/80">
                  <div>{section.name}</div>
                </div>

                {/* <div className="space-y-1 border-black border-2 absolute">
                  {section.items.map((item) => (
                    <GlobalNavItem key={item.slug} item={item} close={close} />
                  ))}
                </div> */}
              </div>
            );
          })}
        </nav>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        'block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300',
        {
          'text-black hover:bg-gray-800': !isActive,
          'text-white': isActive,
        },
      )}
    >
      {item.name}
    </Link>
  );
}
