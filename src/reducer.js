export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // REMOVE after finished developing...
    // token: 'BQBejUI8y3s9-fnu4q2Bd00JKH-eKeDZK2wUnGJ84q0HT5KKwEz-4YsC9gnY5JoujeSvku7xowqM7UK-nE5y7_E2hv1Qg6nrOFa982FgMVp92hmjKwiUbyLIdMGojW_Nxmbg1q9aWSoU8ZkiQlpVTBNj82immaYpbx6bovzy0SIjJIAwXSYH',
};

const reducer = (state, action) => {
    console.log(action);

    // Action -> type, [payload]

    switch(action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case 'SET_TOKEN':
            return {
                ...state,
                token: action.token,
            };

        case 'SET_PLAYLISTS':
            return {
                ...state,
                playlists: action.playlists,
            };

        case 'SET_DISCOVER_WEEKLY':
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            };

        default:
            return state;
    }
};

export default reducer;