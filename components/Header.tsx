import { NAV } from "../utils/constants.ts";

export default function Header() {
  return (
    <header class="global-header | cluster">
      <a class="site-title" href="/" hx-boost="true">
        Library of Daniel Saunders
      </a>
      <nav>
        <ul role="list" class="cluster">
          {NAV.map((navItem) => (
            <li class="nav-link">
              <a href={navItem.href} hx-boost="true">
                {navItem.name}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <a href="https://daniel-saunders.com/">Back to main site</a>
    </header>
  );
}
