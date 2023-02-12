import Header from './components/Header';
import InfoFooter from './components/InfoFooter';
import InfoSection from './components/InfoSection';
import InfoSubSection from './components/InfoSubSection';
import ListSection from './components/ListSection';
import '/src/assets/App.css';

function App() {
  return (
    <div id="wrapper">
      <Header />
      <InfoSection />
      <ListSection />
      <InfoSubSection />
      <InfoFooter />
    </div>
  );
}

export default App;
