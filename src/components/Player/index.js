import React from 'react';
import Slider from 'rc-slider';

import {
  Container, Current, Volume, Progress, Controls, Time, ProgressSlider,
} from './styles';

import VolumeIcon from '../../assets/images/volume.svg';
import ShuffleIcon from '../../assets/images/shuffle.svg';
import BackwardIcon from '../../assets/images/backward.svg';
import PlayIcon from '../../assets/images/play.svg';
import PauseIcon from '../../assets/images/pause.svg';
import ForwardIcon from '../../assets/images/forward.svg';
import RepeatIcon from '../../assets/images/repeat.svg';

const Player = () => {
  const handle = () => {};

  return (
    <Container>
      <Current>
        <img
          src="data:image/png;base64,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"
          alt="album cover"
        />

        <div>
          <span>Turn it again</span>
          <small>Red Hot Chilli Peppers</small>
        </div>
      </Current>

      <Progress>
        <Controls>
          <button type="button">
            <img src={ShuffleIcon} alt="" />
          </button>
          <button type="button">
            <img src={BackwardIcon} alt="" />
          </button>
          <button type="button">
            <img src={PlayIcon} alt="" />
          </button>
          <button type="button">
            <img src={ForwardIcon} alt="" />
          </button>
          <button type="button">
            <img src={RepeatIcon} alt="" />
          </button>
        </Controls>

        <Time>
          <span>1:39</span>
          <ProgressSlider>
            <Slider
              railStyle={{ background: '#404040', borderRadius: 10 }}
              trackStyle={{ background: '#1eb768' }}
              handleStyle={{ border: 0 }}
            />
          </ProgressSlider>
          <span>4:30</span>
        </Time>
      </Progress>

      <Volume>
        <img src={VolumeIcon} alt="Volume" />
        <Slider
          railStyle={{ background: '#404040', borderRadius: 10 }}
          trackStyle={{ background: '#fff' }}
          handleStyle={{ display: 'none' }}
          value={100}
        />
      </Volume>
    </Container>
  );
};

export default Player;
