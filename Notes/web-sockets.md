# Understanding WebSockets

* **Persistent Connection**: Unlike HTTP, WebSockets do not require establishing a new connection for every request. 
* **The Handshake & Upgrade**: 
    * The initial connection between the client and server is called the **handshake**. It actually starts as a standard HTTP request.
    * The client asks to upgrade the connection (using `Connection: Upgrade` and `Upgrade: websocket` HTTP headers).
    * If the server supports WebSockets and accepts the request, it **upgrades** the connection from HTTP to a WebSocket connection.
* **Continuous Communication**: 
    * Once established, the connection remains open (acting like a permanent connection) until either the client or server explicitly closes it.
    * **Bidirectional Flow (Full-Duplex)**: Data can flow freely back and forth between the server and the client at any time over this single, persistent connection. This allows the server to *push* data to the client without the client having to ask for it.
* **Low Overhead & Latency**: After the initial handshake, messages are sent without the bulky HTTP headers (like cookies and metadata) that accompany every standard HTTP request. This makes communication much faster and more lightweight.
* **Protocol Scheme**: WebSockets use their own URL schemes: `ws://` (unencrypted) and `wss://` (encrypted, similar to HTTPS).

## When to use WebSockets vs HTTP?
WebSockets are ideal for real-time applications where low latency and constant data updates are critical:
* **Chat Applications**: WhatsApp, Slack, Discord.
* **Live Updates**: Stock market tickers, live sports scores, real-time dashboards.
* **Collaborative Tools**: Multiple people editing a Google Doc or Figma file at the same time.
* **Multiplayer Gaming**: Real-time browser games where player movements need to be synced instantly.

## The Coming of Socket.io
While WebSockets provide the core protocol for real-time communication, working with raw WebSockets can sometimes be difficult. This is where **Socket.io** comes in:
* **What it is**: Socket.io is a popular JavaScript library that wraps around WebSockets to make real-time app development much easier.
* **Fallbacks**: If a user's browser or network doesn't support WebSockets, Socket.io automatically falls back to other techniques (like HTTP long-polling) to keep the connection alive.
* **Extra Features**: It provides built-in support for auto-reconnection, broadcasting messages to multiple clients (rooms/channels), and simple event-based communication out of the box.
* **Important Note**: Socket.io uses its own protocol on top of WebSockets, meaning a raw WebSocket client cannot connect to a Socket.io server, and vice versa.

## A Note on WebRTC
* **What it is**: WebRTC (Web Real-Time Communication) is another technology for real-time communication, but with a different focus. 
* **Peer-to-Peer (P2P)**: While WebSockets rely on a central server to route messages between clients, WebRTC allows clients (browsers) to connect **directly** to each other.
* **Use Cases**: WebRTC is heavily optimized for high-bandwidth, extremely low-latency streaming of audio and video (e.g., Google Meet, Discord Voice). 
* **How they work together**: WebRTC often uses WebSockets for the initial setup. Clients use WebSockets to talk to a server to exchange their connection details so they can find each other (this process is called "signaling"). Once connected, they use WebRTC to send the heavy video/audio data directly to each other without burdening the server.
