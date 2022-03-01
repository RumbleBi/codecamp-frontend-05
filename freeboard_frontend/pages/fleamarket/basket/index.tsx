import { withAuth } from "../../../src/components/commons/hocs/withAuth";
import BasketList from "../../../src/components/units/fleamarket/shoppingBasket/BasketList.container";

function BasketPage() {
  return <BasketList />;
}

export default withAuth(BasketPage);
