import React, {useContext} from 'react';

import {ContextObj} from './AiContext';


export default function Options() {
    const {setOptions} = useContext(ContextObj);

    function handleLanguage(e) {
        setOptions((prevState)=> {
            const newOptionsState = {...prevState};
            newOptionsState.language = e.target.value;
            return newOptionsState;
        });
    };

    function handleLevel(e) {
      setOptions((prevState)=> {
          const newOptionsState = {...prevState};
          newOptionsState.level = e.target.value;
          return newOptionsState;
      });
  };

  function handleMood(e) {
    setOptions((prevState)=> {
        const newOptionsState = {...prevState};
        newOptionsState.mood = e.target.value;
        return newOptionsState;
    });
};


    return (
        <div className='container'>
          <div className='row'>
            <div className='col'>
              <div className='dropdown'>
                <select className='btn btn-success dropdown-toggle' 
                    id='dropdown1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'
                    defaultValue='Language' 
                    onChange={(e)=> handleLanguage(e)}>
                  <option disabled>Language</option>
                  <option className='dropdown-item' value='english'>English</option>
                  <option className='dropdown-item' value='french'>French</option>
                  <option className='dropdown-item' value='italian'>Italian</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <div className='dropdown'>
                <select className='btn btn-warning dropdown-toggle' 
                    id='dropdown2' data-toggle='dropdown' aria-haspopup='true' 
                    onChange={(e)=> handleLevel(e)} defaultValue='Language Level' aria-expanded='false'>
                  <option disabled>Language Level</option>
                  <option className='dropdown-item' value='A1'>A1</option>
                  <option className='dropdown-item' value='A2'>A2</option>
                  <option className='dropdown-item' value='B1'>B1</option>
                  <option className='dropdown-item' value='B2'>B2</option>
                  <option className='dropdown-item' value='C1'>C1</option>
                  <option className='dropdown-item' value='C2'>C2</option>
                </select>
              </div>
            </div>
            <div className='col'>
              <div className='dropdown'>
                <select className='btn btn-danger dropdown-toggle' 
                    id='dropdown3' data-toggle='dropdown' aria-haspopup='true' 
                    onChange={(e)=> handleMood(e)} defaultValue='Mood' aria-expanded='false'>
                  <option disabled>Mood</option>
                  <option className='dropdown-item' value='friendly'>Friendly</option>
                  <option className='dropdown-item' value='melancholic'>Melancholic</option>
                  <option className='dropdown-item' value='funny'>Funny</option>
                </select>
              </div>
            </div>
          </div>
        </div>
    );

//     return (
//     <div className='container'>
//       <div className='row'>
//         <div className='col'>
//           <div className='dropdown'>
//             <button className='btn btn-success dropdown-toggle' type='button' 
//                 id='dropdown1' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
//               Language
//             </button>
//             <div className='dropdown-menu' aria-labelledby='dropdown1'>
//                     <option className='dropdown-item' onClick={handleLanguage}>English</option>
//                     <option className='dropdown-item' onClick={handleLanguage}>French</option>
//                     <option className='dropdown-item' onClick={handleLanguage}>Italian</option>
//             </div>
//           </div>
//         </div>
//         <div className='col'>
//           <div className='dropdown'>
//             <button className='btn btn-warning dropdown-toggle' type='button' 
//                 id='dropdown2' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
//               Language Level
//             </button>
//             <div className='dropdown-menu' aria-labelledby='dropdown2'>
//               <a className='dropdown-item' href='#'>Action</a>
//               <a className='dropdown-item' href='#'>Another action</a>
//               <a className='dropdown-item' href='#'>Something else</a>
//             </div>
//           </div>
//         </div>
//         <div className='col'>
//           <div className='dropdown'>
//             <button className='btn btn-danger dropdown-toggle' type='button' 
//                 id='dropdown3' data-toggle='dropdown' aria-haspopup='true' aria-expanded='false'>
//               Mood
//             </button>
//             <div className='dropdown-menu' aria-labelledby='dropdown3'>
//               <a className='dropdown-item' href='#'>Action</a>
//               <a className='dropdown-item' href='#'>Another action</a>
//               <a className='dropdown-item' href='#'>Something else</a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
};





