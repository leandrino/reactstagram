// a reducer takes in two things:

// 1. the action (info about what happened)
// 2. copy of current state

function posts(state = [], action) {
	// console.log('the post will change')
	// console.log(state, action)
	switch(action.type) {
		case 'INCREMENT_LIKES' :
		const i = action.index
		return [
			...state.slice(0,i), // before the one we ar updating
			{...state[i], likes: state[i].likes + 1},
			...state.slice(i + 1), // after the one we ar updating
		]
		// return the updated state
		default:
			return state;
	}
	return state
}

export default posts;