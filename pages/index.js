import Movies from '../components/Movies'
import requests from '../utils/requests'

export default function Home({ results }) {
  return (
    <div>
      <Movies movies={results} />
    </div>
  )
}

export async function getServerSideProps(context) {
  const genre = context.query.genre

  const request = await fetch(
    `https://api.themoviedb.org/3${
      requests[genre]?.url || requests.fetchTrending.url
    }`
  ).then((res) => res.json())

  return {
    props: { results: request.results },
  }
}
