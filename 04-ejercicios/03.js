function getbyIdx(arr, idx){
    if (idx < 0 || arr.length <= idx){
        return 'elemnto no existe';
    }

    return arr[idx];

}

let resultado = getbyIdx([1,2], 2)
console.group(resultado)