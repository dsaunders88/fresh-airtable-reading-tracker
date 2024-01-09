import { defineRoute, RouteConfig } from "$fresh/server.ts";

export default defineRoute(async (req, ctx) => {
  return (
    <div>
      <aside>
        <a href="/id1" f-partial="/partials/id1">
          Link to Id 1
        </a>
        <a href="/id2" f-partial="/partials/id2">
          Link to Id 2
        </a>
      </aside>
    </div>
  );
});
