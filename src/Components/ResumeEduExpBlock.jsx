function ResumeEduExpBlock(props)
{
    return (
        <>
            {props.data.map((value, key) => {
                console.log(value);
                return (
                <div className="ResumeEduExpBlock px-3">
                    <h3 className="fs-5 fw-bold">{value.heading}</h3>
                    <h6 className="my-3">{value.subHeading}</h6>
                    <p className="pb-4">{value.para}</p>
                </div>
                );
            })}
                
        </>
        
    );
}

export default ResumeEduExpBlock;