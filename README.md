# template <img src="https://user-images.githubusercontent.com/1148376/183421896-8fea5bef-6d32-4f49-ab6c-f2fe7e6ac4ab.svg" width="20px" height="20px" title="This package contains built-in JSDoc declarations (...works as equally well as d.ts)" alt="JSDoc icon, indicating that this package has built-in type declarations">

This is a bunch of web based dom events that can be triggered in the browser.
But for backends like NodeJS.

It started out as `ErrorEvent` wasn't globally defined in NodeJS, so i wanted
to create a polyfill for it. And since all DOM Events is pretty much the same.
i polyfilled mostly all of them (80+ in fact).

Most of them won't even make since in a backend. But some of them are. Like the
one Deno have for instance. Some are essential for a proper web Worker, it can
for instance dispatch a `ErrorEvent`.

Someone who is building a macro/hotkey might want to dispatch keyboard / mouse
events.

- All events extends `Event`
- If the event exist natively on global scope, then it will be used instead.

## Install

`missing-dom-events` is an ESM-only module - you are not able to import it with `require`. If you are unable to use ESM in your project you can use the async `import('missing-dom-events')` from CommonJS to load `missing-dom-events` asynchronously.<br>
`npm install missing-dom-events`

## Use

```js
import events from 'missing-dom-events'

const errorEvent = new events.ErrorEvent('error', {
  message: 'An error occurred',
  error: new Error('Something went wrong'),
  filename: 'script.js',
  lineno: 10,
  colno: 5,
  source: 'http://example.com/myscript.js',
  type: 'unhandledrejection'
})

worker.dispatchEvent(errorEvent)
```

# Compatibility table
This is all the events that are built in into the engine natively.
All of this are also what you will get out from importing this package.

