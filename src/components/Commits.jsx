import { useEffect, useState } from "react";
import { Octokit } from "octokit";
import CommitItems from "./CommitItems";

function Commits(props) 
{
    const [commits, setCommits] = useState([]);

    const octokit = new Octokit({
        auth: process.env.REACT_APP_GIT_TOKEN
    });

    async function getCommits()
    {
        try 
        {
            const result = await octokit.request("GET /repos/{owner}/{repo}/commits", {
                owner: props.owner,
                repo: props.repo,
            });

            setCommits(result.data);
        }
        catch(err)
        {
            console.log("git request error: " + err);
        }
    }

    useEffect(() =>
    {
        getCommits();
    }, []);
     
    return(
        <div className="my-modal">
            <div className="overlay">
                <div className="my-modal-content">
                    <div className="commits-container">
                        <h4>Commits</h4>

                        {commits.map((commit) =>
                        {
                            return (
                                <CommitItems 
                                    key={commit.sha}
                                    title={commit.commit.message} 
                                    username={commit.author !== null ? commit.author.login : "Github User"}
                                    hash={commit.sha}
                                    date_created={commit.commit.author.date}
                                    pfp={commit.author !== null ? commit.author.avatar_url : "https://i.stack.imgur.com/frlIf.png"}
                                />
                            );
                        })} 
                    </div>    
                </div>
            </div> 
        </div>
    );
}

export default Commits;