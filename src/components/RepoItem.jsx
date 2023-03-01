import { useState } from "react";
import Commits from "./Commits";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCodeFork } from "@fortawesome/free-solid-svg-icons";
import { faStar } from "@fortawesome/free-regular-svg-icons";

function RepoItem(props)
{
    const [clicked, setClicked] = useState(false);

    const date = new Date(props.date_created);
    const formatted_date = date.toDateString().slice(4, 10) + ", " + date.toDateString().slice(-4);

    function handleClick()
    {
        setClicked(!clicked);
    }

    // disable clicking on repo item
    if(clicked)
    {
        document.body.classList.add("active-modal");
    }
    else
    {
        document.body.classList.remove("active-modal");
    }

    return(
        <div className="repo-item" onClick={handleClick}>
            <div className="img-col">
                <img className="pfp" src={props.pfp} alt="repo owner"></img>
            </div>
            
            <div className="txt-col">
                <div>
                    <p className="title"> <span>{props.name}</span> • {formatted_date}</p>

                    <p className="lang">{props.language} </p>
                </div>

                <p className="desc">{props.desc}</p>

                <div className="fork-star">
                    <div>
                        <FontAwesomeIcon icon={faCodeFork} /> {props.fork_count}
                    </div>

                    <div>
                        <FontAwesomeIcon icon={faStar} /> {props.star_count}
                    </div>
                </div>
            </div>

            {clicked && <Commits repo={props.name} owner={props.org}/>}
        </div>
    );
}

export default RepoItem;