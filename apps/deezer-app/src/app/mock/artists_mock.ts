import { Artist } from "../interfaces/artist";

const mockArtist1: Artist = {
    id: 892,
    name: "Coldplay",
    link: "https://www.deezer.com/artist/892",
    picture: "https://api.deezer.com/artist/892/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/e65d62ecd00b8bf1ba89073943ac62a1/1000x1000-000000-80-0-0.jpg",
    nb_album: 94,
    nb_fan: 15683097,
}

const mockArtist2: Artist = {
    id: 150046652,
    name: "Сироткин",
    link: "https://www.deezer.com/artist/150046652",
    picture: "https://api.deezer.com/artist/150046652/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/c7fc0b55e4e1134884ebbe8c28cc3bfa/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/c7fc0b55e4e1134884ebbe8c28cc3bfa/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/c7fc0b55e4e1134884ebbe8c28cc3bfa/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/c7fc0b55e4e1134884ebbe8c28cc3bfa/1000x1000-000000-80-0-0.jpg",
    nb_album: 11,
    nb_fan: 5829,
}

const mockArtist3: Artist = {
    id: 51100072,
    name: "Aries",
    link: "https://www.deezer.com/artist/51100072",
    picture: "https://api.deezer.com/artist/51100072/image",
    picture_small: "https://e-cdns-images.dzcdn.net/images/artist/df6ac35dac88e844f805da5996bcd431/56x56-000000-80-0-0.jpg",
    picture_medium: "https://e-cdns-images.dzcdn.net/images/artist/df6ac35dac88e844f805da5996bcd431/250x250-000000-80-0-0.jpg",
    picture_big: "https://e-cdns-images.dzcdn.net/images/artist/df6ac35dac88e844f805da5996bcd431/500x500-000000-80-0-0.jpg",
    picture_xl: "https://e-cdns-images.dzcdn.net/images/artist/df6ac35dac88e844f805da5996bcd431/1000x1000-000000-80-0-0.jpg",
    nb_album: 15,
    nb_fan: 2876,
}


const artists: Artist[] = [mockArtist1, mockArtist2, mockArtist3];

export { mockArtist1, mockArtist2, mockArtist3, artists };