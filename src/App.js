import './App.css';
import Product from './component/products/product';
import { Provider } from 'react-redux';
import store from './../src/redux/store';

function App() {
  return (
    <Provider store={store}>
    <div className="App">
    <Product/>
    </div>
    </Provider>
  );
}

export default App;
