import { createContext, useState } from "react";
import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import FleamarketRge from "../../../src/components/units/fleamarket/reg/RegProduct.container";

export const RegContext = createContext({});

function RegProductPage() {
  const myValue = {
    isEdit: false,
  };
  return (
    <RegContext.Provider value={myValue}>
      <FleamarketRge />
    </RegContext.Provider>
  );
}
export default withAuth(RegProductPage);
