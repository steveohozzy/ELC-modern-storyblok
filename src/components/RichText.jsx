import { renderRichText, storyblokEditable } from "@storyblok/react/rsc";

export default function RichText({ blok }) {
  return (
    <section
      {...storyblokEditable(blok)}
      className="
    mx-auto max-w-4xl items-center gap-10 px-4 pb-16 pt-10 md:px-8 lg:gap-12 lg:pb-24 lg:pt-16
    [&_h2]:text-primary
    [&_h2]:text-3xl
    [&_h2]:font-heading
    [&_h2]:mt-8
    [&_h2]:mb-4

    [&_h3]:text-primary
    [&_h3]:text-2xl
    [&_h3]:font-heading
    [&_h3]:mt-8
    [&_h3]:mb-4

    [&_h4]:text-primary
    [&_h4]:text-xl
    [&_h4]:font-heading
    [&_h4]:mt-8
    [&_h4]:mb-4

    [&_ul]:space-y-4
    [&_li]:leading-8
    [&_li]:leading-8
    [&_li]:list-disc
    [&_li]:list-inside

    [&_li>p]:m-0
    [&_li>p]:inline

    [&_p]:text-foreground
    [&_p]:leading-8

    [&_a]:text-primary
    [&_a]:font-medium
    [&_a]:no-underline
    hover:[&_a]:underline

    [&_.blog-cat-link]:hidden

    [&_img]:overflow-hidden
    [&_img]:rounded-[2rem]
    [&_img]:border
    [&_img]:border-border
    [&_img]:shadow-xl
  "
      dangerouslySetInnerHTML={{
        __html: renderRichText(blok.Content),
      }}
    />
  );
}