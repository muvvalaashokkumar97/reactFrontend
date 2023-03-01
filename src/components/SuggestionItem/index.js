// Write your code here
import './index.css'

const SuggestionItem = props => {
  const {suggestionList, selectedList} = props
  const {suggestion} = suggestionList
  const clickButton = () => {
    selectedList(suggestion)
  }

  return (
    <li className="list-item">
      <p className="suggestion">{suggestion}</p>
      <button onClick={clickButton} type="button" className="arrow-button">
        <img
          className="arrow"
          src="https://assets.ccbp.in/frontend/react-js/diagonal-arrow-left-up.png"
          alt="arrow"
        />
      </button>
    </li>
  )
}

export default SuggestionItem
