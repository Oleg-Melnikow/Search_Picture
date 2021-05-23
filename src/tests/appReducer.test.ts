import {
    AppInitialStateType,
    appReducer,
    isDisabledAC,
    nextPageAC,
    remotePhotoAC, setPagesAC,
    setPhotosAC
} from "../redux/appReducer";

let startState: AppInitialStateType;

beforeEach(() => {
    startState = {
        photo: [
            {
                farm: 66,
                id: "51195391301",
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                originalformat: "jpg",
                originalsecret: "5150dd639a",
                owner: "143278300@N03",
                secret: "4b4d574664",
                server: "65535",
                title: "Cuba 2012",
                url: ""
            },
            {
                farm: 66,
                id: "51195033756",
                isfamily: 0,
                isfriend: 0,
                ispublic: 1,
                originalformat: "jpg",
                originalsecret: "02a4aa09f3",
                owner: "27579936@N08",
                secret: "0c78d4d09c",
                server: "65535",
                title: "Dürer's Cat",
                url: ""
            }
        ],
        isDisabled: true,
        pages: 1,
        page: 1
    }
})

test('correct picture should be deleted from state', () => {

    const endState = appReducer(startState, remotePhotoAC("51195391301"));

    expect(endState.photo.length).toBe(1);
    expect(endState.photo.every(t => t.id !== "51195391301")).toBeTruthy();
});


test('correct button should be disabled', () => {
    const endState = appReducer(startState, isDisabledAC(false));
    expect(endState.isDisabled).toBe(false);
});

test('page should be change to next page', () => {
    const endState = appReducer(startState, nextPageAC());
    expect(endState.page).toBe(2);
});

test('pictures should be set to state', () => {
    const endState = appReducer(startState, setPhotosAC(startState.photo));
    expect(endState.photo.length).toBe(2);
});

test('pages should be set to state', () => {
    const endState = appReducer(startState, setPagesAC({page: 2, pages: 145}));
    expect(endState.page).toBe(2);
    expect(endState.pages).toBe(145);
});