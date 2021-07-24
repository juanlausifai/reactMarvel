export default function CardMessageWarning(props){
    return(
        <div class="materialert error">
		    <div class="material-icons"></div>
		    {props.message}
		</div>
    );

}