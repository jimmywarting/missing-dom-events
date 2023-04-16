/*! missing-dom-events. MIT License. Jimmy Wärting <https://jimmy.warting.se/opensource> */

const DOMEvents = {
  AnimationEvent: { animationName: '', elapsedTime: 0, pseudoElement: '' },
  AnimationPlaybackEvent: { target: null, currentTime: 0, timelineTime: 0, type: '', bubbles: false, cancelable: false },
  AudioProcessingEvent: { playbackTime: 0, inputBuffer: null, outputBuffer: null, inputBufferList: null, outputBufferList: null },
  BeforeCreatePolicyEvent: { documentURI: '', request: null, policy: null },
  BeforeInstallPromptEvent: { platforms: [], userChoice: null, prompt: null },
  BeforeUnloadEvent: { returnValue: '' },
  BlobEvent: { data: null, timecode: 0 },
  BluetoothAdvertisingEvent: { device: null, uuids: [] },
  CharacterBoundsUpdateEvent: { characterBounds: [] },
  ClipboardEvent: { clipboardData: null },
  CloseEvent: { wasClean: false, code: 0, reason: '' },
  CompositionEvent: { data: '', locale: '', view: null },
  ContentVisibilityAutoStateChangeEvent: { contentVisibility: '', isTrusted: false },
  CookieChangeEvent: { changedCookie: null },
  CSSTransitionEvent: { propertyName: '', elapsedTime: 0 },
  CustomEvent: { detail: {}, bubbles: false, cancelable: false },
  DeviceMotionEvent: { acceleration: null, accelerationIncludingGravity: null, rotationRate: null, interval: 0 },
  DeviceOrientationEvent: { alpha: null, beta: null, gamma: null, absolute: false },
  DocumentPictureInPictureEvent: { pictureInPictureElement: null, isPictureInPicture: false },
  DragEvent: { dataTransfer: null, clientX: 0, clientY: 0, screenX: 0, screenY: 0 },
  ErrorEvent: { message: '', filename: '', lineno: 0, colno: 0, error: null },
  FocusEvent: { relatedTarget: null, canBubble: false, cancelable: false },
  FontFaceSetLoadEvent: { fontfaces: null, isTrusted: false },
  FormDataEvent: { formData: null },
  GamepadAxisEvent: { gamepad: null, axis: 0, value: 0 },
  GamepadButtonEvent: { gamepad: null, button: 0, value: 0 },
  GamepadEvent: { gamepad: null },
  HashChangeEvent: { oldURL: '', newURL: '' },
  HIDConnectionEvent: { device: null, connect: false, keepAlive: false },
  HIDInputReportEvent: { device: null, reportId: 0, data: null },
  IDBVersionChangeEvent: { oldVersion: 0, newVersion: 0 },
  InputEvent: { inputType: '', data: '', dataTransfer: null },
  KeyboardEvent: { key: '', code: '', location: 0, ctrlKey: false, shiftKey: false, altKey: false, metaKey: false, repeat: false, isComposing: false },
  MediaEncryptedEvent: { initData: null, initDataType: '' },
  MediaKeyMessageEvent: { message: null, destinationURL: '', messageType: '' },
  MediaQueryListEvent: { media: '', matches: false },
  MediaStreamEvent: { stream: null },
  MediaStreamTrackEvent: { track: null },
  MerchantValidationEvent: { validationURL: '', methodName: '', methodData: {} },
  MessageEvent: { data: null, origin: '', lastEventId: '', source: null },
  MIDIConnectionEvent: { port: null },
  MIDIMessageEvent: { data: null, receivedTime: 0, target: null },
  MouseEvent: { button: 0, buttons: 0, clientX: 0, clientY: 0, screenX: 0, screenY: 0, movementX: 0, movementY: 0, offsetX: 0, offsetY: 0 },
  MutationEvent: { relatedNode: null, prevValue: '', newValue: '', attrName: '', attrChange: 0 },
  NavigateEvent: { url: '', transferMode: '', target: null },
  NavigationCurrentEntryChangeEvent: { entry: null },
  OfflineAudioCompletionEvent: { renderedBuffer: null },
  OverscrollEvent: { deltaY: 0, deltaX: 0, scrollOffsetMax: 0, scrollOffsetMin: 0, velocityY: 0, velocityX: 0 },
  PageTransitionEvent: { persisted: false },
  PaymentMethodChangeEvent: { methodDetails: {}, methodName: '' },
  PaymentRequestUpdateEvent: { total: null, methodData: [], shippingOption: null },
  PictureInPictureEvent: { pictureInPictureElement: null },
  PointerEvent: { pointerId: 0, width: 0, height: 0, pressure: 0, tangentialPressure: 0, tiltX: 0, tiltY: 0, twist: 0, pointerType: '', isPrimary: false },
  PopStateEvent: { state: null },
  PresentationConnectionAvailableEvent: { connection: null },
  PresentationConnectionCloseEvent: { reason: '', message: '', code: 0 },
  ProgressEvent: { lengthComputable: false, loaded: 0, total: 0, type: '', target: null },
  PromiseRejectionEvent: { reason: null, promise: null },
  RTCDataChannelEvent: { channel: null },
  RTCDTMFToneChangeEvent: { tone: '', duration: 0 },
  RTCErrorEvent: { error: null },
  RTCPeerConnectionIceErrorEvent: { hostCandidate: '', url: '', errorCode: 0, statusText: '' },
  RTCPeerConnectionIceEvent: { candidate: null },
  RTCTrackEvent: { track: null, streams: [], receiver: null, transceiver: null, kind: '' },
  SecurityPolicyViolationEvent: { documentURI: '', referrer: '', blockedURI: '', violatedDirective: '', originalPolicy: '', sourceFile: '', statusCode: 0 },
  SensorErrorEvent: { error: null },
  SpeechSynthesisErrorEvent: { error: null },
  SpeechSynthesisEvent: { charIndex: 0, utterance: null, elapsedTime: 0, name: '' },
  StorageEvent: { key: '', oldValue: null, newValue: null, url: '', storageArea: null },
  SubmitEvent: { submitter: null },
  TaskPriorityChangeEvent: { taskId: 0, taskPriority: '' },
  TextEvent: { data: '', inputMethod: 0, locale: '', isComposing: false },
  TextFormatUpdateEvent: { updateDetails: null },
  TextUpdateEvent: { data: '', inputMethod: 0, locale: '', isComposing: false },
  ToggleEvent: { detail: null },
  TouchEvent: { touches: [], targetTouches: [], changedTouches: [], ctrlKey: false, shiftKey: false, altKey: false, metaKey: false },
  TrackEvent: { track: null },
  TransitionEvent: { propertyName: '', elapsedTime: 0, pseudoElement: '' },
  UIEvent: { detail: 0, view: null },
  USBConnectionEvent: { device: null, connectionStatus: '' },
  VirtualKeyboardGeometryChangeEvent: { keyboardHeight: 0, keyboardWidth: 0, offsetX: 0, offsetY: 0 },
  WebGLContextEvent: { statusMessage: '' },
  WheelEvent: { deltaX: 0, deltaY: 0, deltaZ: 0, deltaMode: 0 },
  WindowControlsOverlayGeometryChangeEvent: { width: 0, height: 0 },
  XRInputSourceEvent: { inputSource: null },
  XRInputSourcesChangeEvent: { added: [], removed: [], updated: [] },
  XRReferenceSpaceEvent: { referenceSpace: null },
  XRSessionEvent: { session: null },
}

const events = Object.entries(DOMEvents).map(([name, defProps]) => {
  if (name in globalThis) return [name, globalThis[name]]

  // create a class
  const klass = {
    [name]: class extends Event {
      constructor (type, opt = {}) {
        super(type, opt)
        if (arguments.length === 0) {
          throw new TypeError(`Failed to construct '${name}': 1 argument required, but only 0 present.`)
        }
        const props = { ...defProps }
        for (const key in props) {
          this[key] = props[key] ?? opt[key]
        }
      }
    }
  }[name]

  const proto = klass.prototype
  const setting = { enumerable: true, writable: true, configurable: true }

  for (const key in defProps) {
    Object.defineProperty(proto, key, setting)
  }

  // fix constructor name
  Object.defineProperties(proto, {
    name: { value: name, enumerable: false, writable: false },
    [Symbol.toStringTag]: { value: name, enumerable: false, writable: false },
  })

  return [name, klass]
})

/** @type {{[K in keyof DOMEvents]: window[K]}} */
export default Object.fromEntries(events)
