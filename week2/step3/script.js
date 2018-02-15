"use strict";

{
    const BASE_URL = 'https://api.github.com/orgs/HackYourFuture/repos'; //if running local host: "http://localhost:3000"
    const clickMeButton_Endpoint = BASE_URL + '/click me';
    const getDataButton_Endpoint = BASE_URL + '/getData';

    class View {

        constructor() {
            this.root = document.getElementById('root');
        }

        render() {
            // render header
            this.renderHeader();
            this.renderListContainer();
            this.renderListContent();

            const h1 = document.createElement('h1');
            this.root.appendChild(h1);
            h1.innerHTML = 'HYF Repository';

            const div = document.createElement('div');
            this.root.appendChild(div);
            const input = document.createElement('input');
            div.appendChild(input);
            const clickMeButton = document.createElement('button');
            div.appendChild(clickMeButton);
            clickMeButton.innerHTML = 'CLICK ME';
            clickMeButton.addEventListener('click', () => this.onClickMeClick(input.value));

            const laureatesButton = document.createElement('button');
            div.appendChild(laureatesButton);
            getDataButton.innerHTML = 'GET DATA';
            getDataButton.addEventListener('click', () => this.onClickDataButtonClick(input.value));

            // render list container
            const ul = document.createElement('ul');
            this.root.appendChild(ul);

            // render list content
            const li = document.createElement('li');
            ul.appendChild(li);

        }

        onClickMeClick() {
            console.log("Click Me");
        }

        onClickDataButtonClick(value) {
            console.log(getDataButton_Endpoint + value);
            fetchJSON(getDataButton_Endpoint + value, (error, data) => {
                if (error) {
                    console.log(error);
                } else {
                    this.onClickDataButtonClick(value);
                }
            });

        }

    }

    function createAndAppend(name, parent, innerHTML) {
        const child = document.createElement(name);
        parent.appendChild(child);
        if (innerHTML !== undefined) {
            child.innerHTML = innerHTML;
        }
        return child;
    }

    function fetchJSON(url, cb) {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url);
        xhr.responseType = 'json';
        xhr.send();
        xhr.onload = () => cb(null, xhr.response);
        xhr.onerror = () => cb(new Error(xhr.statusText));
    }

    function start() {
        const view = new View();
        view.render();
    }

    window.onload = start;
}

