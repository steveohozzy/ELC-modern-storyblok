import {
  StoryblokServerComponent,
  storyblokEditable,
} from "@storyblok/react/rsc";

export default function BlogPost({ blok }) {
  return (
    <article
      {...storyblokEditable(blok)}
      className="mx-auto max-w-5xl px-4 py-16"
    >
      <img
        src={blok.featuredImage?.filename}
        alt={blok.title}
        className="rounded-3xl"
      />

      <div className="mt-8">
        <span className="text-primary">
          {blok.category}
        </span>

        <h1 className="mt-4 text-5xl font-heading">
          {blok.title}
        </h1>

        <p className="mt-4 text-lg text-muted-foreground">
          {blok.excerpt}
        </p>
      </div>

      <div className="mt-12 space-y-8">
        {blok.content?.map((nested) => (
          <StoryblokServerComponent
            blok={nested}
            key={nested._uid}
          />
        ))}
      </div>
    </article>
  );
}