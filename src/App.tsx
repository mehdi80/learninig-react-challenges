import { useWindowWidth } from './use-window-width';

function Header() {
  const width = useWindowWidth();
  return <h1>{width < 600 ? '📱 Mobile header' : '🖥️ Desktop header'}</h1>;
}

function Sidebar() {
  const width = useWindowWidth();

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