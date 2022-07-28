import React, { useEffect, useState } from "react";

export default function TestApi() {
  const [actividad, setActividad] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("https://www.boredapi.com/api/activity", {
      method: "PUT", // or 'PUT' or etc
      headers: {
        "Content-Type": "application/json",
      },
      body: { id: 128, name: "guille" },
    })
      .then((response) => {
        return response.json();
      })
      .then((res) => {
        //throw new error("mal");
        setActividad(res);
      })
      .catch((e) => {
        setError(true);
      })
      .finally(() => setLoading(false));
  }, []);

  /* return <div>{JSON.stringify(actividad)}</div>; */

  return (
    <div>
      {error && "ALGO SALIO MAL"}
      <br />
      {loading && "loading..."}
      <br />
      <br />
      {actividad && (
        <>
          Actividad: {actividad.activity} <br />
          type: {actividad.type} <br />
          price: {actividad.price} <br />
        </>
      )}
    </div>
  );
}
