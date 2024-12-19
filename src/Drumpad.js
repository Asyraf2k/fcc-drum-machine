import React from 'react';

const DrumPad = ({ id, audioClip, onClick, keyTrigger }) => {
  return (
    <div className="drum-pad" id={id} onClick={() => onClick(id)}>
      <audio className="clip" id={keyTrigger} src={audioClip}></audio>
      {keyTrigger}
    </div>
  );
};

export default DrumPad;