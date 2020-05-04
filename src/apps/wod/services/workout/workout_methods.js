module.exports = () => {
    return {
        set_name (newName) {
            const self = this
            /*]
            [|]
            [*/
            if (typeof newName === 'string') {
                self.name = newName
            }
        },
        set_rounds (newRounds) {
            const self = this
            /*]
            [|]
            [*/
            if (typeof newRounds === 'number') {
                self.workout.rounds = newRounds
            }
        },
        for_time_true () {
            const self = this
            /*]
            [|]
            [*/
            self.workout.for_time = true
        },
        for_time_false () {
            const self = this
            /*]
            [|]
            [*/
            self.workout.for_time = false
        },
        add_new_item (newItem) {
            const self = this
            /*]
            [|]
            [*/
            if (typeof newItem === 'string') {
                self.workouts.items.push(newItem)
            }
        },
        remove_item (targetItem) {
            const self = this
            /*]
            [|]
            [*/
            if (typeof targetItem === 'string') {
                const new_items_list = []
                /*]
                [|]
                [*/
                self.workouts.items.forEach((item) => {
                    if (item !== targetItem) {
                        new_items_list.push(item)
                    }
                })
                /*]
                [|]
                [*/
                self.workouts.items
            } else {
                console.log(`target item is typeof ${typeof targetItem}: not "string"`)
            }
        }
    }
}
/*]
[E] END
[*/
