import PhotoGrid from '../images/photo-grid.png'

export default function Hero() {
  return (
    <div className="heroCard">
      <img src={PhotoGrid} alt='Grid'></img>
      <h1>Online Experiences</h1>
      <p>
        Join unique interactive activities led by one-of-a-kind hosts—all
        without leaving home.
      </p>
    </div>
  )
}
