export type QuestionType = {
        id:number,
        question:string,
        options:{
            id:number,
            name:string,
            alias:string
        }[]
}