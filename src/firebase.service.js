import {db} from "../src/firebase";

import { collection, addDoc } from "firebase/firestore";

const artistsCollectionRef = collection(db, "artist");

class ArtistDataService  {
   addArtists = (newArtist) => {
        return addDoc(artistsCollectionRef, newArtist)
    }
}
 // eslint-disable-next-line
export default new ArtistDataService();