import InputField from "./components/InputField";
import "./App.css";
import TextArea from "./components/TextArea";
import SubmitButton from "./components/SubmitButton";
import { useNavigate } from "react-router-dom";

function App() {
  let question_ = "";
  let name_ = "";
  const navigate = useNavigate();
  const handleUpdateName = (phrase: string) => {
    //setName(phrase);
    //console.log(name);
    name_ = phrase;
  };

  const handleUpdateQuestion = (phrase: string) => {
    //setQuestion(phrase);
    //console.log(question);
    question_ = phrase;
  };

  const handleSubmit = () => {
    fetch("http://localhost:8080/questions", {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        email: name_,
        question: question_,
      }),
    }).then(() => console.log("Done"));
    console.log(name_, question_);
    navigate("/thankyou");
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ width: 200, height: 200, padding: 20 }}>
        <img src="/IIT_Madras_Logo.png" className="img-thumbnail" alt="..." />
      </div>
      <div style={{ padding: 20 }}>
        <b className="text-start" style={{ fontFamily: "Roboto" }}>
          This is the portal for students of OE department to ask any questions
          to the department legislator.
        </b>
      </div>

      <InputField
        text="email@example.com"
        size="100%"
        span_="Email"
        onUpdate={handleUpdateName}
      />
      <TextArea
        text="Ask anything"
        size="100%"
        span_="Question"
        onUpdate={handleUpdateQuestion}
      />
      <SubmitButton
        text="Submit"
        onPress={() => {
          handleSubmit();
        }}
      />
    </div>
  );
}
export default App;
