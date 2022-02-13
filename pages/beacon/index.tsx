export default function Index() {
  return (
    <>
      <div className="p-10 prose">
        <h1>Bluetooth API</h1>
        <p>
          The Beacon API is used to send an asynchronous and non-blocking
          request to a web server. The request does not expect a response.
          Unlike requests made using XMLHttpRequest or the Fetch API, the
          browser guarantees to initiate beacon requests before the page is
          unloaded and to run them to completion. The main use case for the
          Beacon API is to send analytics such as client-side events or session
          data to the server. Historically, websites have used XMLHttpRequest
          for this, but browsers do not guarantee to send these asynchronous
          requests in some circumstances (for example, if the page is about to
          be unloaded). To combat this, websites have resorted to various
          techniques, such as making the request synchronous, that have a bad
          effect on responsiveness. Because beacon requests are both
          asynchronous and guaranteed to be sent, they combine good performance
          characteristics and reliability.
        </p>
      </div>
    </>
  );
}
