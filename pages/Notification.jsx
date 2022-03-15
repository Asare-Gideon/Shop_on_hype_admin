import React from "react";
import Dropdown from "../src/components/Dropdown/Dropdown";

function Notification() {
  return (
    <div className="min-h-[94vh]">
      <h3>Notification</h3>

      <Dropdown
        items={[{ name: "Hello" }, { name: "there" }, { name: "Fuck" }]}
      />
    </div>
  );
}

export default Notification;
