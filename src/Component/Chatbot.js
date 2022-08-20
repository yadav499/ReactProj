import ChatBot from "react-simple-chatbot";
import React, { useState } from 'react';



const Chatbot = () => {

    const [state, setState] = useState([])

    const handleEnd = () => {

    }

    const steps = [
    {
        id: "1",
        message: "What is your name?",
        trigger: "name",
    },
    {
        id: "name",
        user: true,
        trigger: "3",
    },
    {
        id: "3",
        message: "Hi {previousValue}! What is your gender?",
        trigger: "gender",
    },
    {
        id: "gender",
        options: [
        { value: "male", label: "Male", trigger: "5" },
        { value: "female", label: "Female", trigger: "5" },
        ],
    },
    {
        id: "5",
        message: "How old are you?",
        trigger: "age",
    },
    {
        id: "age",
        user: true,
        trigger: "7",
        validator: (value) => {
        if (isNaN(value)) {
            return "value must be a number";
        } else if (value < 0) {
            return "value must be positive";
        } else if (value > 120) {
            return `${value}? Come on!`;
        }
        return true;
        },
    },
    {
        id: "7",
        message: "Are you from which class?",
        trigger: "class",
    },
    {
        id: "class",
        options: [
        { value: "10", label: "10", trigger: 8 },
        { value: "12", label: "12", trigger: 9 },
        ],
    },
    {
        id: "8",
        message: "What's your favourite subject?",
        trigger:"subject",
    },
    {
        id: "9",
        message: "What's your stream?",
        end: true,
    },
    {
        "id":"subject",
        options: [
            {value:"Science", label:"Science",end:true},
            {value:"Maths", label:"Maths",end:true},
            {value:"English", label:"Englist",end:true},
            {value:"Hindi", label:"Hindi",end:true},
            {value:"Painting", label:"Painting",end:true},
        ]
    }
    ];

  return (
    <div>
      <ChatBot steps={steps} />
    </div>
  );
};

export default Chatbot;
 