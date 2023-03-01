import './index.css'
import {Component} from 'react'
import SuggestionItem from '../SuggestionItem'

class GoogleSuggestions extends Component {
  state = {searchInput: ''}

  searchedList = event => {
    this.setState({searchInput: event.target.value})
  }

  selectedList = value => {
    this.setState({searchInput: value})
  }

  render() {
    const {suggestionsList} = this.props
    const {searchInput} = this.state
    const searchResults = suggestionsList.filter(each =>
      each.suggestion.toLowerCase().includes(searchInput.toLowerCase()),
    )

    return (
      <div className="app-container">
        <div className="google-container">
          <img
            className="img-logo"
            src="https://assets.ccbp.in/frontend/react-js/google-logo.png"
            alt="google logo"
          />
          <div className="search-container">
            <div className="icon-container">
              <img
                className="search-icon"
                alt="search icon"
                src="https://assets.ccbp.in/frontend/react-js/google-search-icon.png"
              />
              <input
                type="search"
                placeholder="Search Google"
                className="search-google"
                onChange={this.searchedList}
                value={searchInput}
              />
            </div>
            <ul className="suggestionList">
              {searchResults.map(eachSearch => (
                <SuggestionItem
                  key={eachSearch.id}
                  suggestionList={eachSearch}
                  selectedList={this.selectedList}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default GoogleSuggestions
