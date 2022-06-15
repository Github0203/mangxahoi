import React from "react";
import BodyWrapper from "./BodyWrapper";
import { Thanhtaskbar } from "./Thanhtaskbar";

export const DashboardLayout = ({ children }) => {

  return (
    <BodyWrapper>
      <div className="">
<Thanhtaskbar />
        <div className="">
          <main className="">
              <div
                className="content-box"
                style={{ flexGrow: 2, flexBasis: "0%" }}
              >
                {children}
              </div>
          </main>
        </div>
      </div>
    </BodyWrapper>
  );
};
