
import PropTypes from 'prop-types'
const Bookmark = ({bookmark}) => {

    const {Title} = bookmark;
  
  
    return (
        <div>
            <h3 className='text-2xl'>{Title}</h3>
           
           
          
        </div>
      
        
    );
};
Bookmark.propTypes = {
    bookmark :PropTypes.object
}

export default Bookmark;