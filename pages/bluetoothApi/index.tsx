export default function Index() {
  return (
    <>
      <div className="p-10 prose">
        <h1>Bluetooth API</h1>
        <p>
          The Broadcast Channel API allows basic communication between browsing
          contexts (that is, windows, tabs, frames, or iframes) and workers on
          the same origin. By creating a BroadcastChannel object, you can
          receive any messages that are posted to it. You dont have to maintain
          a reference to the frames or workers you wish to communicate with:
          they can “subscribe” to a particular channel by constructing their own
          BroadcastChannel with the same name, and have bi-directional
          communication between all of them.
        </p>
      </div>
    </>
  );
}
