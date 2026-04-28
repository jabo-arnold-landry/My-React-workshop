import CounterProvider from "./context/Counter";
import CounteComp from "./redux/CounteComp";
import Something from "./redux/Something";

import UseOptimisticPractice from "./practice/UseOptimisticPractice";

function App() {
  return (
    <>
      <CounterProvider>
        <CounteComp />
        <Something />
      </CounterProvider>
      {/* <UseOptimisticPractice /> */}
    </>
  );
}

export default App;
