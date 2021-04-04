interface ButtonProps {
  value: string;
  type: 'submit' | 'text' | 'password';
}

const Button = (props: ButtonProps) => (
  <input {...props} className="w-full blueButton mt-3 py-2 font-semibold" />
);

export default Button;
