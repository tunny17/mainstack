import Header from './components/Header';
import Rout from './components/Rout';
import Utility from './components/Utility';

const App = () => {
  return (
    <section className="p-5 w-full h-[100vh]">
      <Header />
      <Utility position="fixed left-5 top-[50%] z-20" />
      <Rout />
    </section>
  );
};

export default App;
