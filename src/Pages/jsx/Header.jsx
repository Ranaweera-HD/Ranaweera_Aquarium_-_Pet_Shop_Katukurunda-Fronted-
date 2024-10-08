import React from 'react'
import { } from 'bootstrap/dist/css/bootstrap.min.css'
import { } from 'bootstrap/dist/js/bootstrap.js'
import "../css/Header.css"

export default function Header() {
  return (
    <div>
        {/* <img src="Images\Logo01.png" alt="" />a
        <div className="HName">Ranaweera Aquarium</div> */}
         <header class="py-3 mb-4 border-bottom">
    <div class="container d-flex flex-wrap justify-content-center">
      <a href="/" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
        <img class="bi me-2" width="40" height="32" src="Images\Logo01.png"/>
        <span class="fs-4">Ranaweera Aquarium</span>
      </a>
      <form class="col-12 col-lg-auto mb-3 mb-lg-0" role="search">
        <input type="search" class="form-control" placeholder="Search..." aria-label="Search"/>
      </form>
    </div>
  </header>
        <nav class="py-2 bg-body-tertiary border-bottom">
    <div class="container d-flex flex-wrap">
      <ul class="nav me-auto">
        <li class="nav-item"><a href="home" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Features</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Pricing</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">FAQs</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">About</a></li>
      </ul>
      <ul class="nav">
        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Login</a></li>
        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Sign up</a></li>
      </ul>
    </div>
  </nav>
 
    </div>
  )
}
