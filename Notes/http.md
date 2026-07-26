# Understanding HTTP

* **What it is**: HTTP (Hypertext Transfer Protocol) is the standard communication protocol widely used in web development.
* **Purpose**: We use this protocol to make requests to the backend (e.g., to GET, POST, UPDATE, or DELETE data).
* **Connection Lifecycle**: 
    * When we need data, we open a single connection to the server.
    * Once the server responds with our data, the connection is immediately closed.
* **Conclusion**: This request-response model — where the connection is closed immediately after the response is received — is the defining characteristic of an HTTP connection.

