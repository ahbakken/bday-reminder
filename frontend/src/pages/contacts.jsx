import React from 'react'
import { useState, useEffect } from "react";
import Footer from "../components/footer";
import Header from "../components/header";

const contacts = () => {
  return (
    <>
    <Header />
    <div>
      <h1 className="text-2xl">This is the contact page page</h1>
    </div>

    <Footer />
  </>
  )
}

export default contacts