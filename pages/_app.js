import "../styles/globals.css";
import SideBar from "../src/components/SideBar";
import Channelbar from "../src/components/ChannelBar";
import ContentContainer from "../src/components/ContentContainer";
import LogIn from "../src/components/LoginPage/Login";
import React from "react";

function MyApp({ Component, pageProps }) {
  const [isLogIn, setIsLogIn] = React.useState(true);

  if (isLogIn) {
    return (
      <div className="flex">
        <SideBar />
        <div className="ml-[64px] flex-1">
          <ContentContainer component={<Component {...pageProps} />} />
        </div>
      </div>
    );
  } else {
    return (
      <div>
        <LogIn />
      </div>
    );
  }
}

export default MyApp;
