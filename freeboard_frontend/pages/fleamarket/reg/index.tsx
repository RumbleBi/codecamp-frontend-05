import { createContext, useState } from "react";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import FleamarketRge from "../../../src/components/units/fleamarket/reg/RegProduct.contatiner";

export const RegContext = createContext({});

function RegistrationProductPage(props) {
  const [isEdit, setIsEdit] = useState(props.isEdit || "");
  const myValue = {
    isEdit,
    setIsEdit,
  };
  return (
    <RegContext.Provider value={myValue}>
      <FleamarketRge />
    </RegContext.Provider>
  );
}
export default withAuth(RegistrationProductPage);
