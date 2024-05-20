interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

function Input(props: InputProps) {
  return <input type={props.type ?? 'text'} />;
}

export { Input, type InputProps };
