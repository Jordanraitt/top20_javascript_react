import React from 'react';


const MusicSelector = (props) => {
  const options = props.music.map((music, index) => {
    return <option value={music.id.attributes["im:id"]} key={music.id.attributes["im:id"]}>
      {music["im:name"].label}
    </option>
  })

  function handleChange(event) {
    props.onMusicSelected(event.target.value);
  }

  return(
    <select id='music-seletor' defaultValue='default'>
      <option disabled value='default'>Choose a song</option>
      {options}
    </select>
  )
}
export default MusicSelector;
