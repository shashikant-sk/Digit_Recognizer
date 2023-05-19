function InfoPad(props) {
    return (
        <>
            <div className="col-3">
                {props.id === '1' ? (
                    <>
                        <div className="infoDiv">
                            <h3 style={{ textDecoration: 'underline' }}>How to use this app</h3>
                        </div>
                    </>
                ) : (
                    <>
                        <div className="infoDiv">
                            <h3 style={{ textDecoration: 'underline' }}>Stats</h3>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default InfoPad;