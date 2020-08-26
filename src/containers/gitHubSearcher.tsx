import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as _ from "lodash";
import { searchState, } from '../constants';
import UserSearchResult from "../components/userSearchResult";
import RepoSearchResult from "../components/repoSearchResult";
import { gitSeach, setSearchStateLoading, resetSearchState, setSeachCompleted } from "../middleware/gitSeach";
import logo from '../icons/github.svg';
import './gitHubSearcher.css';

type SearcherProps = {
    type?: string,
    gitSeach: Function,
    setSearchStateLoading: Function,
    resetSearchState: Function,
    setSeachCompleted: Function,
    gitSearcherState: { stateOfSearch: searchState },
    searchIndex: { resultContainer: { users: any, repositories: any } }
}
type SearcherState = {
    searchType: string,
    searchText: string,
    searchResults: Array<Object>,
    stateOfSearch: searchState,
}

class GitHubSearcher extends Component<SearcherProps, SearcherState> {
    constructor(props: SearcherProps) {
        super(props);
        this.state = {
            searchType: props.type === "repositories" ? "repositories" : "users",
            searchText: "",
            searchResults: [],
            stateOfSearch: searchState.INIT,
        };
    }
    private onChange(event) {
        this.setState({ searchType: event.target.value });
        this.onSearch(null);
    }
    private textInput: any = React.createRef();
    private onSearchTextChange = _.debounce((event) => {
        let searchText = this.textInput.current.value;
        if (searchText.length < 3) {
            this.props.resetSearchState();
            return;
        }
        this.setState({ searchText: searchText });
        let { searchIndex } = this.props;
        if (_.get(searchIndex.resultContainer, `${this.state.searchType}.${searchText}`) !== undefined) {
            debugger
            this.props.setSeachCompleted();
            return;
        }
        this.props.gitSeach(this.state.searchType, searchText);
    }, 500);
    private onSearch = (event) => {

        if (this.textInput.current.value.length > 2) {
            this.props.setSearchStateLoading();
            this.onSearchTextChange(event)
        } else {
            this.props.resetSearchState();
        }
    }
    render() {
        let { gitSearcherState,
            searchIndex } = this.props;
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
                    <input type="text" ref={this.textInput as any} placeholder="Start typing to search .." onChange={this.onSearch} name="name" />
                    <select value={this.state.searchType} onChange={this.onChange.bind(this)}>
                        <option value="users">Users</option>
                        <option value="repositories">Repositories</option>
                    </select>
                </div>
                <div className="result-container">
                    {this.SearchResults(gitSearcherState.stateOfSearch, this.state.searchType, searchIndex.resultContainer, this.state.searchText)}
                </div>
            </div>
        );
    }

    private SearchResults = (state, type, searchIndex, searchText) => {

        switch (state) {
            case searchState.INIT: {
                return null;
            }
            case searchState.LOADING: {
                return <div className="result-container-state">Loading ....</div>
            }
            case searchState.ERROR: {
                return <div className="result-container-state">Error On The Search.</div>
            }
            case searchState.SEARCH_COMPLETED: {
                debugger;
                return type === "users" ?
                    <UserSearchResult items={searchIndex.users[searchText]}></UserSearchResult> :
                    <RepoSearchResult items={searchIndex.repositories[searchText]}></RepoSearchResult>;
            }
            default:
                return null;
        }
    }
}
const mapStateToProps = state => {
    return {
        gitSearcherState: state.gitSearcherState,
        searchIndex: state.searchIndex
    };
}
const mapDispatchToProps = dispatch => {
    return {
        gitSeach: (type, query) => {
            dispatch(gitSeach(type, query));
        }, setSearchStateLoading: () => {
            dispatch(setSearchStateLoading());
        }, resetSearchState: () => {
            dispatch(resetSearchState());
        },
        setSeachCompleted: () => {
            dispatch(setSeachCompleted())
        }
    };
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(GitHubSearcher);