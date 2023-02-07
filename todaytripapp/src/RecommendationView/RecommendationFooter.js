import { useNavigate } from "react-router-dom"

export function RecommendationFooter(){
    const navigate = useNavigate();
    return(
        <div className="recommendationFooter">
            <div className="goHomeButton" onClick={()=>{
                navigate("/");
            }}>
                홈 화면으로
            </div>
        </div>
    )
}