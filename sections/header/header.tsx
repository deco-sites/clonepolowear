import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Props {
  logo: {
    url?: LiveImage;
    alt?: string;
    size?: number;
  };
  placeholder?: string;
  itens: Array<{
    item: string;
    href: string;
  }>;
}
const logoUrlDefault = "images/logo.svg";

function Header(
  {
    logo: {
      url = logoUrlDefault,
      alt = "logo padrão deco",
      size,
    },
    placeholder = "Digite Aqui o que procura",
    itens,
  }: Props,
) {
  return (
    <div className="h-28">
      <div className="fixed w-full z-20">
        <div className="bg-black flex justify-around pt-5 ">
          <img
            width={`${size}px`}
            src={url}
            alt={alt}
          />
          <input
            type="text"
            placeholder={placeholder}
            className="input input-bordered w-3/5"
          />
          <div className="flex w-16 justify-around">
            <svg
              width="25px"
              class="text-slate-100"
              data-darkreader-inline-stroke=""
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
              >
              </path>
            </svg>
            <svg
              width="25px"
              class="text-slate-100"
              fill="none"
              stroke="currentColor"
              stroke-width="1.5"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
              >
              </path>
            </svg>
          </div>
        </div>
        <nav className="flex justify-center bg-black">
          {itens.map(({ item, href }) => (
            <a href={href} className="w-28 my-2">
              <p className="text-slate-100 text-xl hover:scale-110 ">{item}</p>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
}

export default Header;
