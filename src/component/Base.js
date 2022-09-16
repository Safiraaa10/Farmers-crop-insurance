import CustomNav from "./CustomNav";
import footer from "./footer";

const Base =({title="welcome to our website",children})=>{
    return(<>
        <div className="container-fluid p-0 m-0">
           <CustomNav />
            {children}
            
        </div>
        
        </>
    );
};
export default Base;