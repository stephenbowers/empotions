import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';

function SingleEmployee({ employee }) {
    return (
        <div>
            <Link to={`/employee/${employee.slug.current}`}>
                <h2>{employee.name}</h2>
            </Link>
            <GatsbyImage image={employee.image.asset.gatsbyImageData} alt={employee.name} />
            <p>{employee.description}</p>
        </div>
    );
}

export default function EmployeeList({ employees }) {
    return (
        <div>
            <h2>Our Healing Experts</h2>
            {employees.map(employee => (
                <SingleEmployee employee={employee} key={employee.id} />
            ))}
        </div>
    )
}