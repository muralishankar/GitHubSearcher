import React, { Component } from 'react';
import * as _ from "lodash";
import logo from './icons/github.svg';
import './GitHubSearcher.css';

type SearcherProps = {
    id?: string
}
type SearcherState = {
    searchType: string,
    searchText: string
}

export default class GitHubSearcher extends Component<SearcherProps, SearcherState> {
    constructor(props: SearcherProps) {
        super(props);
        this.state = {
            searchType: "Users",
            searchText: ""
            
        };
    }
    private onChange(event) {
        this.setState({ searchType: event.target.value });

    }
    private textInput:any = React.createRef();
    private onSearchTextChange = _.debounce((event) => {
        let searchText = this.textInput.current.value;
        this.setState({ searchText: searchText });
        let requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        debugger;
        fetch(`https://api.github.com/search/users?q=${searchText}`, requestOptions as any)
            .then(response => response.json())
            .then(result => {

                console.log(result);
            })
            .catch(error => console.log('error', error));

    }, 1000);
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <div className="App-pannel">
                        <div className="App-name">GitHub Searcher</div>
                        <div className="App-description">Search users or repositories below</div>
                    </div>
                </div>
                <div className="Search-form">
                    <input type="text" ref={this.textInput as any} placeholder="Start typing to search .." onChange={this.onSearchTextChange.bind(this)} name="name" />
                    <select value={this.state.searchType} onChange={this.onChange.bind(this)}>
                        <option value="Users">Users</option>
                        <option value="Repositories">Repositories</option>
                    </select>
                </div>
            </div>
        );
    }
}
