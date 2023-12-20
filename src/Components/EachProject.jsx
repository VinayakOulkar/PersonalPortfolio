function EachProject({data})
{
    return (
        <>
            {data.map((value,key)=>{
                return(
                <div id="eachProject" className="col-sm-4 text-center">
                    <img className="w-100" src={process.env.PUBLIC_URL+"/Images/"+value.img}/>
                    <h5 className="my-3 eachProjectName">{value.name}</h5>
                </div>
                )
            })}
        </>
    );
}

export default EachProject;