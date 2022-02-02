import { Circles } from "react-loader-spinner";



const Loading = () => {
    return (  
        <center style={{display: "grid" , placeItems: "center", height: "100vh"}}>
            <div>
                <img 
                src="https://assets.stickpng.com/images/580b57fcd9996e24bc43c543.png"
                alt="Logo"
                style={{marginBottom: 10}}
                height={200}
                />
                <Circles color="#3CBC28" height={80} width={80} />
            </div>
        </center>
    );
}
 
export default Loading;
