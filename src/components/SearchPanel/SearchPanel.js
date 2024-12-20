import { Component } from "react";
import "./search-panel.css";

class SearchPanel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: "",
    };
  }

  onUpdateSearch = (e) => {
    const term = e.target.value;
    this.setState({ term: term });
    this.props.updateTerm(term);
  };

  render() {
    return (
      <input
        type="text"
        placeholder="Найти сотрудника"
        className="form-control search-input"
        value={this.state.term}
        onChange={this.onUpdateSearch}
      ></input>
    );
  }
}

export default SearchPanel;
