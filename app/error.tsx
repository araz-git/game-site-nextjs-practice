"use client";
import React from "react";

type Props = {
  error: Error;
  reset: () => void;
};
const ErrorPage = ({ error, reset }: Props) => {
  console.log("Error", error);
  return (
    <>
      <div>An unexpected error has occured.</div>
      <button className="btn" onClick={() => reset()}>
        reset
      </button>
    </>
  );
};

export default ErrorPage;
