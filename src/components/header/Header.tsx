import React, { Component } from "react";

//local
import { Containers } from "../ui";
import UserHeader from "./UserHeader";
import { getLocalStorage } from "../../utils/helpers/localStorage";
import AdminHeader from "./AdminHeader";

class Header extends Component {
  render(): React.ReactNode {
    return (
      <header id="header">
        <Containers>
          {getLocalStorage("admin") === "SUPER_ADMIN" ? (
            <AdminHeader />
          ) : (
            <UserHeader />
          )}
        </Containers>
      </header>
    );
  }
}
export default Header;
