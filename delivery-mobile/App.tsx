import React from "react";
import { Routes } from "./src/Routes";
import { RoutesAuth } from "./src/RoutesAuth";

const isUserAuth = true;

export default function App() {
  return !isUserAuth ? <Routes /> : <RoutesAuth />;
}
