import "./Button.css";
interface ButtonProps {
  label: string;
  parentMethod: () => void;
}

export const Button = ({ label, parentMethod }: ButtonProps) => {
  return (
    <button className="button-custom" onClick={parentMethod}>
      {label}
    </button>
  );
};
