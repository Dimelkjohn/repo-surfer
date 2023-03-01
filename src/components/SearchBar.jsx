import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";

function SearchBar(props)
{
    function inputClick(e) 
    {
        document.querySelector(".search-btn").classList.add("search-active");

        e.stopPropagation();
    }

    // revert search btn back to grey
    document.querySelector("body").addEventListener("click", () =>
    {
        document.querySelector(".search-btn").classList.remove("search-active");
    });

    // search for searchbar value
    function handleClick(e)
    {
        const new_org = document.querySelector(".search-input").value;

        props.setOrg(new_org);

        e.preventDefault();

        document.querySelector(".search-input").value = "";
    }

    return (
        <div className="search">
            <form className="search-bar" aria-label="search bar">
            <input className="search-input form-control" type="text" name="search" placeholder="Search any org" onClick={inputClick}></input>

            <button className="search-btn" onClick={handleClick}><FontAwesomeIcon icon={faMagnifyingGlass} /></button>
            </form>
        </div>
    );
}

export default SearchBar;