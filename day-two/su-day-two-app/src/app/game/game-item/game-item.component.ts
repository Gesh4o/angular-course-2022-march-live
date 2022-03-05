import { AfterContentChecked, AfterViewChecked, AfterViewInit, Component, DoCheck, ElementRef, Input, OnChanges, OnDestroy, OnInit, SimpleChanges, ViewChild } from "@angular/core";

export interface Game {
    title: string;
    price: number;
    img: string;
}

@Component({
    selector: 'su-game-item',
    templateUrl: './game-item.component.html'
})
export class GameItemComponent implements OnInit, OnDestroy, OnChanges, AfterViewInit, AfterViewChecked {
    @ViewChild('title')
    title: ElementRef<HTMLElement>

    private _game: Game;

    @Input()set sourceGame( game: Game){
        console.log('game was changed');
        this._game = game;
    }

    constructor() {
        console.log('GameItemComponent#constructor', this._game);
    }

    ngOnInit(): void {
        console.log('GameItemComponent OnInit title!', this._game);
    }

    ngDoCheck(): void {
        // console.log('GameItemComponent checking!');
    }

    ngAfterViewInit(): void {
        console.log('GameItemComponent#ngAfterViewInit');
    }

    ngAfterViewChecked(): void {
        console.log('GameItemComponent#ngAfterViewChecked');
    }

    ngOnChanges(changes: SimpleChanges): void {
        // console.log('GameItemComponent input changes!', changes);
    }

    ngOnDestroy(): void {
        console.log('GameItemComponent destroyed!');
    }
}