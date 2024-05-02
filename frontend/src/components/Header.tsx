import { useState, Fragment } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import React from "react";
import { useScrollContext } from "./ScrollContext";

const navigation = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#project" },
  { name: "Contact", href: "#contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const refs = useScrollContext();

  const scrollToSection = (refKey) => {
    const ref = refs[refKey];
    if (ref && ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="w-100 fixed left-0 right-0 top-0 z-10">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8 -m-1.5"
        aria-label="Global"
      >
        <a href="#intropage ">
          <div className="lg:flex lg:flex-1 hidden">
            <h1 className="bg-palette-1 rounded-3xl p-3 font-bold ">GV</h1>
          </div>
        </a>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-palette-1"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden lg:flex lg:gap-x-12">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-lg font-semibold leading-6"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>
      <Transition
        show={mobileMenuOpen}
        as={Dialog}
        className="lg:hidden "
        onClose={() => setMobileMenuOpen(false)}
      >
        {" "}
        <Transition.Child
          as={Fragment}
          enter="duration-300 transition ease-in-out duration-500 transform"
          enterFrom="opacity-0 translate-x-2/3"
          enterTo="opacity-100 translate-x-0"
          leave="duration-200 transition ease-in-out duration-500 transform"
          leaveFrom="opacity-100  translate-x-0"
          leaveTo="opacity-0 translate-x-2/3"
        >
          <div className="fixed inset-0 z-10">
            <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-hidden bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
              <div className="flex items-center justify-between">
                <a href="#" className="-m-1.5 p-1.5">
                  <h1 className="bg-palette-1 rounded-3xl p-3 font-bold ">
                    GV
                  </h1>
                </a>
                <button
                  type="button"
                  className="-m-2.5 rounded-md p-2.5 text-gray-700"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close menu</span>
                  <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                </button>
              </div>
              <div className="my-20 flow-root">
                <div className="my-6 divide-y divide-gray-500/10">
                  <div className="space-y-10 py-6 text-center align-middle">
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className="-mx-3 block rounded-lg px-3 py-10 subtitle-text font-semibold leading-7 text-black-900 hover:bg-gray-50"
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </Dialog.Panel>
          </div>
        </Transition.Child>
      </Transition>
    </header>
  );
}
