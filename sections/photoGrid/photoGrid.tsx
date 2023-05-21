import type { Image as LiveImage } from "deco-sites/std/components/types.ts";

export interface Banner {
  src: LiveImage;
  /**
   * @description Image alt text
   */
  alt: string;
  /**
   * @description When you click you go to
   */
  href: string;
  title: string;
  size: "sm" | "md" | "xl";
}

export type BorderRadius =
  | "none"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "full";

export interface Props {
  /**
   * @description Default is 2 for mobile and all for desktop
   */
  /**
   * @description Item's border radius in px
   */
  borderRadius: {
    /** @default none */
    mobile?: BorderRadius;
    /** @default none */
    desktop?: BorderRadius;
  };
  banners: Banner[];
}

const RADIUS_MOBILE = {
  "none": "rounded-none",
  "sm": "rounded-sm",
  "md": "rounded-md",
  "lg": "rounded-lg",
  "xl": "rounded-xl",
  "2xl": "rounded-2xl",
  "3xl": "rounded-3xl",
  "full": "rounded-full",
};

const RADIUS_DESKTOP = {
  "none": "sm:rounded-none",
  "sm": "sm:rounded-sm",
  "md": "sm:rounded-md",
  "lg": "sm:rounded-lg",
  "xl": "sm:rounded-xl",
  "2xl": "sm:rounded-2xl",
  "3xl": "sm:rounded-3xl",
  "full": "sm:rounded-full",
};

const COL_GRID = {
  "sm": "col-span-1",
  "md": "col-span-2",
  "xl": "col-span-3",
};

export default function BannnerGrid({
  borderRadius,
  banners = [],
}: Props) {
  return (
    <div class="w-4/5 px-4 md:px-0 mx-auto mt-5 mb-5">
      <div
        class={`grid grid-cols-3 md:grid-cols-3 grid-flow-row gap-4 `}
      >
        {banners.map(({ href, src, alt, title, size }) => (
          <a
            href={href}
            class={`overflow-hidden ${
              RADIUS_MOBILE[borderRadius.mobile ?? "none"]
            } ${
              RADIUS_DESKTOP[borderRadius.desktop ?? "none"]
            } relative bg-slate-400 ${COL_GRID[size]}`}
          >
            <img
              className="w-full h-full duration-500"
              src={src}
              alt={alt}
              id={title}
              decoding="async"
              loading="lazy"
            />
            <div
              className={`peer [&>p]:hover:bg-black absolute w-full bg-transparent top-0 bottom-0 flex items-center justify-center 
              [&>img]:hover:scale-125 z-10
               `}
            >
              <img
                className="absolute z-0 w-full h-full duration-500"
                src={src}
                alt={alt}
                id={title}
                decoding="async"
                loading="lazy"
              />
              <p
                className={`${RADIUS_MOBILE[borderRadius.mobile ?? "none"]} ${
                  RADIUS_DESKTOP[borderRadius.desktop ?? "none"]
                }
                p-1 border-2 z-10 text-slate-100 font-bold md:p-8 md:text-3xl
                `}
              >
                {title}
              </p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}
