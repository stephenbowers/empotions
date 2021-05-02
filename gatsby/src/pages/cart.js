import React from "react";
import SEO from "../components/SEO";

export default function CartPage() {
  return (
    <>
      <SEO title={`Your Cart`} />
      <h2>Cart Page</h2>
      <div id="snipcart" data-api-key="NTg2Yzk4MGQtOWExOC00MGE2LThjODUtMWQzZWNjMDNhYjY5NjM3NTQ5MDkxOTU0ODA2OTUx"></div>
    </>
  );
}