import { renderRichText } from "@storyblok/react/rsc";

export default function BlogRichText({ richText }) {

  return (
    <section
      className={[
        "mx-auto max-w-4xl",

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
        "[&_h4]:mt-8",
        "[&_h4]:mb-4",

        "[&_ul]:space-y-4",
        "[&_li]:leading-8",
        "[&_li]:list-disc",
        "[&_li]:list-inside",

        "[&_p]:text-foreground",
        "[&_p]:leading-8",
        "[&_p]:mb-6",

        "[&_a]:text-primary",
        "[&_a]:font-medium",
        "[&_a]:no-underline",
        "hover:[&_a]:underline",

        "[&_img]:rounded-[2rem]",
        "[&_img]:border",
        "[&_img]:border-border",
        "[&_img]:shadow-xl",

      ].join(" ")}
      dangerouslySetInnerHTML={{
        __html: renderRichText(richText),
      }}
    />
  );
}