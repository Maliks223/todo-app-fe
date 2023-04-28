import "./textInput.scss";

interface TextInputProps {
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
  type?: string;
  placeHolder?: string;
}

const TextInput = ({
  value,
  onChange,
  className,
  type,
  placeHolder,
}: TextInputProps) => {
  return (
    <input
      className="text-input-container"
      type={type}
      value={value}
      onChange={onChange}
      placeholder={placeHolder}
    />
  );
};

export default TextInput;
