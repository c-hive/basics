import React from "react";
import ReactDOM from "react-dom";

const PrimitiveStateCounter = () => {
  const [counter, setCounter] = React.useState(0);
  const runs = React.useRef(0);
  const renders = React.useRef(0);
  renders.current += 1;

  React.useEffect(() => {
    runs.current += 1;
  }, [counter, setCounter]);

  return (
    <>
      <h3>Primitive state counter</h3>
      <p>Counter: {counter}</p>
      <p>useEffect runs: {runs.current}</p>
      <p>Renders: {renders.current}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCounter(counter)}>
        Set
      </button>
    </>
  );
};

const MemoizedStateCounter = React.memo(() => {
  const [counter, setCounter] = React.useState(0);
  const runs = React.useRef(0);
  const renders = React.useRef(0);
  renders.current += 1;

  React.useEffect(() => {
    runs.current += 1;
  }, [counter, setCounter]);

  return (
    <>
      <h3>Memoized state counter</h3>
      <p>Counter: {counter}</p>
      <p>useEffect runs: {runs.current}</p>
      <p>Renders: {renders.current}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCounter(counter)}>
        Set
      </button>
    </>
  );
});

const ObjectStateCounter = () => {
  const [counter, setCounter] = React.useState({ count: 0 });
  const runs = React.useRef(0);
  const renders = React.useRef(0);
  renders.current += 1;

  React.useEffect(() => {
    // Normally you'd do something with `counter` and `setCounter` here
    runs.current += 1;
  }, [counter, setCounter]);

  return (
    <>
      <h3>Object state counter</h3>
      <p>Counter: {counter.count}</p>
      <p>useEffect runs: {runs.current}</p>
      <p>Renders: {renders.current}</p>
      <button
        type="button"
        onClick={() => setCounter({ count: counter.count + 1 })}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => setCounter({ count: counter.count })}
      >
        Set
      </button>
    </>
  );
};

const SimpleContext = React.createContext();
const SimpleContextProvider = ({ children }) => {
  const [counter, setCounter] = React.useState(0);
  const runs = React.useRef(0);

  // eslint-disable-next-line no-return-assign
  return (
    <SimpleContext.Provider value={[counter, setCounter, (runs.current += 1)]}>
      {children}
    </SimpleContext.Provider>
  );
};
const SimpleContextCounter = () => {
  const [counter, setCounter, runs] = React.useContext(SimpleContext);
  const renders = React.useRef(0);
  renders.current += 1;

  return (
    <>
      <h3>Simple context counter</h3>
      <p>Counter: {counter}</p>
      <p>Provider runs: {runs}</p>
      <p>Renders: {renders.current}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCounter(counter)}>
        Set
      </button>
    </>
  );
};

const MemoizedContext = React.createContext();
const MemoizedContextProvider = ({ children }) => {
  const [counter, setCounter] = React.useState(0);
  const runs = React.useRef(0);

  const value = React.useMemo(
    // eslint-disable-next-line no-return-assign
    () => [counter, setCounter, (runs.current += 1)],
    [counter]
  );

  return (
    <MemoizedContext.Provider value={value}>
      {children}
    </MemoizedContext.Provider>
  );
};
const MemoizedContextCounter = () => {
  const [counter, setCounter, runs] = React.useContext(MemoizedContext);
  const renders = React.useRef(0);
  renders.current += 1;

  return (
    <>
      <h3>Memoized context counter</h3>
      <p>Counter: {counter}</p>
      <p>Provider runs: {runs}</p>
      <p>Renders: {renders.current}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCounter(counter)}>
        Set
      </button>
    </>
  );
};

const DoubleMemoizedContext = React.createContext();
const DoubleMemoizedContextProvider = ({ children }) => {
  const [counter, setCounter] = React.useState(0);
  const runs = React.useRef(0);

  const value = React.useMemo(
    // eslint-disable-next-line no-return-assign
    () => [counter, setCounter, (runs.current += 1)],
    [counter]
  );

  return (
    <DoubleMemoizedContext.Provider value={value}>
      {children}
    </DoubleMemoizedContext.Provider>
  );
};
// This memo does nothing
const DoubleMemoizedContextCounter = React.memo(() => {
  const [counter, setCounter, runs] = React.useContext(DoubleMemoizedContext);
  const renders = React.useRef(0);
  renders.current += 1;

  return (
    <>
      <h3>Double Memoized context counter</h3>
      <p>Counter: {counter}</p>
      <p>Provider runs: {runs}</p>
      <p>Renders: {renders.current}</p>
      <button type="button" onClick={() => setCounter(counter + 1)}>
        Increase
      </button>
      <button type="button" onClick={() => setCounter(counter)}>
        Set
      </button>
    </>
  );
});

const MemoizedContextWithObject = React.createContext();
const MemoizedContextWithObjectProvider = ({ children }) => {
  const [counter, setCounter] = React.useState({ count: 0 });
  const runs = React.useRef(0);
  const value = React.useMemo(
    // eslint-disable-next-line no-return-assign
    () => [counter, setCounter, (runs.current += 1)],
    [counter]
  );

  return (
    <MemoizedContextWithObject.Provider value={value}>
      {children}
    </MemoizedContextWithObject.Provider>
  );
};
const MemoizedContextWithObjectCounter = () => {
  const [counter, setCounter, runs] = React.useContext(
    MemoizedContextWithObject
  );
  const renders = React.useRef(0);
  renders.current += 1;

  return (
    <>
      <h3>Memoized context with object counter</h3>
      <p>Counter: {counter.count}</p>
      <p>Provider runs: {runs}</p>
      <p>Renders: {renders.current}</p>
      <button
        type="button"
        onClick={() => setCounter({ count: counter.count + 1 })}
      >
        Increase
      </button>
      <button
        type="button"
        onClick={() => setCounter({ count: counter.count })}
      >
        Set
      </button>
    </>
  );
};

function App() {
  const [counter, setCounter] = React.useState(0);

  return (
    <SimpleContextProvider>
      <MemoizedContextProvider>
        <MemoizedContextWithObjectProvider>
          <DoubleMemoizedContextProvider>
            <>
              <h3>Parent counter</h3>
              <p>Counter: {counter}</p>
              <p>
                This will trigger a re-render of all nested components below.
              </p>
              <button type="button" onClick={() => setCounter(counter + 1)}>
                Increase
              </button>
              <PrimitiveStateCounter />
              <MemoizedStateCounter />
              <ObjectStateCounter />
              <SimpleContextCounter />
              <MemoizedContextCounter />
              <MemoizedContextWithObjectCounter />
              <DoubleMemoizedContextCounter />
            </>
          </DoubleMemoizedContextProvider>
        </MemoizedContextWithObjectProvider>
      </MemoizedContextProvider>
    </SimpleContextProvider>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
