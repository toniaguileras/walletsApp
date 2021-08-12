import { useEffect, useRef, useState } from "react";
import { reqResApi } from "../api/reqRes";
import { ReqResListado, Usuario } from "../interfaces/reqRes";

export const useUsuarios = () => {
  const [usuarios, setUsuarios] = useState<Usuario[]>([]);
  const pagRef = useRef(1);
  useEffect(() => {
    //llamada a la api
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    const resp = await reqResApi.get<ReqResListado>("/users", {
      params: { page: pagRef.current },
    });
    if (resp.data.data.length > 0) {
      setUsuarios(resp.data.data);
      pagRef.current++;
    } else {
      alert("No hay más registros");
    }
  };

  return {
    usuarios,
    cargarUsuarios,
  };
};
