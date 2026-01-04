import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import DocsLayout from './components/DocsLayout';
import HomePage from './pages/HomePage';
import TypeScriptPage from './pages/TypeScriptPage';
import JsonSchemaPage from './pages/JsonSchemaPage';
import ExamplesPage from './pages/ExamplesPage';

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/docs" element={<DocsLayout />}>
          <Route index element={<TypeScriptPage />} />
          <Route path="schema" element={<JsonSchemaPage />} />
          <Route path="examples" element={<ExamplesPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
