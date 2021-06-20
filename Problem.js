function rotateLeft(n, d) {
    const arrayAfterRotation = n.concat();
    for (let i = 0; i < d; i++) {

        const firstItem = arrayAfterRotation.shift();
        arrayAfterRotation.push(firstItem);

    }

    return arrayAfterRotation;


}


const rotation = 2;
const array = [1, 2, 3, 4, 5];
const output = [5, 1, 2, 3, 4];

console.log(rotateLeft(array, rotation));