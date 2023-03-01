function CommitItems(props)
{
    const date = new Date(props.date_created);
    const formatted_date = date.toDateString().slice(4, 10) + ", " + date.toDateString().slice(-4);

    return(
        <div className="commit-item">
            <div className="img-col">
                <img className="pfp" src={props.pfp} alt="commit author"></img>
            </div>
            
            <div className="txt-col">
                <div>
                    <p className="title"> <span>{props.username}</span> • {formatted_date}</p>

                    <p className="hash"> Hash: {props.hash}</p>
                </div>

                <p className="commit-name">{props.title}</p>
            </div>            
        </div>
    );
}

export default CommitItems;