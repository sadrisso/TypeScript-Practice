interface RectangleOptions {
    width: number;
    height: number;
}

function rectangleOptions (options: RectangleOptions): number {
    let width = options.width
    let height = options.height

    return width * height
}

let threeDoptions = {
    width: 20,
    height: 30,
    length: 30
}

rectangleOptions(threeDoptions)