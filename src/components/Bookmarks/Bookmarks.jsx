

import PropTypes from 'prop-types'
import Bookmark from '../Bookmark/Bookmark';



const Bookmarks = ({bookmarks,readingTime,remainingTime}) => {
    return (
        <div className="md:w-1/3 ml-4">  
      
   
            <h2 className='text-green-500 border-b-2 '>Credit Hour Remaining :{remainingTime}  Hour</h2>
            <h1 className='text-4xl text-bold'>Course Name</h1>
       
          
            {
                bookmarks.map(bookmark =><Bookmark key={bookmark.id} bookmark={bookmark}></Bookmark>)
            }
              {/* <h2>Total Credit :{bookmarks.length}</h2> */}
              <h3>Total Credit : {readingTime}</h3>
     
          
              
              
      
     
            
        </div>
        
        
    );
};
Bookmarks.propTypes ={
    bookmarks: PropTypes.array,
    readingTime:PropTypes.number
   
}

export default Bookmarks;