import { Routes, Route} from "react-router-dom";
import Body from './components/layout/body';
import Blog from './components/Blog';

function AppRoutes(){
    return(
        <Routes>
            <Route path="/menu" element={<Body/>}/>
            <Route path="/blog" element={<Blog />} />
        </Routes>
    )
}
export default AppRoutes;