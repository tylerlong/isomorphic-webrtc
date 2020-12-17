import wrtc from 'wrtc';
import mediaDevices from 'node-webrtc-media-devices';
wrtc.mediaDevices = mediaDevices;

export default wrtc;
