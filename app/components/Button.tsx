interface ButtonProps {
  className?: string;
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ className, children }) => {
  return <button className={`px-6 py-4 ${className}`}>{children}</button>;
};
export default Button;
