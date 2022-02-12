import FunctionalComponentUI from "./FunctionalComponent.presenter";

export default function FunctionalComponent() {
  return <div>{FunctionalComponentUI({ count: 123 })}</div>;
  //   return <FunctionalComponentUI count={3} />;
}
