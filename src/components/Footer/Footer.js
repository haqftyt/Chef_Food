import React from 'react'
import'./Footer.css'
const Footer = () => {
    let year=new Date();
  return (
    <footer>
        <p>Copyright &copy; {year.getFullYear()}
        &nbsp; All rights Reserved to haqftyt.
        </p>
    </footer>
  )
}

export default Footer