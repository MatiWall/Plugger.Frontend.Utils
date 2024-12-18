



function idGenerator(namespace: string, name: string , kind: string){
    return `${kind}:${namespace}/${name}`;
}


export {
    idGenerator
}