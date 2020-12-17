import { Provider } from 'react-redux';
import store from '../state/store';
import Home from './pages/Home/HomeContainer';

function App() {
  return (
      <Provider store={store}>
            <Home />
      </Provider>
  );
}

export default App;