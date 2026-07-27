interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export function SectionHeading({ eyebrow, title, description }: SectionHeadingProps) {
  return (
    <div className="mb-12 text-center">
      {eyebrow && (
        <p className="mb-2 text-sm font-medium tracking-widest text-gray-500 uppercase dark:text-gray-400">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-semibold text-black sm:text-4xl dark:text-white">
        {title}
      </h2>
      {description && (
        <p className="mx-auto mt-4 max-w-2xl text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
    </div>
  );
}
