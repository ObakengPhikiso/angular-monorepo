import { Album } from "../../../../../shared/interfaces/src/lib/shared/album";

const mockAlbum1: Album = {
    id: 7975372,
    cover: '',
    cover_xl: '',
    release_date: new Date(),
    title: ''
}
const mockAlbum2: Album = {
    id: 7975372,
    cover: '',
    cover_xl: '',
    release_date: new Date(),
    title: ''
}
const mockAlbum3: Album = {
    id: 7975372,
    cover: '',
    cover_xl: '',
    release_date: new Date(),
    title: ''
}

const albums: Album[] = [mockAlbum1, mockAlbum2, mockAlbum3];

export { mockAlbum1, mockAlbum2, mockAlbum3, albums };