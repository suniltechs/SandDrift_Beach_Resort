import { Provider } from 'react-redux';
import { store } from './app/store';
import { AnimatePresence } from 'framer-motion';
import Hero from './components/sections/Hero';
import BookingForm from './components/sections/BookingForm';
import About from './components/sections/About';
import Rooms from './components/sections/Rooms';
import Services from './components/sections/Services';
import Stats from './components/sections/Stats';
import Explore from './components/sections/Explore';
import Footer from './components/sections/Footer';

function App() {
  return (
    <Provider store={store}>
      <AnimatePresence mode="wait">
        <div className="min-h-screen bg-white font-poppins">
          <Hero />
          <main>
            <BookingForm />
            <About />
            <Rooms />
            <Services />
            <Stats />
            <Explore />
          </main>
          <Footer />
        </div>
      </AnimatePresence>
    </Provider>
  );
}

export default App;
