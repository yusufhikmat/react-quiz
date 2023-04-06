import { useState } from 'react';
import Main from './components/Main';
import PricePyramid from './components/PricePyramid';
import datas from './data/data'
function App() {
  const [questionNumber, setQuestionNumber]  = useState(1)
  return (
    <div className="App">
     <Main />
     <PricePyramid 
        datas={datas}
        questionNumber={questionNumber}
         />
    </div>
    
  );
}

export default App;
