import { BrowserRouter } from 'react-router-dom';
import { Router } from './routes';
import { GlobalStyle } from './styles/global';
import { MusicPlayer } from './components/MusicPlayer';

function App() {
  return (
    <BrowserRouter>
      <GlobalStyle />
      <MusicPlayer />
      <Router />
    </BrowserRouter>
  );
}

export default App;