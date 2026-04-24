const Container = ({
  children,
  className = "xl:px-14 px-4 sm:px-6",
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={` 2xl:max-w-450 w-full mx-auto ${className}`}>
      {children}
    </div>
  );
};

export default Container;
