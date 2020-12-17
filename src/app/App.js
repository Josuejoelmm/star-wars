import { Provider } from 'react-redux';
import store from '../state/store';

/* COMPONENTS */
import Home from './pages/Home/Home';

function App() {
  return (
      <Provider store={store}>
            <Home />
      </Provider>
  );
}

export default App;