import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'
import './App.css';
// import Input from './component/input';
// import Button from './component/button/Button'

import Form from './component/form/Form';
import Card from './component/card/index';
import Layout from './component/layout';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Routes>
            <Route path="/contact" element={<Form />}></Route>
            <Route path="/about" element={<h1>About</h1>}></Route>
            <Route path="/" element={<h1>Home</h1>}></Route>
            <Route path="*" element={<h1>Not Found</h1>}></Route>
          </Routes>
        </Layout>
      </Router>
      
    </div>
  );
}

export default App;
