import { Link } from "react-router-dom";
import { cn } from "@/lib/utils";

const defaultProps = {
  logo: {
    url: "https://www.shadcnblocks.com",
    src: "/images/logo/shadcnblocks-logo-word.svg",
    alt: "logo",
    title: "Shadcnblocks.com",
  },
  description: "Finely crafted blocks built with Shadcn UI.",
  sections: [
    {
      title: "Sounds",
      links: [
        { name: "Overview", href: "#" },
        { name: "Browse the Catalog", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Trending sample packs", href: "#" },
        { name: "What’s new", href: "#" },
      ],
    },
    {
      title: "Pricing",
      links: [
        { name: "Sound+", href: "#" },
        { name: "Creater", href: "#" },
        { name: "Creater+", href: "#" },

      ],
    },
    {
      title: "FAQS",
      links: [
        { name: "Download", href: "#" },
        { name: "Payment", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Register", href: "#" },
      ],
    },
    {
      title: "About",
      links: [
        { name: "Plans", href: "#" },

      ],
    },
  ],
  copyright: "© 2023 company.com All Rights Reserved ",
  legalLinks: [
    { name: "Terms of use", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Contact", href: "#" },
    { name: "Help", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer2 = (props) => {
  const {
    logo,
    description,
    sections,
    copyright,
    legalLinks,
    className,
  } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn("w-full", className)}>
      <div className="container mx-auto w-full  md:px-4 sm:px-6 lg:px-0">
        <footer>

          <div
            className="
              grid
              grid-cols-1
              gap-10
              bg-[#232323]
              px-6
              py-10
              text-white
              sm:grid-cols-2
              sm:px-8
              lg:grid-cols-6
              lg:gap-8
              lg:px-10
              lg:py-12
            "
          >

            <div className="sm:col-span-2 lg:col-span-2">
              <div className="flex flex-col items-start gap-4">
                <h1 className="text-2xl font-bold">
                  LOGO
                </h1>

                <p className="text-base font-medium">
                  Subscribe to our newsletter
                </p>

                <p className="max-w-sm text-sm leading-6 text-gray-300">
                  Get product updates, company news, and more.
                </p>

                <Link to="/subscribe">
                  <button
                    type="button"
                    className="
                      h-10
                      w-40
                      rounded-sm
                      bg-[#D74664]
                      px-4
                      text-sm
                      font-semibold
                      transition-colors
                      hover:bg-[#c63d59]
                      focus:outline-none
                      focus:ring-2
                      focus:ring-[#D74664]
                      focus:ring-offset-2
                      focus:ring-offset-[#232323]
                    "
                  >
                    SUBSCRIBE
                  </button>
                </Link>
              </div>
            </div>


            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>

                <ul className="space-y-3 text-sm text-white">
                  {section.links.map((link, linkIdx) => (
                    <li
                      key={linkIdx}
                      className="font-medium text-gray-300 transition-colors hover:text-white"
                    >
                      <a href={link.href}>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>


          <div
            className="
              flex
              
             pl-105
              gap-3
              bg-black
             
              py-4
              text-center
              text-xs
              font-medium
              text-gray-400
             
              
            "
          >
            <p>
              {copyright}
            </p>

            <ul className="flex gap-3 text-gray-400 pl-5">
              {legalLinks?.map((link, linkIdx) => (
                <li
                  key={linkIdx}
                  className="underline transition-colors hover:text-[#D74664]"
                >
                  <a href={link.href}>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
            <img src="/src/assets/icons.png" alt="" className="ml-15"/>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
