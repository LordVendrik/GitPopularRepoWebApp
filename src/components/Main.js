import React,{useState,useEffect} from 'react'
import Repo from "./Repo"

export default function Main() {

    const [RepoList,SetRepoList] = useState([]);
    const [language,Setlanguage] = useState("javascript");

    useEffect( ()=>{
        var today = new Date();
        today.setDate(today.getDate() - 7);
        var WeekAgo = today.toISOString().substr(0, 10);
        fetch("https://api.github.com/search/repositories?q=language:javascript created:>="+ WeekAgo +" sort:stars")
        .then(res=>res.json())
        .then((data)=>{
            SetRepoList(data.items);
        })
    },[]);

    const GitData = ()=>{
        var today = new Date();
        today.setDate(today.getDate() - 7);
        var WeekAgo = today.toISOString().substr(0, 10);
        fetch("https://api.github.com/search/repositories?q=language:"+language+" created:>="+ WeekAgo +" sort:stars")
        .then(res=>res.json())
        .then((data)=>{
            SetRepoList(data.items);
        })
    }

    return (
        <div>
            <label htmlFor="language" className="Option">Search by given languages</label>

            <div id="selectionDiv">
            <select onChange={(e)=>{Setlanguage(e.target.value);}} id="language" name="language">
                <option value="javascript">javascript</option>
                <option value="python">python</option>
                <option value="java">java</option>
                <option value="C++">C++</option>
                <option value="PHP">Php</option>
            </select>

            <button type="submit" className="SubmitBut" onClick={()=>{GitData()}}>Search</button>
            </div>


            <div className="row center">
                {RepoList.length>0?RepoList.map(SingleRepo=>{
                    return(
                        <Repo key={SingleRepo.id} ownername={SingleRepo.owner.login} reponame={SingleRepo.full_name} description={SingleRepo.description} Repolink={SingleRepo.html_url} avatar={SingleRepo.owner.avatar_url}/>
                    )
                }):<h1>"loading...."</h1>}
            </div>
        </div>
    )
}
