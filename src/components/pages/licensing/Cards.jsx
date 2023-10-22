import './styles.scss'
export default () => {
  const cards = [
    {
      title: 'Alabama',
      text: 'The facility will need to handle getting your name placed on the Alabama Nurse Aide Registry...'
    },
    {
      title: 'Alaska',
      text: '$330 – Mail. Can work for 120 Days if the application is in process...'
    },
    {
      title: 'Arizona',
      text: 'The facility will need to handle getting your name placed on the Alabama Nurse Aide Registry...'
    },
    {
      title: 'Arkansas',
      text: 'Free – Must-Have Arkansas Address. <br/>Please include clear, readable copies of your ...'
    },
    {
      title: 'California',
      text: 'Fees Vary. In order to transfer your out-of-state certificate to California, you must complete and ...'
    },
    {
      title: 'Colorado',
      text: 'The facility will need to handle getting your name placed on the Alabama Nurse Aide Registry...'
    },
    {
      title: 'Connecticut',
      text: 'The facility will need to handle getting your name placed on the Alabama Nurse Aide Registry...'
    },
    {
      title: 'Delaware',
      text: 'The facility will need to handle getting your name placed on the Alabama Nurse Aide Registry...'
    },
    {
      title: 'Florida',
      text: 'Florida The facility will need to handle getting your name placed on the Alabama Nurse Aide Registry...'
    },
  ]
  return (
    <>
      <div className="cards_wrap">
        {cards.map((el, index) => (
          <div className="card" data-index={index}>
            <img src={`/pictures/licensing/card${index}.jpg`} alt="" />

            <div className="bottom">
              <h4>{el.title}</h4>
              <p dangerouslySetInnerHTML={{ __html: el.text }}/>

              <div className="action">
                <a href="javascript:void(0)">
                  <span>More details</span>
                
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M10 17.5L15 12L10 6.5" stroke="#4D9FFF" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}