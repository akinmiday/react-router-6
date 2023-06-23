import React from "react";
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
    const error = useRouteError()


    return (
        <>
            <h1>ERROR: {error.message}</h1>
            <pre>Error code: {error.status} - {error.statusText}</pre>
        </>
    )
}