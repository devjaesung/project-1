import './Home.css';
import {FullPage,Slide} from "https://cdn.skypack.dev/react-full-page@0.1.12";
import { Route, Routes } from 'react-router-dom';
import List1 from './pages/page3/List1'
import List2 from './pages/page3/List2';
import List3 from './pages/page3/List3';
import List4 from './pages/page3/List4';
import List5 from './pages/page3/List5';
import List6 from './pages/page3/List6';
import List7 from './pages/page3/List7';
import Page1 from './pages/Page1';
import Page2 from './pages/Page2';
import Page3 from './pages/page3/Page3';
import Header from './components/Header';
import Footer from './components/Footer';


function Home() {

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
        <Routes>
          <Route path='/' element={<Page3 />}/>
          <Route path='list1' element={<List1 />}/>
          <Route path='/list2' element={<List2 />}/>
          <Route path='/list3' element={<List3 />}/>
          <Route path='/list4' element={<List4 />}/>
          <Route path='/list5' element={<List5 />}/>
          <Route path='/list6' element={<List6 />}/>
          <Route path='/list7' element={<List7 />}/>
        </Routes>
        </div>
      </Slide>
     </FullPage>
    <Footer /> 

    </>
  );
}

export default Home;
