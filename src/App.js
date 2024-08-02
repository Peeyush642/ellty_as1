import "./App.css";
import PageSelectionForm from "./components/PageSelectionForm/PageSelectionForm";
function App() {
  return (
    <div className="App">
      <PageSelectionForm totalPages={4} />
    </div>
  );
}

export default App;
