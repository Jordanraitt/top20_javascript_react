import React, {Component} from 'react';
import MusicSelector from '../components/MusicSelector';
import MusicDetail from '../components/MusicDetail';

class MusicContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      music: [],
      currentMusic: null
    };
    this.handleMusicSelected = this.handleMusicSelected.bind(this);
  }

  componentDidMount() {
      const url = 'https://itunes.apple.com/gb/rss/topsongs/limit=20/json';
      const request = new XMLHttpRequest();
      request.open('GET', url);

      request.addEventListener("load", () => {
        if (request.status !== 200) return;
        const jsonString = request.responseText;
        const data = JSON.parse(jsonString);
        this.setState({music: data.feed.entry});
      });
      request.send();
    }

    handleMusicSelected(index) {
      const selectedMusic = this.state.music[index];
      this.setState({currentMusic: selectedMusic})
    }


  render() {
    return(
      <>
        <h2>Select Music</h2>
        <MusicSelector
          music={this.state.music}
          onMusicSelected={this.handleMusicSelected}
        />

        <h3>Music Selected</h3>
          <MusicDetail
          music={this.state.currentMusic}
        />
      </>
    );
  }
}

export default MusicContainer;
