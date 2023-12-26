import { Track } from "../../../../../shared/interfaces/src/lib/shared/track"

const top5_Mock1: Track = {
    "id": 3157972,
    "title": "Viva La Vida",
    "duration": 242,
    "preview": "https://cdns-preview-a.dzcdn.net/stream/c-ab0b3c336efc5e72a8eb5f783f383a85-4.mp3",
}
const top5_Mock2: Track = {
    "id": 114811546,
    "title": "Hymn for the Weekend",
    "duration": 258,
    "preview": "https://cdns-preview-8.dzcdn.net/stream/c-8f919512e51faf22f342d3727ff751dc-6.mp3",
}

const top5List: Track[] = [top5_Mock1, top5_Mock2]

export { top5List, top5_Mock1, top5_Mock2 }