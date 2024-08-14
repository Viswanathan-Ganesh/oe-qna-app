interface Props {
  text: string;
  size: string;
  span_: string;
  onUpdate: (phrase: string) => void;
}

function InputField(props: Props) {
  return (
    <div
      className="input-group flex-nowrap"
      style={{ width: props.size, padding: 20 }}
    >
      <span className="input-group-text" id="addon-wrapping">
        {props.span_}
      </span>
      <input
        type="text"
        className="form-control"
        placeholder={props.text}
        aria-label={props.text}
        aria-describedby="addon-wrapping"
        onChange={(e) => {
          props.onUpdate(e.target.value);
        }}
      />
    </div>
  );
}
export default InputField;
