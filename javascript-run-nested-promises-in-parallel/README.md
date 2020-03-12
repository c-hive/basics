# Run nested promises in parallel

The goal is to achieve maximum parallelism. In other words, once any of the parent promises has been resolved, its child promises are initiated right away to [start their task](https://stackoverflow.com/a/30823708/9599137) regardless of the state of the other parent promises.

## Example

The logs clearly corroborate this behaviour.

```sh
Resolved _x328vvpid parent promise. Index: 2
Resolved _jdwac1tra child promise for _x328vvpid parent promise.
Resolved _qubs9t0ze child promise for _x328vvpid parent promise.
Resolved _u9z1f4q6q child promise for _x328vvpid parent promise.
Resolved _as7paisw8 parent promise. Index: 4
Resolved _cdyd982l1 parent promise. Index: 0
Resolved _hq01yxrdp child promise for _cdyd982l1 parent promise.
Resolved _46fvwh03p child promise for _as7paisw8 parent promise.
Resolved _pfgewzg4o child promise for _as7paisw8 parent promise.
Resolved _sdtwiionj child promise for _cdyd982l1 parent promise.
Resolved _hkzk20qne child promise for _cdyd982l1 parent promise.
Resolved _ybawj08wg child promise for _as7paisw8 parent promise.
```

## Usage

[Test workflow](../.github/workflows/javascript-run-nested-promises-in-parallel.yml)

```sh
node javascript-run-nested-promises-in-parallel.js
```