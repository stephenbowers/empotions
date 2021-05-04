import { GatsbyImage } from 'gatsby-plugin-image';
import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { GiCrystalBars, GiStarSwirl } from 'react-icons/gi';

const EmployeeStyles = styled.div`
    text-align: center;
    .title {
        margin-bottom: 4rem;
    }

    a:hover {
        color: var(--purple)
    }
    img {
        border-radius: 5px;
    }
    img:hover {

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

    .image-container {
        position: relative;
        font-size: 3rem;
        background-color: var(--purple);
        color: white;
        border-radius: 5px;
    }

    .employee-image {
        opacity: 1;
        display: block;
        width: 100%;
        height: auto;
        transition: .5s ease;
        backface-visibility: hidden;
    }

    .image-overlay {
        transition: .5s ease;
        opacity: 0;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        -ms-transform: translate(-50%, -50%);
        text-align: center;
    }
    
    .image-container:hover .employee-image {
        opacity: 0.3;
    }

    .image-container:hover .image-overlay {
        opacity: 1;
    }
`;

function SingleEmployee({ employee }) {
    return (
        <div>
            <Link to={`/employee/${employee.slug.current}`}>
                <h2><GiCrystalBars /> {employee.name} <GiCrystalBars /></h2>
            <div className="image-container">
                <GatsbyImage className="employee-image" image={employee.image.asset.gatsbyImageData} alt={employee.name} />
                <div className="image-overlay">
                    <p><GiStarSwirl />Learn More<GiStarSwirl /></p>
                </div>
            </div>
            </Link>
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