import React from 'react'
import './Feed.css';
import Share from '../Share/Share';
import Post from '../Post/Post';


export default function () {
  return (
    <div className="Feed">
      <div className="feedwrapper">
        <Share/>
        <Post src="assets/Profile/4.avif" name="Jone Deb" link="/assets/Persons/5.jpeg"/>
        <Post src="assets/Profile/1.jpg" name="Yara Yasser" link="/assets/Persons/3.jpeg"/>
        <Post src="assets/Profile/3.jpeg" name="Dalia Ahmed" link="/assets/Persons/4.jpeg"/>
        <Post src="assets/Profile/2.jpg" name="Noran Ali" link="/assets/Persons/5.jpeg"/>
        <Post src="assets/Profile/5.jpeg" name="Sara Adel" link="/assets/Persons/6.jpeg"/>
      </div>
    </div>
  )
}
