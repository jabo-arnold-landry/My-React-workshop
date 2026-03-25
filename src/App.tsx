import Todos from "./practice/Todos";
import TestErrorBound from "./practice/TestErrorBound";
import ErrorBoundary from "./practice/ErrorBoundary";

function App() {
  return (
    <>
      <TestErrorBound heroName="landry" />
      <TestErrorBound heroName="jabo" />
      <ErrorBoundary fallback={<p>fuck you</p>}>
        <Todos />
      </ErrorBoundary>
    </>
  );
}

export default App;
