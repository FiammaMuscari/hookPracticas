import React from "react";
import { useCounter } from "../hooks/useCounter";
import { useFetch } from "../hooks/useFetch";
import { Blockquote } from "./Blockquote";

export const Layout = () => {

  const { counter, increment } = useCounter(1);
  const { data, isLoading } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );
//destructuring
  const { author, quote } = !!data && data[0];

  return (
    <>
      <h3>The Breaking Bad API - Layout</h3>
      <hr />

      {isLoading ? (
        <div className="alert alert-info text-center">Loading...</div>
      ) : (
        <Blockquote author={author} quote={quote} />
      )}

      <button
        className="btn btn-success"
        onClick={() => increment()}
        disabled={isLoading}
      >
        Next quote
      </button>
    </>
  );
};
