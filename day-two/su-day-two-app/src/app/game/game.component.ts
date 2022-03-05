import { Component } from "@angular/core";
import { Game } from "./game-item/game-item.component";

@Component({
    selector: 'su-game',
    templateUrl: './game.component.html',
    styleUrls: ['./game.component.css']
})
export class GameComponent {
    priceTextColor ='red';
    shouldPriceBePurple: boolean;
    shouldShowGameItemComponent: boolean;

    searchText: string = 'Game 123213';

    games: Game[] = [
        { title: 'Minecraft', price: 10, img: 'https://image.api.playstation.com/vulcan/img/cfn/11307x4B5WLoVoIUtdewG4uJ_YuDRTwBxQy0qP8ylgazLLc01PBxbsFG1pGOWmqhZsxnNkrU3GXbdXIowBAstzlrhtQ4LCI4.png' },
        // { title: 'Candy Crush', price: 0, img: 'https://static.wikia.nocookie.net/candy-crush-saga/images/5/56/Candy_Crush_Saga_1.183_icon.jpg' },
        // { title: 'Counter Strike', price: 120, img: 'https://static.posters.cz/image/750/posters/super-mario-characters-i22822.jpg' },
    ];

    constructor() {
        for (const game of this.games) {
            console.log(game.title?.length);
        }
    }

    handleExpandContentClick(gamesContainer: HTMLElement): void {
        this.shouldPriceBePurple = !this.shouldPriceBePurple;   
        if (this.shouldPriceBePurple) {
            this.priceTextColor = 'blueviolet'
        } else {
            this.priceTextColor = 'black';
        }
        console.log(gamesContainer.children);
    }

    handleSearchChange(event: Event) {
        console.log(event);
    }

    handleCreateOrDestroyGameItem(): void {
        this.shouldShowGameItemComponent = !this.shouldShowGameItemComponent;
    }
}