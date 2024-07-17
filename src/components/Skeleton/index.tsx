import clsx from "clsx";

interface SkeletonType {
  times?: number;
  className?: string;
}

export const Skeleton = ({ times = 1, className }: SkeletonType) => {
  const outerClassNames = clsx(
    "relative",
    "overflow-hidden",
    "bg-gray-200",
    "rounded",
    "mb-2.5",
    className
  );
  const innerClassNames = clsx(
    "animate-shimmer",
    "absolute",
    "inset-0",
    "-translate-x-full",
    "bg-gradient-to-r",
    "from-gray-200",
    "via-white",
    "to-gray-200"
  );

  const boxes = Array(times)
    .fill(0)
    .map((_, i) => {
      return (
        <div key={i} className={outerClassNames}>
          <div className={innerClassNames} />
        </div>
      );
    });

  return boxes;
};
