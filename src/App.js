import './App.css';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/Page3';
import Header from './components/Header';
import Footer from './pages/Footer';

function App() {
  return (
    <>
   <Header />
    <FullPage controls controlsProps={{ className: "control" }}>
      <Slide>
      
        <div className="section-common section-area1">
          <Page1 />
        </div>
          </Slide>
       <Slide>
       <div className="section-common section-area2">
        <Page2 />
        </div>
        </Slide>
        <Slide>
        <div className="section-common section-area3">
          <Page3 />
        </div>
      </Slide>
     </FullPage>
    <Footer /> 
    </>
  );
}

export default App;
