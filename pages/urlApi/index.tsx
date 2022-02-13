export default function Index() {
  return (
    <>
      <div className="p-10 prose ">
        <h1>URL API</h1>
        <p>help you manipulate url with easy</p>
        <div className="bg-slate-900 text-white p-5 rounded-lg">
          let url = new URL('http://my-web-site.com/some/path?some=query')
        </div>
      </div>
    </>
  );
}
