
import PropTypes from 'prop-types';


const Blog = ({blog,handleAddToBookmark}) => {
    const {Title,Cover,Details,Price,Time} = blog;


  

    return (
        <div className='ml-2'>
            <div className=''>
            <img className='h-52 w-52' src={Cover} alt={`Cover picture of the title ${Title}`} />
            </div>
    
            <h3 className="text-2xl mt-2">{Title}</h3>
            <h5 className='text-xl mt-2'>Details:{Details}</h5>
            <div className='flex mt-2' >
                <small>Price:{Price}</small>
                <small className='ml-6'>Credit:{Time}</small>
            </div>
            <button onClick={ ()=>handleAddToBookmark(blog)}  className='bg-secondary px-2 rounded-xl text-white w-40 mt-2' >Select</button>
           
        </div>
       
    );
  
};

Blog.propTypes = {blog: PropTypes.object.isRequired,
    handleAddToBookmark: PropTypes.func
}

export default Blog;