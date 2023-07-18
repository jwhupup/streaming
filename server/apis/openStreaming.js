import { $ } from 'execa';

exports.handler = async function (event, context) {
  try {
    const streamingUrl = ''
    await $`sudo apt-get install build-essential procps curl file git`;
    await $`sh -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"`;
    await $`echo 'eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"' >> $HOME/.bash_profile`;
    await $`eval "$(/home/linuxbrew/.linuxbrew/bin/brew shellenv)"`;
    await $`brew doctor`;
    await $`brew install ffmpeg`;
    $`node app.js`;
    $`ffmpeg -f avfoundation -i "1" -vcodec libx264 -preset ultrafast -acodec libfaac -f flv rtmp://localhost:1935/live/streaming.flv`;

    return {
      statusCode: 200,
      body: JSON.stringify({ streamingUrl: 'ws://localhost:8000/live/streaming.flv' })
    }
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error })
    }
  }
};