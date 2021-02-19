const Success= params =>{
    const send = params.send;
    return(
        <div className={send ? "success-modal active":"success-modal"}>
            <div className="success-modal-container">
                <img src="/mainlogo.png" alt=""/>
                <h1>LOGIC ENTERPRISES</h1>
            </div>
        </div>
    )
}
export default Success;