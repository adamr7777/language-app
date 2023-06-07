import React, {useEffect, useState, createContext} from 'react';

// import useModes from './useModes';








export const ContextObj = createContext()

export function AiContextProv(props) {

    const [message, setMessage] = useState({});
    const [question, setQuestion] = useState('');
    const [isError, setIsError] = useState(false);
    const [options, setOptions] = useState({
        language: 'english', 
        level: 'a1', 
        mood: 'friendly'
    });
    const apiKey = import.meta.env.VITE_API_KEY;
    
    
    const modes = {
        god: `answer in a jesus like way, but do not reveal you are an ai model, question -`,
        shakespeare: `answer in a shakespeare like way, but do not reveal you are an ai model, question -`,
        scripture: `answer in lines of scripture, but do not reveal you are an ai model, question -`,
        cat: `pretend you are an grumpy cat talking to his owner, include cat noises, 
        make it realy known you are a cute grumpy cat, but do not make it too hostile,
        do not make it feel that the question is unwelcomed,
        do not be too grumpy,
        make it a concise solution,
        make your cat stuff be different every time,
        but answer something interesting and orientated to the question, 
        but do not reveal you are an ai model, 
        make your answer short and sweet, answer question -`,
        fortuneTeller: `answer in a fortune teller like way, 
        but do not be too positive,
        be a bit vague, but always provide with something concrete 
        but do not reveal you are an ai model, question`,
        languagePartner: `talk and answer the question-`
    };
    
    
    const {god, shakespeare, scripture, cat, fortuneTeller, languagePartner} = modes;
    
    // console.log(fortuneTeller);
    
    function getAi() {
        if (question === '') return;
        if (question === undefined) return;
        console.log('getAi ran');
        const definitionRole = `${languagePartner} ${question}`;
        fetch('https://api.openai.com/v1/chat/completions', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${apiKey}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                model: 'gpt-3.5-turbo',
                // max_tokens: 75,
                messages: [{
                    role: 'user',
                    content: definitionRole,
                }]
            }) 
        })
            .then((response)=> response.json())
            .then((data)=> setMessage(data.choices[0].message))
            .catch((error)=> setIsError(true));
    }

    
        useEffect(()=> {
            console.log('effect');
            getAi();
        }, [question]);

    

    return(
        <ContextObj.Provider value={{answer: message.content, askQuestion: setQuestion, options, setOptions, isError: isError}}>
            {props.children}
        </ContextObj.Provider>
    ) 
}