import React from "react";
import { MDBContainer, MDBNavbar, MDBNavbarBrand } from "mdb-react-ui-kit";

function Header() {
  return (
    <div>
      <MDBNavbar light bgColor="info">
        <MDBContainer fluid>
          <MDBNavbarBrand href="/">
            <img
              src="https://i.pinimg.com/originals/14/bd/f7/14bdf7aa1794bc0a9965bbff73deefe2.gif"
              height="30"
              alt="counterpng"
              loading="lazy"
            />
            Counter App
          </MDBNavbarBrand>
        </MDBContainer>
      </MDBNavbar>
    </div>
  );
}

export default Header;
