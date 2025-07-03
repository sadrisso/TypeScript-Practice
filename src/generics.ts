
function addId <T extends object> (obj: T) {
    let id = Math.floor(Math.random() * 100)
    return {...obj, id}
}

let user = addId({
    name: "Mashrafi",
    age: 40,
    country: "BD",
})

enum ResTypes {SUCCESS, FAILURE, UNAUTHANTICATED, FORBIDDEN}


interface APIResponse <T> {
    status: number
    type: string
    data: T
}

const response1: APIResponse <object> = {
    status: ResTypes.SUCCESS,
    type: "Ok",
    data: {data: "..."}
}

