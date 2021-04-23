import { graphql } from "gatsby";
import React from "react";
import EmployeeList from "../components/EmployeeList";

export default function AboutPage({ data }) {
  const employees = data.employees.nodes;
  return (
    <div>
      <h2>About Page</h2>
      <EmployeeList employees={employees} />
    </div>
  );
};

export const query = graphql`
  query EmployeeQuery {
    employees: allSanityPerson {
      nodes {
        name
        id
        description
        slug {
          current
        }
        image {
          asset {
            gatsbyImageData(width: 400, placeholder: BLURRED)
          }
        }
      }
    }
  }
`;