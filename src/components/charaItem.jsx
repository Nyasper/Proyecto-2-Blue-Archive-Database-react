export default function CharaItem(props){
   return(
    <Link to={props.url}  >
      <p className={props.theme} >{props.charaName}</p>
      <img src={props.localImageProfileSrc} loading="lazy" />
    </Link>
    )
}
import { Link } from "react-router-dom"

//src={`/media/${props.school}/${props.imgSrc}.png`} alt={`${props.charaName} image`}