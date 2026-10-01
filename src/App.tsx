import React from "react";

export function Page() {
  const ref = React.useRef<HTMLInputElement>(null);

  function handleClick() {
    if (ref.current) {
      ref.current.focus();
    }
  }

  return (
    <>
      <nav>
        <button onClick={handleClick}>Search</button>
      </nav>
      <input
        ref={ref}
        placeholder="Looking for something?"
      />
    </>
  );
}

function App() {
  return <>
    <Page />
  </>
}

export default App
