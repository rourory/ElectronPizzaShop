import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import Content from './components/Content';

function App() {
  return (
    <MemoryRouter>
      <Provider store={store}>
        <Content />
      </Provider>
    </MemoryRouter>
  );
}

export default App;
