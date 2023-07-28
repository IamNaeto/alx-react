import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";

describe("Notification Component Tests", ()=>{
    it("renders without crashing", ()=>{
        const notification = shallow(<Notifications />)

        expect(notification).toBeDefined();
    });
    it("renders ul", () => {
        const notification = shallow(<Notifications />);
    
        expect(notification.find("ul")).toBeDefined();
      });
    it("renders three list items", ()=>{
        const notification = shallow(<Notifications />)

        expect(notification.find("li")).toHaveLength(3);
    });
    it("renders the text Here is the list of notifications", ()=>{
        const notification = shallow(<Notifications />)

        expect(notification.find("p").text()).toBe("Here is the list of notifications");
    });
});