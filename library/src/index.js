import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import List from './components/list';
import Detail from './components/detail'
import YTSearch from 'youtube-api-search';
import Map from "./components/map";

// please update this with your API-key
const API_KEY = "AIzaSyA7qpYTkyEEt_FSySWfVfY0rFFBMf58L4k";

class Application extends Component {
  constructor(props) {
    super(props);
    this.state = {videos: [], selectedVideo: null};
  }

  componentDidMount() {
    this.search('Car Oil Change');
  }

  search(term) {
    YTSearch({key: API_KEY, term: term}, videos => this.setState({videos: videos, selectedVideo: videos[0]}));
  }

  onVideoSelect(selectedVideo) {
    this.setState({selectedVideo})
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <SearchBar onSearchTerm={this.search.bind(this)} />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">
            <Detail video={this.state.selectedVideo} />
          </div>
          <div className=".col-md-4">
            <List
              videos={this.state.videos}
              onVideoSelect={(selectedVideo) => this.onVideoSelect(selectedVideo)}
            />
          </div>
        </div>
        <Map initialPosition={{lat:35.900151, lng: -79.012806}} />
      </div>
    );
  }
}

ReactDOM.render(<Application />,document.querySelector('.container'));
