import './styles.scss'
import states from './data.json'
export default () => {
  return (
    <>
      <ul>
        {states.map(el => 
          <li>
            <span>{el.name}</span>

            <a href="#">
              View jobs
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                <path d="M10 17.5L15 12L10 6.5" stroke="currentColor" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
              </svg>
            </a>
          </li>
        )}
      </ul>
    </>
  )
}