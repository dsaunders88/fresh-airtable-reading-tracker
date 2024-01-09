import { Handlers, PageProps } from "$fresh/server.ts";
import { extract } from "$std/front_matter/yaml.ts";
import { render } from "$gfm";

type Props = {
  markdown: string;
  frontmatter: Record<string, unknown>;
};

export const handler: Handlers<Props> = {
  async GET(_req, ctx) {
    const markdown = await Deno.readTextFile("content/about.md");
    const { attrs, body } = extract(markdown);
    return ctx.render({ markdown: body, frontmatter: attrs });
  },
};

export default function AboutPage({ data }: PageProps<Props>) {
  return (
    <main class="content-wrapper">
      <h1>{data?.frontmatter?.title!}</h1>
      <div
        class="rich-content"
        dangerouslySetInnerHTML={{ __html: render(data.markdown) }}
      ></div>
    </main>
  );
}
