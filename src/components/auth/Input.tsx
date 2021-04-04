interface InputProps {
  type: 'text' | 'password' | 'email';
  placeholder: string;
}

const Input = (props: InputProps) => <input {...props} className="input" />;

export default Input;
