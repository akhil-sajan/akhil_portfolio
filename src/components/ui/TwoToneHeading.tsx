interface TwoToneHeadingProps {
  top: string;
  bottom: string;
  description?: string;
  align?: 'left' | 'center';
}

export function TwoToneHeading({ top, bottom, description, align = 'left' }: TwoToneHeadingProps) {
  return (
    <div className={`mb-10 break-words ${align === 'center' ? 'text-center' : 'text-left'}`}>
      <p className="text-4xl leading-[0.95] font-black tracking-tight text-black uppercase sm:text-6xl md:text-7xl lg:text-8xl dark:text-white">
        {top}
      </p>
      <p className="text-4xl leading-[0.95] font-black tracking-tight text-black/10 uppercase sm:text-6xl md:text-7xl lg:text-8xl dark:text-white/10">
        {bottom}
      </p>
      {description && (
        <p
          className={`mt-6 max-w-2xl text-lg text-gray-600 sm:text-xl dark:text-gray-400 ${
            align === 'center' ? 'mx-auto' : ''
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
}
