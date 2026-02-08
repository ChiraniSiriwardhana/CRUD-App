//where you handle the paths 
import {Router} from 'express'; // a tool ,helps to get routes from express
import {loginUser, registerUser,logoutUser} from '../controllers/user.controller.js'; //import the controller function to handle the request





const router = Router(); //create router object

router.post('/register', registerUser); //route to handle user registration
// When a POST request comes to /register,Run the registerUser function.
// full end point POST /api/users/register

router.post('/login', loginUser); //route to handle user login
router.post('/logout', logoutUser); //route to handle user logout





export default router;