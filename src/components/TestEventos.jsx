import React, { useEffect } from 'react';

export default function TestEventos() {
  function handleOnKeyDown(e) {
    console.log(e);
  }

  function handleResize(e) {
    alert('ojo que este juego si achicas la pantalla a menos de 1000 no funciona');
    console.log(e);
  }

  useEffect(() => {
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <input onKeyDown={handleOnKeyDown} /> <br />
    </>
  );
}
