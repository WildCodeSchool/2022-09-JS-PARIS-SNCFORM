import "./App.scss";
import { Field } from "@components/index";

function App() {
  return (
    <div className="App">
      <Field label="Prénom" inputId="first-name" inputName="firstName" />
    </div>
  );
}

export default App;
