import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const EmployeeStyles = styled.div`
    text-align: center;
    img {
        border-radius: 5px;
    }
    .employees {
        display: flex;
        flex-direction: column;
        div:nth-child(even) {
            align-self: flex-end;
        }
        div {
            max-width: 450px;
        }
    }
`;

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
        <EmployeeStyles>
            <h2 className="title">Get To Know Us</h2>
            <div className="employees">
            {employees.map(employee => (
                <SingleEmployee employee={employee} key={employee.id} />
            ))}
            </div>
        </EmployeeStyles>
    )
}