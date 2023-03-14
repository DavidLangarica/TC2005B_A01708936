const goals = [
    {
        name : "Read more books",
        type : "URGENT",
        description : "Read 20 more books by the end of the year.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        name : "Do more Excercise",
        type : "URGENT",
        description : "Do excercise a 3 times a Week.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    },
    {
        name : "Code More!",
        type : "NORMAL",
        description : "Learn React, Express and Tailwind.",
        img : "https://bulma.io/images/placeholders/1280x960.png"
    }
]

module.exports = class Goal {
    constructor(newGoal) {
        this.name = newGoal.name || 'Goal',
        this.type = newGoal.type || '---' ,
        this.description = newGoal.description || 'Desc',
        this.img = newGoal.img || 'https://bulma.io/images/placeholders/1280x960.png'
    }

    save(){
        goals.push(this)
    }

    static fetchAll(){
        return goals
    }
}