import { useState } from 'react';

function MenteeProfile() {
    const [data, setData] = useState({
        id: 1,
        name: 'John Doe',
        email: 'a@example.com',
        phone: '+1 (123) 456-7890',
        address: '123 Main St, Anywhere, USA',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
        skills: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Node.js', 'Express', 'MongoDB', 'MySQL', 'PostgreSQL'],
        experience: 2,
        education: 'Bachelor of Science in Computer Science',
        img: 'https://i.pinimg.com/564x/ae/ec/c2/aeecc22a67dac7987a80ac0724658493.jpg'
    });

    return (
        <div>
            <h1>{data.name}</h1>
            <p>{data.bio}</p>
            <p>{data.education}</p>
            <p>{data.experience} years of experience</p>
            <p>{data.skills.join(', ')}</p>
            <img src={data.img} alt={data.name} />
        </div>
    )
}

export default MenteeProfile
