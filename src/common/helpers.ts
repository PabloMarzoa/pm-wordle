import {Directive} from "@angular/core";

@Directive()
export class Helpers {

    public static replaceAccents(string: string) {
        let normalized = string.toLowerCase();
        normalized = normalized.replace(new RegExp("[àáâãäå]", 'g'),"a");
        normalized = normalized.replace(new RegExp("[èéêë]", 'g'),"e");
        normalized = normalized.replace(new RegExp("[ìíîï]", 'g'),"i");
        normalized = normalized.replace(new RegExp("[òóôõö]", 'g'),"o");
        normalized = normalized.replace(new RegExp("[ùúûü]", 'g'),"u");
        normalized = normalized.replace(new RegExp("[ýÿ]", 'g'),"y");
        return normalized;
    }
}
