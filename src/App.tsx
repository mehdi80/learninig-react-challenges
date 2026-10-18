import { useState, useEffect } from 'react';

function Header() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <h1>{width < 600 ? '📱 Mobile header' : '🖥️ Desktop header'}</h1>;
}

function Sidebar() {
  const [width, setWidth] = useState(window.innerWidth);
  useEffect(() => {
    function handleResize() {
      setWidth(window.innerWidth);
    }
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  if (width < 600) return null;
  return <aside>Sidebar ({width}px)</aside>;
}

export default function App() {
  return (
    <>
      <Header />
      <Sidebar />
    </>
  );
}