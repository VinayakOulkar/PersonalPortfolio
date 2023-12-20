function EachSkill(props)
{
    return (
        <>
            {
                props.data.map((value,key)=>{
                    return (
                        <div className="col-lg-6 my-2">
                            <div className="d-flex justify-content-between my-1">
                                <h6>{value.name}</h6>
                                <h6>{value.per}</h6>
                            </div>
                            
                            <div className="progress mb-2" style={{height:"9px"}}>
                                <div className="progress-bar progress-bar-striped " role="progressbar" style={{ width: value.per,backgroundColor: "rgb(245,223,78)",color:"black"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                        </div>
                    );
                    
                })
            }
        </>
    );
}

export default EachSkill;