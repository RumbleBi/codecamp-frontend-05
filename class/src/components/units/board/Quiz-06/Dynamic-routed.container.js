import { useRouter } from "next/router";
import { useQuery } from "@apollo/client";
import DynamicRoutedPageUI from "./Dynamic-routed.presenter";
import { FETCH_BOARD } from "./Dynamic-routed.queries";

export default function DynamicRoutedPage() {
  const router = useRouter();

  const { data } = useQuery(FETCH_BOARD, {
    variables: { number: Number(router.query.Dynamic) },
  });
  console.log(data);
  return <DynamicRoutedPageUI data={data} />;
}
