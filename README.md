# Streaming Demo

```sh
# 推送录屏
ffmpeg -f avfoundation -i "1" -vcodec libx264 -preset ultrafast -acodec libfaac -f flv rtmp://localhost:1935/live/streaming.flv

# 推送摄像头
ffmpeg -f avfoundation  -framerate 30 -i "FaceTime HD Camera" -vcodec libx264 -preset ultrafast -acodec libfaac -f flv rtmp://localhost:1935/live/streaming.flv
```