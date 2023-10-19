import './styles.scss'
export default () => {
  const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']

  return (
    <>
    <div className="letters">
      {letters.map(el => (
        <span>{el}</span>
      ))}
    </div>
    </>
  )
}