import { Routes, Route } from "react-router-dom";
import { LaunchList } from "./components/LaunchList";
import { LaunchDetails } from "./components/LaunchDetail";
import logo from "./assets/logo-spacex.png";
import { Image } from "@chakra-ui/react";
import { RocketDetails } from "./components/RocketDetails";

export default function App() {
  return (
    <>
      <Image m={4} src={logo} width={300} />
      <Routes>
        <Route path="/" element={<LaunchList />} />
        <Route path="launch/:launchId" element={<LaunchDetails />} />
        <Route path="rockets/:rocketId" element={<RocketDetails />} />
      </Routes>
    </>
  );
}
