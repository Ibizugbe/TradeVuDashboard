import Header from './components/Header';
import Dashboard from './pages/Dashboard';

function App() {
  return (
    <>
      <Header />
      <main>
        <div className="bg-gray-50">
          <Dashboard />
        </div>
      </main>
    </>
  );
}

export default App;
