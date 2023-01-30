class Section {
    constructor ({items, renderer}, containerSelect) {
        this._items = items;
        this._renderer = renderer;
        this._containerSelect = document.querySelector(containerSelect);
    }

    render () {
        this._items.reverse().forEach( item => {
            this._renderer(item);
        });
    }

    addItem (element) {
        this._containerSelect.prepend(element);
    }
}

export {Section};