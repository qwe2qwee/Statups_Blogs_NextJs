"use client";
import React from "react";
import { toast } from "sonner";
import { Button } from "./ui/button";

const Test = () => {
  return <Button onClick={() => toast("Event has been created.")}>Test</Button>;
};

export default Test;
