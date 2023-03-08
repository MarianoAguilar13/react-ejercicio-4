test("Probando combinacion de strings", () => {
  const mensaje1 = "probando test";
  const mensaje2 = mensaje1.trim();
  expect(mensaje1).toBe(mensaje2);
});
