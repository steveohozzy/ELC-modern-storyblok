import Link from "next/link";
import Image from "next/image";
import { headers } from "next/headers";

import { getStoryblokApi, resolveLink } from "@/lib/storyblok";

import InstagramIcon from "./icons/InstagramIcon";
import FacebookIcon from "./icons/FacebookIcon";
import YoutubeIcon from "./icons/YouTubeIcon";

export default async function Footer() {
  const storyblokApi = getStoryblokApi();

  const [{ data: footerData }, { data: headerData }] =
    await Promise.all([
      storyblokApi.get("cdn/stories/globals/footer", {
        version: "draft",
      }),
      storyblokApi.get("cdn/stories/globals/header", {
        version: "draft",
      }),
    ]);

  const footer =
    footerData?.story?.content?.body?.find(
      (blok) => blok.component === "footer"
    ) || {};

  const header =
    headerData?.story?.content?.body?.find(
      (blok) => blok.component === "HeaderSettings"
    ) || {};

  const menuItems = header.Navigation || [];

  const pathname =
    (await headers()).get("x-pathname") || "/";


  function getNavHref(item) {
    const pageLink = resolveLink(item.Link);

    if (item.HomepageAnchor) {
      if (pathname === "/") {
        return `#${item.HomepageAnchor}`;
      }

      if (pageLink && pageLink !== "/") {
        return `${pageLink}#${item.HomepageAnchor}`;
      }

      return `/#${item.HomepageAnchor}`;
    }

    return pageLink || "/";
  }


  const socials = [
    {
      name: "Instagram",
      url: resolveLink(footer.socialInstagram),
      icon: <InstagramIcon />,
    },
    {
      name: "Facebook",
      url: resolveLink(footer.socialFacebook),
      icon: <FacebookIcon />,
    },
    {
      name: "YouTube",
      url: resolveLink(footer.socialYoutube),
      icon: <YoutubeIcon />,
    },
  ].filter((social) => social.url);


  return (
    <footer className="relative mt-auto overflow-hidden border-t border-white/10 bg-gradient-to-b from-[#071a0f] via-[#0d2f1a] to-[#06140b] text-white">

      {/* Atmosphere */}
      <div
        className="pointer-events-none absolute -left-20 top-10 h-96 w-96 rounded-full bg-emerald-400/20 blur-[120px]"
        aria-hidden
      />

      <div
        className="pointer-events-none absolute right-0 bottom-0 h-96 w-96 rounded-full bg-green-300/10 blur-[120px]"
        aria-hidden
      />


      <div className="relative z-10 mx-auto grid max-w-7xl gap-12 px-4 py-16 md:grid-cols-4 md:px-8">


        {/* Brand */}
        <div>

          <Image
            src={
              footer.logo?.filename ||
              "https://www.elc.co.uk/medias/site-logo.svg?context=bWFzdGVyfGltYWdlc3wzNDcwN3xpbWFnZS9zdmcreG1sfGFXMWhaMlZ6TDJnNFppOW9ZV0l2T1RFNE56WTNNVGsyTlRjeU5pNXpkbWN8MDMyOGQ4OTBmM2VlYzg2Yzc1Nzc4YzQyNTAxNmI1OWUyNGY3YzE1OTQzZjkxYTFlYjA3NGQ0ZmJiZDM2MjcyZQ"
            }
            alt="ELC"
            width={180}
            height={80}
            className="h-auto"
          />


          {footer.brandText && (
            <p className="mt-6 max-w-sm leading-relaxed text-emerald-100/70">
              {footer.brandText}
            </p>
          )}


          {socials.length > 0 && (
            <div className="mt-8 flex gap-3">

              {socials.map((social) => (
                <Link
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  className="
                    flex size-11 items-center justify-center
                    rounded-2xl
                    border border-white/10
                    bg-white/5
                    text-emerald-300
                    backdrop-blur-xl
                    transition-all
                    hover:-translate-y-1
                    hover:bg-emerald-500/20
                    hover:shadow-xl
                  "
                >
                  {social.icon}
                  <span className="sr-only">{social.name}</span>
                </Link>
              ))}

            </div>
          )}

        </div>



        {/* Navigation */}
        <div className="md:col-span-2">

          <p className="text-xs font-black uppercase tracking-[0.25em] text-emerald-300">
            Explore
          </p>


          <div className="mt-5 grid grid-cols-2 gap-x-8 gap-y-3">

            {menuItems.map((item) => (
              <Link
                key={item._uid}
                href={getNavHref(item)}
                target={
                  item.OpenInNewTab
                    ? "_blank"
                    : undefined
                }
                className="
                  group flex items-center gap-2
                  text-emerald-100/70
                  transition
                  hover:text-emerald-300
                "
              >

                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>

                {item.Label}

              </Link>
            ))}

          </div>

        </div>




        {/* CTA */}
        <div>

          <div
            className="
              rounded-[2rem]
              border border-emerald-300/20
              bg-white/10
              p-8
              shadow-[0_30px_80px_rgba(16,185,129,0.15)]
              backdrop-blur-xl
            "
          >

            {footer.ctaTitle && (
              <h3 className="font-heading text-3xl font-black text-white">
                {footer.ctaTitle}
              </h3>
            )}


            {footer.ctaText && (
              <p className="mt-3 leading-relaxed text-emerald-100/70">
                {footer.ctaText}
              </p>
            )}


            {footer.ctaButtonText && (
              <Link
                href={resolveLink(footer.ctaButtonLink)}
                className="
                  mt-6
                  inline-flex
                  items-center
                  gap-2
                  rounded-full
                  bg-emerald-400
                  px-6
                  py-3
                  font-black
                  text-[#071a0f]
                  transition
                  hover:-translate-y-1
                  hover:bg-emerald-300
                "
              >
                {footer.ctaButtonText}
                {" "}→
              </Link>
            )}

          </div>

        </div>


      </div>




      {/* Bottom */}
      <div className="border-t border-white/10">

        <div
          className="
            mx-auto
            flex
            max-w-7xl
            flex-col
            items-center
            justify-between
            gap-4
            px-4
            py-6
            text-sm
            text-emerald-100/50
            md:flex-row
            md:px-8
          "
        >

          <p>
            © {new Date().getFullYear()} ELC. All rights reserved.
          </p>


          <div className="flex gap-6">

            <Link
              href={resolveLink(footer.privacyLink)}
              className="transition hover:text-emerald-300"
            >
              Privacy
            </Link>


            <Link
              href={resolveLink(footer.termsLink)}
              className="transition hover:text-emerald-300"
            >
              Terms
            </Link>


            <Link
              href={resolveLink(footer.cookiesLink)}
              className="transition hover:text-emerald-300"
            >
              Cookies
            </Link>

          </div>

        </div>

      </div>


    </footer>
  );
}