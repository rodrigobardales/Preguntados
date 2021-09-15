import React from 'react';
import IQuestions from './Pregunta';


export class QuestionList {
    list_of_questions:IQuestions[] = [
        {question: "En que año el hombre pisó la Luna por primera vez?",
        answer:"1969",
        psible_answers:[
            '1969', '1970', '1965'
        ]},
        {question: "Quién fue el primer presidente de Estados Unidos?",
        answer:"George Washington",
        psible_answers:[
            "George Washington", "Albert Einstein", "Abraham Lincoln"
        ]},
        {question: "Cuánto duró la Guerra de los Cien Años?",
        answer:"116",
        psible_answers:[
            "100", "116", "99"
        ]},
        {question: "Cuál es la lengua más hablada del mundo?",
        answer:"Mandarin",
        psible_answers:[
            "Espanol", "Ingles", "Mandarin"
        ]},
        {question: "Cuál es la ciudad más poblada de África?",
        answer:"El Cairo",
        psible_answers:[
            "El Cairo", "Egipto", "Sudan"
        ]},
        {question: "Cómo se llama el líder de los Autobots en Transformers",
        answer:"Optimus Prime",
        psible_answers:[
            "Bummbullbee", "Optimus Prime", "Megatron"
        ]},
        {question: "De qué personaje ficticio estaba enamorado el Quijote?",
        answer:"Dulcinea",
        psible_answers:[
            "Dulcinea", "Sarina", "Dulce"
        ]},
        {question: "Cuándo se celebró la primera Copa Mundial de Fútbol?",
        answer:"1930",
        psible_answers:[
            "1940", "1930", "1920"
        ]},
        {question: "Cuál es el baloncestista más alto que ha participado en la ACB?",
        answer:"Christ Koumadje",
        psible_answers:[
            "Michael Jordan", "Cobby Bryant", "Christ Koumadje"
        ]},
        {question: "En qué país transcurre la acción de la película Chappie?",
        answer:"Sudáfrica",
        psible_answers:[
            "Sudáfrica", "USA", "Honduras"
        ]},
    ]
}