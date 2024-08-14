interface Props {
  text: string;
  onPress: () => void;
}

export default function SubmitButton(props: Props) {
  return (
    <div style={{ padding: 20 }}>
      <button
        type="button"
        className="btn btn-primary"
        onClick={() => {
          props.onPress();
        }}
      >
        {props.text}
      </button>
    </div>
  );
}
