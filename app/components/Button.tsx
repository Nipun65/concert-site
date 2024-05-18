interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return (
    <button className={`xs:p-2 md:px-4 md:py-2 lg:px-6 lg:py-4 ${className}`}>
      {children}
    </button>
  );
};
export default Button;
