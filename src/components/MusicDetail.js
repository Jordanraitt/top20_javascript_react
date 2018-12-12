import React from 'react';

const MusicDetail = (props) => {
  if (!props.music) return null
  return(
    <>
      <p>Music</p>
      <p>
      music: {props.music["im:name"].label}
      </p>
    </>
  )
}

export default MusicDetail;
