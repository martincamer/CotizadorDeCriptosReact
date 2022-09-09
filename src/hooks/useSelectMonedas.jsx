import styled from "@emotion/styled";
import { useState } from "react";

// stlyled react
const Label = styled.label`
  color: #fff;
  font-size: 24px;
  font-weight: 700;
  display: block;
  margin: 10px 0px;
`;

const Select = styled.select`
  width: 100%;
  font-size: 18px;
  padding: 14px;
  border-radius: 10px;
  margin-bottom: 10px;
`;

//useCustomHook Monedas

export const useSelectMonedas = (label, opciones) => {
  // Hooks
  const [state, setState] = useState("");

  const SelectMonedas = () => (
    <>
      <Label>{label}</Label>

      <Select value={state} onChange={(e) => setState(e.target.value)}>
        <option value="">Seleccione</option>
        {opciones.map((opcion) => (
          <option key={opcion.id} value={opcion.id}>
            {opcion.nombre}
          </option>
        ))}
      </Select>
    </>
  );

  return [state, SelectMonedas];
};
