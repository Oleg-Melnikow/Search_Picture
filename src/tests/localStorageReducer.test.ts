import {DomainPhotoType} from "../redux/appReducer";
import {addPictureAC, localStorageReducer, remotePictureAC, setPicturesAC} from "../redux/lacalstorageReducer";


let startState: Array<DomainPhotoType> = [];

beforeEach(() => {
    startState = [
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
    ]
})

test('correct picture should be deleted from state', () => {

    const action = remotePictureAC("51195391301");
    const endState = localStorageReducer(startState, action)

    expect(endState.length).toBe(1);
    expect(endState.every(t => t.id !== "51195391301")).toBeTruthy();
});


test('correct picture should be added from state', () => {

    const action = addPictureAC({
        farm: 66,
        id: "51195410178",
        isfamily: 0,
        isfriend: 0,
        ispublic: 1,
        originalformat: "jpg",
        originalsecret: "85223cd03c",
        owner: "188805830@N08",
        secret: "7e3f65d75e",
        server: "65535",
        title: "March 27, 2021",
        url: ""
    });
    const endState = localStorageReducer(startState, action)

    expect(endState.length).toBe(3);
    expect(endState[2].id).toBeDefined();
    expect(endState[2].id).toBe("51195410178");
});

test('pictures should be set to state', () => {
    const endState = localStorageReducer(startState, setPicturesAC(startState));
    expect(endState.length).toBe(2);
});