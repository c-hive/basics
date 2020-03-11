const randomDelay = (min, max) => Math.floor(Math.random() * (max - min) + min);
const uniqueIdentifier = () => '_' + Math.random().toString(36).substr(2, 9);
const delayedPromise = (delayMin, delayMax) => new Promise(resolve => setTimeout(() => resolve(uniqueIdentifier()), randomDelay(delayMin, delayMax))); 

const promises = new Array(5).fill().map((_, i) => delayedPromise(2000, 7000).then(outerPromiseId => {
    console.log(`Resolved ${outerPromiseId} outer promise. Index: ${i}`);

    return new Array(3).fill().map(() => delayedPromise(0, 1000).then(id => {
        console.log(`Resolved ${id} inner promise for ${outerPromiseId} outer promise.`)

        return id;
    }));
}))

function run() {
    return Promise.all(promises).then(result =>
        // https://stackoverflow.com/a/10865042/9599137
        Promise.all([].concat(...result))
    );
}

(async () => {
    console.time("run");

    await run();

    console.timeEnd("run");
})();