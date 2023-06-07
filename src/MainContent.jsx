import React, {useState, useContext, useEffect} from 'react';

import {ContextObj} from './AiContext';
import Options from './Options';




export default function MainContent() {
    const defaultText = `This is your language partner. Just choose what language you want to practice, 
language level, and your partner's mood 
and start chatting away!`;
    const [text, setText] = useState('');
    const errorMessage = "Your language partner didn't quite catch you. Try rephrasing it!";
    const {answer, askQuestion, isError} = useContext(ContextObj);
    const [placeHolder, setPlaceHolder] = useState(defaultText);

    function handleChange(event) {
        setText(event.target.value);
    }

    function getAnswer() {
        askQuestion(text);
        setText('');
        setPlaceHolder('Your language partner is thinking...')
    }

    

    
    function clearTextArea() {
        setPlaceHolder('');
        setText('');
    }

    useEffect(()=> {
        if (answer === '') return;
        setText(answer);
    }, [answer])

    useEffect(()=> {
        if (isError) setPlaceHolder(errorMessage);
    },[isError])
    

    return (
        <div className='card'>
           <div className='img-div'>
                <img src='../teacher.jpeg'/>
           </div>
           <div className='text'>
                <textarea className='flash-placeholder' onChange={handleChange} onFocus={clearTextArea} 
                    value={text} placeholder={placeHolder} cols="40" rows="8"
                />
                <Options/>
                <button type='button' onClick={getAnswer} className='btn btn-primary mt-3'>Talk!</button>
           </div>
        </div>
    )
}














// export default function MainContent() {
//     const defaultText = 'This the Grumpy Cat. Although she may seem unfriendly, try asking her questions!';
//     const [text, setText] = useState('');
//     const {answer, askQuestion} = useContext(ContextObj);
//     const [personaAnswer, setPersonaAnswer] = useState('start');

//     function handleChange(event) {
//         setText(event.target.value);
//     }

//     function getAnswer() {
//         askQuestion(text);
//         setText('');
//         setPersonaAnswer('Grumpy Cat is thinking...')
//     }


    
//     function clearPlaceH() {
//         setPersonaAnswer('');
//     }

//     useEffect(()=> {
//         // if (answer === '') return;
//         setPersonaAnswer(answer);
//     }, [answer])