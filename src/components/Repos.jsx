import { useState, useEffect } from "react";
import RepoItem from "./RepoItem";
import axios from "axios";


function Repos(props) 
{
    const [repo_list, setRepo_list] = useState([]);

    useEffect(() =>
    {
        axios.get("https://api.github.com/orgs/" + props.org + "/repos")
        .then((res) =>
        {
            setRepo_list(res.data);
        })
        .catch((err) =>
        {
            console.log("axios get error: " + err);
            alert("Invalid org, please try again");
        });
    }, [props.org])

    // sort in descending order
    repo_list.sort((a, b) => (b.stargazers_count) - (a.stargazers_count));

    return (
        <div className="repo-list">
            {repo_list.map((repo) =>
            {
                return (
                    <RepoItem
                        key={repo.id}
                        name={repo.name}
                        language={repo.language}
                        desc={repo.description}
                        star_count={repo.stargazers_count}
                        fork_count={repo.forks_count}
                        date_created={repo.created_at}
                        pfp={repo.owner.avatar_url}
                        org={props.org}
                    />
                );
            })}
        </div>
    )
}

export default Repos;