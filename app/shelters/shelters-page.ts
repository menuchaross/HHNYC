import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { SheltersViewModel } from "./shelters-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new SheltersViewModel();
}
