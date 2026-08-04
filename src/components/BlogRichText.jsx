import { renderRichText } from "@storyblok/react/rsc";

export default function BlogRichText({ richText }) {

  return (
    <section
      className={[
        "mx-auto max-w-4xl",

        // Headings
        "[&_h2]:font-heading",
        "[&_h2]:font-black",
        "[&_h2]:text-[#0d2f1a]",
        "[&_h2]:text-3xl",
        "[&_h2]:leading-tight",
        "[&_h2]:mt-12",
        "[&_h2]:mb-6",

        "[&_h3]:font-heading",
        "[&_h3]:font-black",
        "[&_h3]:text-[#0d2f1a]",
        "[&_h3]:text-2xl",
        "[&_h3]:mt-10",
        "[&_h3]:mb-5",

        "[&_h4]:font-heading",
        "[&_h4]:font-black",
        "[&_h4]:text-[#0d2f1a]",
        "[&_h4]:text-xl",
        "[&_h4]:mt-8",
        "[&_h4]:mb-4",


        // Paragraphs
        "[&_p]:text-[#355b47]",
        "[&_p]:text-lg",
        "[&_p]:leading-8",
        "[&_p]:mb-6",


        // Lists
        "[&_ul]:my-8",
        "[&_ul]:space-y-4",

        "[&_ol]:my-8",
        "[&_ol]:space-y-4",

        "[&_li]:pl-2",
        "[&_li]:leading-8",
        "[&_li]:text-[#355b47]",

        "[&_li::marker]:text-emerald-500",


        // Links
        "[&_a]:font-bold",
        "[&_a]:text-emerald-700",
        "[&_a]:underline-offset-4",
        "hover:[&_a]:text-emerald-500",
        "hover:[&_a]:underline",


        // Images
        "[&_img]:my-10",
        "[&_img]:w-full",
        "[&_img]:rounded-[2rem]",
        "[&_img]:border",
        "[&_img]:border-emerald-100",
        "[&_img]:shadow-xl",


        // Quotes
        "[&_blockquote]:my-10",
        "[&_blockquote]:rounded-[2rem]",
        "[&_blockquote]:border-l-4",
        "[&_blockquote]:border-emerald-400",
        "[&_blockquote]:bg-emerald-50",
        "[&_blockquote]:px-8",
        "[&_blockquote]:py-6",
        "[&_blockquote]:italic",
        "[&_blockquote]:text-[#355b47]",


        // Storyblok sometimes nests p inside li
        "[&_li_p]:inline",

      ].join(" ")}
      dangerouslySetInnerHTML={{
        __html: renderRichText(richText),
      }}
    />
  );
}