import { NavigatedData, Page } from "tns-core-modules/ui/page";
import { AboutViewModel } from "./about-view-model";

export function onNavigatingTo(args: NavigatedData) {
    const page = <Page>args.object;
    page.bindingContext = new AboutViewModel();
}
