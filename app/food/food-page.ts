import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { FoodViewModel } from "./food-view-model";

export function onNavigatingTo(args: NavigatedData) {
  const page = <Page>args.object;
  page.bindingContext = new FoodViewModel();
}
