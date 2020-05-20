# Streams

## Video Streaming

### [json-server](https://github.com/typicode/json-server)
Server for providing restful api with streams
#### Project
> react-examples/apis-json-server

### [Node Media Server](https://github.com/illuspas/Node-Media-Server)
RTMP Server.
Can stream to several formats, one being flv, that will be used since its one of the most simple ones.
#### Project
> react-examples/rtmp-server
#### Configuration:
> Output: http://localhost:8000/live/STREAM_NAME.flv

> Input: rtmp://localhost/live/STREAM_NAME

### [OBS](https://obsproject.com/)
Record with Display Capture and Audio Capture if needed.
> Stream: rtmp://localhost/live
> Stream Id: STREAM_NAME

### [flv.js](https://github.com/Bilibili/flv.js/)
FLV player.
Example shown in doc.

### React App
> STREAM_NAME: stream-<stream.id>