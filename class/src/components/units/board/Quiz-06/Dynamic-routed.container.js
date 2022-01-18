import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import DynamicRoutedPageUI from "./Dynamic-routed.presenter";
import { FETCH_BOARD } from "./Dynamic-routed.queries";

export default function DynamicRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { boardId: router.query.Dynamic },
  });
  return <DynamicRoutedPageUI data={data} />;
}
