
import { useState } from 'react'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/Bookmarks/Bookmarks'
import Header from './components/Header/Header'

// https://github.com/programming-hero-web-course2/my-course-roster-RajobAli
// live Link :https://650493f7851b27081a219467--calm-basbousa-74df2c.netlify.app/


function App() {
  const [bookmarks,setBookmarks] = useState([]);
  const [readingTime,setReadingTime] = useState(0);
  const [remainingTime,setRemainingTime] = useState(0);


  const handleAddToBookmark = (blog) =>{
    const isExist = bookmarks.find(item =>item.ID==blog.ID);
    if(isExist){
     return alert("Already booked")
    }else{
      const newBookmarks = [...bookmarks,blog];
      setBookmarks(newBookmarks);
  
    }



 
    const totaltime =parseFloat(readingTime)+parseFloat(blog.Time);
    if(totaltime>20){
      alert("Total credit can not exceed 20")
    }else{
      setReadingTime(totaltime)
    }
 
    if(remainingTime<0){
      alert("Remaining credit value can not negative")
    }else{
      const remainingTime = 20- totaltime;
      setRemainingTime(remainingTime)
      

    }


 }

 
 return (

     <>
    
     <Header></Header>
   <div className='flex'>
    <Blogs handleAddToBookmark={handleAddToBookmark}></Blogs>
    <Bookmarks bookmarks={bookmarks} readingTime={readingTime} remainingTime ={remainingTime} ></Bookmarks>
   </div>
      
     
    </>
  )
}

export default App
