import { Handlers, PageProps, RouteConfig } from "$fresh/server.ts";

interface Product {
  title?: string;
  description?: string;
}

export const config: RouteConfig = {
  skipAppWrapper: true,
  skipInheritedLayouts: true,
};

const limit = 5;
const apiEndpoint = "https://dummyjson.com/products";

export const handler: Handlers = {
  async GET(_req, ctx) {
    // let response;
    // let result;
    // let products;
    let page: number;
    const params = new URL(_req.url).searchParams;
    console.log("page param = ", params.get("page"));

    page = parseInt(params.get("page")!);
    const response = await fetch(
      `${apiEndpoint}?limit=${limit}&skip=${(page - 1) * limit}`
    );
    const result = await response.json();
    page++;

    // if (params.get("page") === null) {
    //   response = await fetch(`${apiEndpoint}?limit=${limit}`);
    //   result = await response.json();
    //   page++;
    // } else {
    //   page = parseInt(params.get("page")!);
    //   response = await fetch(
    //     `${apiEndpoint}?limit=${limit}&skip=${(page - 1) * limit}`
    //   );
    //   result = await response.json();
    //   page++;
    // }

    // const res = await fetch(`https://dummyjson.com/products?limit=${limit}`);
    // const products = await res.json();

    // console.log(_req);

    // if (!products) {
    //   return ctx.renderNotFound({
    //     message: "Can't fetch products",
    //   });
    // }

    // console.log(products);
    return ctx.render({
      result,
      page,
    });
  },
};

export default function ProjectPage({ data }: PageProps) {
  const { result, page } = data;
  // console.log(page, result.products);

  return (
    <>
      {result.products.map((product: Product) => (
        <li style="margin-top: 1rem;">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </li>
      ))}
      <div>
        <button
          hx-get={`/api/products/?page=${page}`}
          hx-swap="outerHTML swap:1s"
          hx-trigger="click throttle:300ms"
          hx-indicator={`#indicator-${page}`}
          hx-target="closest div"
        >
          Load more
          <img
            id={`indicator-${page}`}
            class="htmx-indicator"
            src="/tail-spin.svg"
          ></img>
        </button>
      </div>
      {/* {products.map((product) => (
        <li style="margin-top: 1rem;">
          <h2>{product.title}</h2>
          <p>{product.description}</p>
        </li>
      ))}
      <button hx-get="/api/products?page=2" hx-target="#feed">
        Fetch more
      </button> */}
    </>
  );
}
