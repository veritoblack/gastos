import { PAY } from './actions';

export interface IAppState {


}

export function rootReducer(state: IAppState, action): IAppState {
    console.log(action);
    //TODO Check here how can I return the other object with property payed if true
    switch (action.type) {
        case PAY: return

    }
    return state;
}