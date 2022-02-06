import "./components.css";

export function Spacing(props: { small?: boolean }) {
  return <div style={{ height: props.small ? "0.5em" : "1em" }}></div>;
}

type ButtonProps = React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>;

export function Button(props: ButtonProps) {
  return (
    <button {...props} className={props.disabled ? "disabled" : ""}>
      {props.children}
    </button>
  );
}
