const mapDisStateToProps = (dispatch)=>{
    return {
        update(text){
            dispatch({type:"UPDATE",text})
        },
        plus(text){
            dispatch({type:"PLUS",text})
        }
    }
}
export default mapDisStateToProps;