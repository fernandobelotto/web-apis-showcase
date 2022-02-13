import json from "../web-apis.json";
import Link from "next/link";
export default function index() {
  return (
    <>
      <div className="p-10">
        <div className="flex flex-row justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-5">WEB Apis</h1>
            <h3 className="text-xl  mb-10 text-gray-600">work in progress</h3>
          </div>
          <div>
            <p className="p-1 text-green-800 bg-green-300 text-center rounded">
              experimental
            </p>
            <p className="p-1 text-red-800 bg-red-300 text-center mt-1 rounded">
              deprecated
            </p>
          </div>
        </div>
        <div className="grid md:grid-cols-4 lg:grid-cols-5 sm:grid-cols-2 gap-4 xs:grid-cols-1">
          {json.map((tech, index) => {
            return (
              <>
                <div
                  className={`shadow p-5 border-2 rounded-lg +
                    ${tech.deprecated ? "bg-red-200" : ""} +
                    ${tech.experimental ? "bg-green-200" : ""}`}
                >
                  <div className="flex h-full flex-col justify-between ">
                    <p>
                      {index} - {tech.name}
                    </p>
                    <div className="flex justify-between">
                      <a
                        className="text-blue-500"
                        target={"_blank"}
                        href={tech.link}
                        rel="noreferrer"
                      >
                        Docs
                      </a>
                      <Link href={tech.page}>
                        <a className="text-gray-600">Demo</a>
                      </Link>
                    </div>
                  </div>
                </div>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
}
