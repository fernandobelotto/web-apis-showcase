export default function Index() {
  return (
    <>
      <div className="p-10 prose ">
        <h1>Vibrario API</h1>
        <p>help you vibrate the device of the user</p>
        <div className="bg-slate-900 text-white p-5 rounded-lg">
          window.navigator.vibrate(200); <br />
          window.navigator.vibrate([200]); <br />
          window.navigator.vibrate([200, 100, 200]); <br />
        </div>
      </div>
    </>
  );
}
