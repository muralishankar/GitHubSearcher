import React from 'react';
import * as _ from "lodash";
import './repoSearchResult.css';

export default function RepoSearchResult(props) {
    let { items } = props;//language
    if(items.length===0){
        return <div className="not-found">No Repository Found</div>
    }
    return items.map((item) => {
        return <div key={_.get(item,"id")} className="repo-item-container">
            <div className="repo-info">
                <div title={_.get(item,"name")} className="repo-info-item"><div className="lable">Repo Name </div><div className="value"><a href={item.html_url}>{_.get(item,"name")}</a></div></div>
                <div title={_.get(item,"login")} className="repo-info-item"><div className="lable">Language</div> <div className="value">{_.get(item,"language")}</div></div>
                <div title={_.get(item,"forks")} className="repo-info-item"><div className="lable">Forks</div> <div className="value">{_.get(item,"forks")}</div></div>
                <div title={_.get(item,"login")} className="repo-info-item"><div className="lable">Open Issues</div> <div className="value">{_.get(item,"open_issues")}</div></div>
                <div title={_.get(item,"owner.login")} className="repo-info-item"><div className="lable">Author</div><div className="value"><a href={_.get(item,"owner.html_url")}>{_.get(item,"owner.login")}</a></div></div>
            </div>
        </div>
    })

}