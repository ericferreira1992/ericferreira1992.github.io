import { Page, PreparePage } from '@nimble-ts/core/page';

@PreparePage({
    template: require('./about-me.page.html'),
    style: require('./about-me.page.scss'),
    title: 'Sobre mim - Eric Ferreira'
})
export class AboutMePage extends Page {

    public get years() {
        var ageDifMs = Date.now() - new Date(1992, 2, 6).getTime();
        var ageDate = new Date(ageDifMs);
        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    constructor() {
        super();
    }

    onEnter() {
    }

    onExit() {
    }
}