┌──────────────────────────────────────────┬──────┬──────┐
│                 (Event)                  │ Node │ Deno │
├──────────────────────────────────────────┼──────┼──────┤
│              AnimationEvent              │  ❌  │  ❌  │
│          AnimationPlaybackEvent          │  ❌  │  ❌  │
│           AudioProcessingEvent           │  ❌  │  ❌  │
│         BeforeCreatePolicyEvent          │  ❌  │  ❌  │
│         BeforeInstallPromptEvent         │  ❌  │  ❌  │
│            BeforeUnloadEvent             │  ❌  │  ❌  │
│                BlobEvent                 │  ❌  │  ❌  │
│        BluetoothAdvertisingEvent         │  ❌  │  ❌  │
│        CharacterBoundsUpdateEvent        │  ❌  │  ❌  │
│              ClipboardEvent              │  ❌  │  ❌  │
│                CloseEvent                │  ❌  │  ✅  │
│             CompositionEvent             │  ❌  │  ❌  │
│  ContentVisibilityAutoStateChangeEvent   │  ❌  │  ❌  │
│            CookieChangeEvent             │  ❌  │  ❌  │
│            CSSTransitionEvent            │  ❌  │  ❌  │
│               CustomEvent                │  ✅  │  ✅  │
│            DeviceMotionEvent             │  ❌  │  ❌  │
│          DeviceOrientationEvent          │  ❌  │  ❌  │
│      DocumentPictureInPictureEvent       │  ❌  │  ❌  │
│                DragEvent                 │  ❌  │  ❌  │
│                ErrorEvent                │  ❌  │  ✅  │
│                FocusEvent                │  ❌  │  ❌  │
│           FontFaceSetLoadEvent           │  ❌  │  ❌  │
│              FormDataEvent               │  ❌  │  ❌  │
│             GamepadAxisEvent             │  ❌  │  ❌  │
│            GamepadButtonEvent            │  ❌  │  ❌  │
│               GamepadEvent               │  ❌  │  ❌  │
│             HashChangeEvent              │  ❌  │  ❌  │
│            HIDConnectionEvent            │  ❌  │  ❌  │
│           HIDInputReportEvent            │  ❌  │  ❌  │
│          IDBVersionChangeEvent           │  ❌  │  ❌  │
│                InputEvent                │  ❌  │  ❌  │
│              KeyboardEvent               │  ❌  │  ❌  │
│           MediaEncryptedEvent            │  ❌  │  ❌  │
│           MediaKeyMessageEvent           │  ❌  │  ❌  │
│           MediaQueryListEvent            │  ❌  │  ❌  │
│             MediaStreamEvent             │  ❌  │  ❌  │
│          MediaStreamTrackEvent           │  ❌  │  ❌  │
│         MerchantValidationEvent          │  ❌  │  ❌  │
│               MessageEvent               │  ✅  │  ✅  │
│           MIDIConnectionEvent            │  ❌  │  ❌  │
│             MIDIMessageEvent             │  ❌  │  ❌  │
│                MouseEvent                │  ❌  │  ❌  │
│              MutationEvent               │  ❌  │  ❌  │
│              NavigateEvent               │  ❌  │  ❌  │
│    NavigationCurrentEntryChangeEvent     │  ❌  │  ❌  │
│       OfflineAudioCompletionEvent        │  ❌  │  ❌  │
│             OverscrollEvent              │  ❌  │  ❌  │
│           PageTransitionEvent            │  ❌  │  ❌  │
│         PaymentMethodChangeEvent         │  ❌  │  ❌  │
│        PaymentRequestUpdateEvent         │  ❌  │  ❌  │
│          PictureInPictureEvent           │  ❌  │  ❌  │
│               PointerEvent               │  ❌  │  ❌  │
│              PopStateEvent               │  ❌  │  ❌  │
│   PresentationConnectionAvailableEvent   │  ❌  │  ❌  │
│     PresentationConnectionCloseEvent     │  ❌  │  ❌  │
│              ProgressEvent               │  ❌  │  ✅  │
│          PromiseRejectionEvent           │  ❌  │  ✅  │
│           RTCDataChannelEvent            │  ❌  │  ❌  │
│          RTCDTMFToneChangeEvent          │  ❌  │  ❌  │
│              RTCErrorEvent               │  ❌  │  ❌  │
│      RTCPeerConnectionIceErrorEvent      │  ❌  │  ❌  │
│        RTCPeerConnectionIceEvent         │  ❌  │  ❌  │
│              RTCTrackEvent               │  ❌  │  ❌  │
│       SecurityPolicyViolationEvent       │  ❌  │  ❌  │
│             SensorErrorEvent             │  ❌  │  ❌  │
│        SpeechSynthesisErrorEvent         │  ❌  │  ❌  │
│           SpeechSynthesisEvent           │  ❌  │  ❌  │
│               StorageEvent               │  ❌  │  ❌  │
│               SubmitEvent                │  ❌  │  ❌  │
│         TaskPriorityChangeEvent          │  ❌  │  ❌  │
│                TextEvent                 │  ❌  │  ❌  │
│          TextFormatUpdateEvent           │  ❌  │  ❌  │
│             TextUpdateEvent              │  ❌  │  ❌  │
│               ToggleEvent                │  ❌  │  ❌  │
│                TouchEvent                │  ❌  │  ❌  │
│                TrackEvent                │  ❌  │  ❌  │
│             TransitionEvent              │  ❌  │  ❌  │
│                 UIEvent                  │  ❌  │  ❌  │
│            USBConnectionEvent            │  ❌  │  ❌  │
│    VirtualKeyboardGeometryChangeEvent    │  ❌  │  ❌  │
│            WebGLContextEvent             │  ❌  │  ❌  │
│                WheelEvent                │  ❌  │  ❌  │
│ WindowControlsOverlayGeometryChangeEvent │  ❌  │  ❌  │
│            XRInputSourceEvent            │  ❌  │  ❌  │
│        XRInputSourcesChangeEvent         │  ❌  │  ❌  │
│          XRReferenceSpaceEvent           │  ❌  │  ❌  │
│              XRSessionEvent              │  ❌  │  ❌  │
└──────────────────────────────────────────┴──────┴──────┘
