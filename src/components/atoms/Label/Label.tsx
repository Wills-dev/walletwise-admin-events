interface LabelProps {
  title: string;
  htmlFor: string;
  className?: string;
}

const Label = ({
  title,
  htmlFor,
  className = "font-semibold text-[12px] sm:text-[13px] md:text-[14px] leading-none tracking-[1px] md:tracking-[2.52px] uppercase text-white/60",
}: LabelProps) => {
  return (
    <label htmlFor={htmlFor} className={`block ${className}`}>
      {title}
    </label>
  );
};

export default Label;
