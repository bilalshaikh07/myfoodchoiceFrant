import React from 'react'
import {AiFillYoutube, AiFillInstagram, AiFillGithub} from 'react-icons/ai'
const Footer = () => {
  return (
    <section className="footer">
      <p> Copyright (c) 2024 all right are reserved by FoodRush </p>
      <div>
        <p>Get In Touch</p>
        <a href="https://www.youtube.com"><AiFillYoutube/></a>
        <a href="https://www.instagram.com"><AiFillInstagram/></a>
        <a href="https://www.github.com"><AiFillGithub/></a>
      </div>
    </section>
  )
}

export default Footer
