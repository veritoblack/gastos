"use strict";
var actions_1 = require('./actions');
function rootReducer(state, action) {
    console.log(action);
    //TODO Check here how can I return the other object with property payed if true
    switch (action.type) {
        case actions_1.PAY: return;
    }
    return state;
}
exports.rootReducer = rootReducer;
//# sourceMappingURL=store.js.map