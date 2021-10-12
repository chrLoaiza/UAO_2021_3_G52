class Notice {
    _id;
    _photographer;
    _image;

    constructor(id, photographer, image) {
        this._id = id;
        this._photographer = photographer;
        this._image = image;
    }

    set id(id) {
        this._id = id;
    }

    set photographer(photographer) {
        this._photographer = photographer;
    }

    set image(image) {
        this._image = image;
    }

    get id() {
        return this._id;
    }

    get photographer() {
        return this._photographer;
    }

    get image() {
        return this._image;
    }
}