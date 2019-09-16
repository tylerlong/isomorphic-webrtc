// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API#WebRTC_interfaces
module.exports = {
// https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API#Connection_setup_and_management
  RTCPeerConnection: global.RTCPeerConnection,
  RTCDataChannel: global.RTCDataChannel,
  RTCDataChannelEvent: global.RTCDataChannelEvent,
  RTCSessionDescription: global.RTCSessionDescription,
  RTCSessionDescriptionCallback: global.RTCSessionDescriptionCallback,
  RTCStatsReport: global.RTCStatsReport,
  RTCIceCandidate: global.RTCIceCandidate,
  RTCIceTransport: global.RTCIceTransport,
  RTCIceServer: global.RTCIceServer,
  RTCPeerConnectionIceEvent: global.RTCPeerConnectionIceEvent,
  RTCRtpSender: global.RTCRtpSender,
  RTCRtpReceiver: global.RTCRtpReceiver,
  RTCRtpContributingSource: global.RTCRtpContributingSource,
  RTCTrackEvent: global.RTCTrackEvent,
  RTCConfiguration: global.RTCConfiguration,
  RTCSctpTransport: global.RTCSctpTransport,
  RTCSctpTransportState: global.RTCSctpTransportState,

  // https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API#Identity_and_security
  RTCIdentityProvider: global.RTCIdentityProvider,
  RTCIdentityAssertion: global.RTCIdentityAssertion,
  RTCIdentityProviderRegistrar: global.RTCIdentityProviderRegistrar,
  RTCIdentityEvent: global.RTCIdentityEvent,
  RTCIdentityErrorEvent: global.RTCIdentityErrorEvent,
  RTCCertificate: global.RTCCertificate,

  // https://developer.mozilla.org/en-US/docs/Web/API/WebRTC_API#Telephony
  RTCDTMFSender: global.RTCDTMFSender,
  RTCDTMFToneChangeEvent: global.RTCDTMFToneChangeEvent
}
