"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { ClippedCircle } from "@/components/unlumen-ui/clipped-circle";
import { Tilt, type TiltProps } from "@/components/unlumen-ui/tilt";

export interface TiltCardProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description?: string;
  /** left half of the split badge pill; shown as a simple pill if `badgeLabel` is omitted */
  price?: string;
  /** right half of the split pill, coloured by `badgeVariant` */
  badgeLabel?: string;
  badgeVariant?: "success" | "warning";
  imageSrc?: string;
  imageAlt?: string;
  /** wraps the card in a plain `<a>` tag */
  href?: string;
  children?: React.ReactNode;
  tiltProps?: Omit<TiltProps, "children" | "className">;
}

const BADGE_LABEL_CLASSES: Record<
  NonNullable<TiltCardProps["badgeVariant"]>,
  string
> = {
  success: "bg-gray-100 text-black dark:bg-gray-800 dark:text-white",
  warning: "bg-gray-50 text-gray-600 dark:bg-gray-900 dark:text-gray-400",
};

export function TiltCard({
  title,
  description,
  price,
  badgeLabel,
  badgeVariant = "success",
  imageSrc,
  imageAlt = "",
  href,
  children,
  tiltProps,
  className,
  ...props
}: TiltCardProps) {
  const inner = (
    <Tilt
      rotationFactor={20}
      {...tiltProps}
      className={cn(
        "relative group overflow-hidden",
        "bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-950 dark:border-gray-800",
        "flex flex-col gap-4",
        "h-72 sm:h-80 md:h-96 w-full",
        "hover:shadow-lg hover:scale-105 transition-all duration-400 ease-out",
        className,
      )}
    >
      <div className="flex flex-row transition-all duration-200 justify-between px-5 sm:px-8 py-5 sm:py-7">
        <div className="flex flex-col gap-1 flex-1 mr-2">
          <h2 className="text-xl sm:text-2xl tracking-tight leading-tight font-medium text-black dark:text-white">
            {title}
          </h2>
          {description && (
            <p className="text-gray-500 text-sm sm:text-base dark:text-gray-400">{description}</p>
          )}
          {children && <div className="mt-2">{children}</div>}
        </div>

        {price && badgeLabel ? (
          <div className="inline-flex h-fit items-center text-sm whitespace-nowrap shrink-0">
            <span className="rounded-l-full bg-gray-100 h-fit py-1 px-2 font-medium dark:bg-gray-800">
              {price}
            </span>
            <span
              className={cn(
                "rounded-r-full text-sm h-fit py-1 px-2 font-medium",
                BADGE_LABEL_CLASSES[badgeVariant],
              )}
            >
              {badgeLabel}
            </span>
          </div>
        ) : price ? (
          <span className="h-fit rounded-full bg-gray-100 px-3 py-1 text-sm font-medium whitespace-nowrap shrink-0 dark:bg-gray-800">
            {price}
          </span>
        ) : null}
      </div>

      {imageSrc && (
        <img
          src={imageSrc}
          alt={imageAlt}
          width={384}
          height={320}
          loading="lazy"
          decoding="async"
          className={cn(
            "absolute z-10 top-32 sm:top-36 w-80 sm:w-96 -right-12",
            "rotate-[-5deg] border border-gray-200 rounded-md shadow-md dark:border-gray-800",
            "transition-transform duration-300 ease-out",
            "group-hover:-rotate-3 group-hover:-translate-y-1 group-hover:-translate-x-0.5",
          )}
        />
      )}

      <ClippedCircle circleClassName="bg-white" circleSize={800} />
    </Tilt>
  );

  if (href) {
    return (
      <a
        href={href}
        className="block cursor-pointer"
        {...(props as React.AnchorHTMLAttributes<HTMLAnchorElement>)}
      >
        {inner}
      </a>
    );
  }

  return <div {...props}>{inner}</div>;
}
