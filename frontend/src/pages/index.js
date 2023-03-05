import {useState, useEffect} from "react"
import Footer from "../components/footer"
import Header from "../components/header"


//Todo dont forget about commits!!! do it!

export default function Home() {

  return (
    <>
    <Header/>
    <h1 className="text-3xl font-bold underline">
      Hello world!
    </h1>
    <Footer/>
    </>

  )
}