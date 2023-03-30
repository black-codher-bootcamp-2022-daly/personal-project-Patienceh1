import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass} from '@fortawesome/free-solid-svg-icons'

const Search = (props) => {
    const { keyword, setKeyword, findBooks} = props;
  
    function handleChange(changeEvent) {
      console.log("Someone Typed event =>", changeEvent);
      setKeyword(changeEvent.target.value);
    }
  
    function onSubmit (event) {
      event.preventDefault()
      findBooks(keyword)
    }
    return (
      <form className="input-wrapper place-content-end">
          <p style={{ color: "#2F5061" }}>
          <em>{keyword && "Keywords Typed: " + keyword}</em>
        </p>
        <FontAwesomeIcon icon={faMagnifyingGlass} />
        <input className="search_input"
          type="text"
          value={props.keyword}
          onChange={handleChange}
          placeholder="Browse Books..."
        />
        <input type="submit" onClick={onSubmit} />
      </form>
    );
  };
  export default Search;
  