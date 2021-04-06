import React from 'react'

export default function Repo(props) {
    
    const RepoName = props.reponame.split("/");

    return (
        <div className="card"> 
            <img src={props.avatar} alt="Avatar" style={{width:"100%"}}></img>
            <div className="container">
                <div className="RepoName">
                    <h4><b>{RepoName[1]}</b></h4>
                </div>
                <div className="ownerName">
                    <h5><b>Owner : {props.ownername}</b></h5>
                </div>
                <div className="description">
                    <p>{props.description?props.description.substring(0,90)+"...":"no description"}</p>
                </div>
            </div>
            <a href={props.Repolink} className="LinkToRepo">Link to repo</a> 
        </div>
    )
}
