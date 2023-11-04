import  React from 'react'

const Movie=(props)=>{
    return(
        <div className='movie'>
        <img src={props.img} alt="no fount" />
        <p>{props.title}</p>
        <p>Year:{props.year} </p>
        <p> imdbID :{props.imd} </p>
    </div>
    )
}
export default Movie;

