const actions = [
    {
        name : "Pick up my sister",
        type : "URGENT",
        description : "Pick up my sister from school.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        name : "Do my math Homework!",
        type : "URGENT",
        description : "Do pages 1-4 of my math notebook.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        name : "Take out the trash",
        type : "NORMAL",
        description : "Take out the trash before my mom gets back.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    }
]

module.exports = class Action {
    constructor(newAction) {
        this.name = newAction.name || 'Goal',
        this.type = newAction.type || '---' ,
        this.description = newAction.description || 'Desc',
        this.img = newAction.img || 'https://bulma.io/images/placeholders/1280x960.png'
    }

    save(){
        actions.push(this)
    }

    static fetchAll(){
        return actions
    }
}