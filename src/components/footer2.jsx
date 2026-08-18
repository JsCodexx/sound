

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
      title: "Product",
      links: [
        { name: "Overview", href: "#" },
        { name: "Pricing", href: "#" },
        { name: "Marketplace", href: "#" },
        { name: "Features", href: "#" },
        { name: "Integrations", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { name: "About", href: "#" },
        { name: "Team", href: "#" },
        { name: "Blog", href: "#" },
        { name: "Careers", href: "#" },
        { name: "Contact", href: "#" },
      ],
    },
    {
      title: "Support",
      links: [
        { name: "Help center", href: "#" },
        { name: "Documentation", href: "#" },
        { name: "Status", href: "#" },
        { name: "Community", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { name: "Guides", href: "#" },
        { name: "Templates", href: "#" },
        { name: "Sales", href: "#" },
        { name: "Advertise", href: "#" },
      ],
    },
  ],
  copyright: "© 2024 Shadcnblocks.com. All rights reserved.",
  legalLinks: [
    { name: "Terms and Conditions", href: "#" },
    { name: "Privacy Policy", href: "#" },
  ],
};

const MAX_SECTIONS = 4;

const Footer2 = (props) => {
  const { logo, description, sections, copyright, legalLinks, className } = {
    ...defaultProps,
    ...props,
  };

  const visibleSections = (sections ?? []).slice(0, MAX_SECTIONS);

  return (
    <section className={cn(className)}>
      <div className="container mx-auto w-full">
        <footer >
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-6 py-10 text-white bg-[#232323] ">
            <div className="col-span-2 mb-8 lg:mb-0">
              <div className="flex flex-col gap-4 items-start ml-10 lg:justify-start">

                <h1 className="h-7 dark:invert text-2xl font-bold  " > LOGO </h1 >
                <p>Subscribe to our newsletter</p>
                <p>Get product updates, company news, and more.</p>
                <button className="bg-[#D74664] w-40 h-10 rounded-sm cursor-pointer">SUBSCRIBE</button>
              </div>

            </div>
            {visibleSections.map((section, sectionIdx) => (
              <div key={sectionIdx}>
                <h3 className="mb-4 text-sm font-semibold tracking-tight">
                  {section.title}
                </h3>
                <ul className="space-y-4 text-sm text-white">
                  {section.links.map((link, linkIdx) => (
                    <li key={linkIdx} className="font-medium hover:text-primary">
                      <a href={link.href}>{link.name}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div
            className="mt-0 flex pl-100 text-center gap-4 bg-black text-white   border-border  text-xs font-medium text-muted-foreground md:flex-row md:items-center">
            <p>{copyright}</p>
            <ul className="flex gap-4 py-3 text-white">
              {legalLinks?.map((link, linkIdx) => (
                <li key={linkIdx} className="underline hover:text-primary">
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </div>
        </footer>
      </div>
    </section>
  );
};

export { Footer2 };
