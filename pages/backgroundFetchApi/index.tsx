const code = `navigator.serviceWorker.ready.then(async (swReg) => {
    const bgFetch = await swReg.backgroundFetch.fetch('my-fetch', ['/ep-5.mp3', 'ep-5-artwork.jpg'], {
                        title: 'Episode 5: Interesting things.',
                    icons: [{
                        sizes: '300x300',
                    src: '/ep-5-icon.png',
                    type: 'image/png',
        }],
                    downloadTotal: 60 * 1024 * 1024,
    });
    });`;

export default function Index() {
  return (
    <>
      <div className="p-10 prose ">
        <h1>Background Fetch API</h1>
        <p>
          The Background Fetch API provides a method for managing downloads that
          may take a significant amount of time such as movies, audio files, and
          software.
        </p>
        <div className="bg-slate-900 text-white p-5 rounded-lg">{code}</div>
      </div>
    </>
  );
}
