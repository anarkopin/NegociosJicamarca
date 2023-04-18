import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom'
import Error404 from '../../containers/errors/Error404';
import Category from '../../containers/pages/categories/Category';
import Index from '../../containers/pages/Index';

// import { AnimatePresence } from 'framer-motion'


function AnimatedRoutes(){

    const location = useLocation()

    return(
        <Routes location={location} key={location.pathname}>
            {/* Error Display */}
            <Route path="/categorias/:category" element={<Category />} />
            <Route path="*" element={<Error404 />} />
            <Route path="/" element={<Index />} />  
            
           
    

                
        </Routes>
        // <AnimatePresence>
            
        // </AnimatePresence>
    )
}
export default AnimatedRoutes