import './App.css';
import RouterNavigation from './template/navigation/RouterNavigation';
import { Provider } from 'react-redux';
import store from './redux/components/store';
import './Interceptors.tsx'

function App() {
  return (
    <div className="App">
      <Provider store={store}>
        <RouterNavigation />
      </Provider>
    </div>
  );
}
export default App;
