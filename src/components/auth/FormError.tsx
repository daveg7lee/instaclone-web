interface FormErrorProps {
  message?: string;
}

const FormError = ({ message }: FormErrorProps) => {
  return message === '' || !message ? null : (
    <span className="text-red-400 font-semibold text-xs mt-1 mb-2">
      {message}
    </span>
  );
};

export default FormError;
