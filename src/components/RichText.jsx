import { renderRichText, storyblokEditable } from "@storyblok/react/rsc";

export default function RichText({ blok }) {
  const paddingTop = {
    none: "",
    sm: "pt-4",
    md: "pt-8",
    lg: "pt-16",
    xl: "pt-24",
  };

  const paddingBottom = {
    none: "",
    sm: "pb-4",
    md: "pb-8",
    lg: "pb-16",
    xl: "pb-24",
  };

  const width = {
    full: "max-w-none",
    sm: "max-w-2xl",
    md: "max-w-4xl",
    lg: "max-w-6xl",
  };

  return (
    <section
      {...storyblokEditable(blok)}
      className={[
        "px-4 md:px-8",
        width[blok.width] || "max-w-none",
        paddingTop[blok.paddingTop] || "",
        paddingBottom[blok.paddingBottom] || "",

        "[&_h2]:text-primary",
        "[&_h2]:text-3xl",
        "[&_h2]:font-heading",
        "[&_h2]:mt-8",
        "[&_h2]:mb-4",

        "[&_h3]:text-primary",
        "[&_h3]:text-2xl",
        "[&_h3]:font-heading",
        "[&_h3]:mt-8",
        "[&_h3]:mb-4",

        "[&_h4]:text-primary",
        "[&_h4]:text-xl",
        "[&_h4]:font-heading",

        "[&_ul]:space-y-4",
        "[&_li]:list-disc",
        "[&_li]:list-inside",

        "[&_p]:leading-8",

        "[&_a]:text-primary",
        "[&_a]:font-medium",
        "hover:[&_a]:underline",

        "[&_img]:rounded-[2rem]",
        "[&_img]:border",
        "[&_img]:shadow-xl",
      ].join(" ")}
      dangerouslySetInnerHTML={{
        __html: renderRichText(blok.Content),
      }}
    />
  );
}