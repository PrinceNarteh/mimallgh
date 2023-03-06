import React from "react";

const WebStore = () => {
  return (
    <div className="mx-auto w-10/12">
      <div>
        <div className="h-96 bg-teal-500"></div>
        <div className=" flex flex-col md:flex-row">
          <div className="relative bottom-16 left-10 h-32 w-32 shrink-0 rounded-full bg-red-500"></div>
          <div className="-mt-14 space-y-2 pt-2 md:mt-0 md:ml-14">
            <h3 className="text-4xl">Mosco Mart</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo
              sapiente quisquam expedita! Pariatur ipsa blanditiis quibusdam
              ipsam beatae incidunt fugiat cupiditate obcaecati sunt, omnis
              voluptates saepe, autem voluptate harum tempore?
            </p>
            <div className="grid grid-auto-fit-md">
              <p>
                <span className="font-semibold">Contact:</span> 0201234567
              </p>
              <p>
                <span className="font-semibold">Map Direction:</span> 0201234567
              </p>
              <p>
                <span className="font-semibold">Physical Address:</span>{" "}
                CC-000-1234
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WebStore;
