

export const Add_Todo="todoAdd";
export const Complete_Todo="completeTodo";
export const Update_Todo="update";
export const Delete_Todo="delete";



export const todoAdd=(payLoad)=>({type:Add_Todo,payLoad});
export const todoComplete=(id)=>({type:Complete_Todo,payLoad:id});
export const todoUpdate=(payLoad)=>({
    type:Update_Todo,
payLoad});

export const todoRemove=(id)=>({type:Delete_Todo,payLoad:id});