import Thumbnail from './Thumbnail'

const Movies = ({ movies }) => {
  return (
    <div>
      {movies.map((movie) => (
        <Thumbnail key={movie.id} movie={movie} />
      ))}
    </div>
  )
}

export default Movies
