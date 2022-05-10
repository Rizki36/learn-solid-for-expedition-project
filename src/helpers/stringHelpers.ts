/**
 * divide string each x (number) character
 * @param str
 * @param x
 * @returns
 */
export function divideStringEachXLength(str: string, x: number) {
    const array = str.match(new RegExp(`.{1,${x}}`, "g")) || [];
    return array;
}
