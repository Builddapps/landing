import {db} from "../src/firebase";

import { collection, addDoc } from "firebase/firestore";

const projectsCollectionRef = collection(db, "projects");

class ProjectsDataService  {
   addProjects = (newProject) => {
        return addDoc(projectsCollectionRef, newProject)
    }
}
 // eslint-disable-next-line
export default new ProjectsDataService();