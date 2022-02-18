import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import FleamarketRge from "../../../src/components/units/fleamarket/reg/RegProduct.contatiner";

function RegistrationProductPage() {
  return <FleamarketRge />;
}
export default withAuth(RegistrationProductPage);
