import React from 'react'
import Card from './Card';
import image1 from"../src/assets/react.jpg"
import image2 from"../src/assets/node.jpeg"
import image3 from"../src/assets/java.jpg"


const cards=[
    {
        id:1,
        tittle: 'Fast React',
        image:image1,
        instructor:"Davila Bautista Jesus Adrian"
    },
    {
        id:2,
        title:'Fast Java-Docker',
        image:image2,
        instructor:"Gonzales Guzman Edgar David"
    },
    {
        id:3,
        title: 'Fast Java',
        image:image3,
        instructor:"Ramires Meraz Rene Axayacatl"
    }
]

export default function Cards() {
    console.log()
    return (
        <div className='container d-flex justify-content-center align-items-center h-100'>
            <div className='row'>
                {
                    cards.map(c => (
                        <div className="col-md-4" key={cards.id}>
                            <Card
                                key={c.id}
                                id={c.id}
                                title={c.title}
                                image={c.image}
                                instructor={c.instructor}
                            />
                        </div>
                    ))
                }
            </div>
        </div>
    );
}