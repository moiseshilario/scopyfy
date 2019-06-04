import React from 'react';

import { Container, Header, SongList } from './styles';

import ClockIcon from '../../assets/images/clock.svg';
import PlusIcon from '../../assets/images/plus.svg';

const Playlist = () => (
  <Container>
    <Header>
      <img
        src="https://mir-s3-cdn-cf.behance.net/project_modules/fs/0994d841602157.57ac63336b606.jpg"
        alt="Playlist"
      />

      <div>
        <span>PLAYLIST</span>
        <h1>This is Rock</h1>
        <p>13 songs</p>

        <button type="button">PLAY</button>
      </div>
    </Header>

    <SongList cellPading={0} cellSpacing={0}>
      <thead>
        <tr>
          <th />
          <th>Title</th>
          <th>Artist</th>
          <th>Album</th>
          <th>
            <img src={ClockIcon} alt="Duration" />
          </th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
        <tr>
          <td>
            <img src={PlusIcon} alt="Add song" />
          </td>
          <td>Turn it again</td>
          <td>RHCP</td>
          <td>Gateaway</td>
          <td>4:49</td>
        </tr>
      </tbody>
    </SongList>
  </Container>
);

export default Playlist;
