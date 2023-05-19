import SignatureCanvas from 'react-signature-canvas';
import React, { useRef, useState } from 'react';
import loader from '../loader.svg';
import axios from 'axios';

function WritePad() {
    const [prediction, setPrediction] = useState(null);
    const sigCanvas = useRef();

    const predict = async () => {
        let URL = sigCanvas.current.toDataURL("image/png");
        URL = URL.substring(22);
        axios.post('https://digit-recog-backend-4yh4ztszyq-as.a.run.app/', {
            imageData: URL,
        })
            .then(function (response) {
                setPrediction(response.data['prediction']);
            })
            .catch(function (error) {
                console.log(error);
            });
    };

    const clearCanvas = () => {
        sigCanvas.current.clear();
        setPrediction(null);
    };

    return (
        <>
            <div className='mainLogic col-3'>
                <div className='predictionText'>
                    <h1>
                        Prediction: {
                            prediction !== null ? prediction :
                                <>
                                    <img alt='loader' className='loader' src={loader} />
                                </>
                        }
                    </h1>
                </div>
                <SignatureCanvas
                    velocityFilterWeight={0}
                    minWidth={10}
                    maxWidth={10}
                    minDistance={0}
                    throttle={1}
                    penColor='black'
                    ref={sigCanvas}
                    canvasProps={
                        {
                            width: 280,
                            height: 280,
                            className: 'sigCanvas'
                        }
                    }
                    backgroundColor="white"
                />
                <div className='buttons'>
                    <button
                        onClick={predict}
                        className="btn btnPredict"
                    >Predict</button>
                    <button
                        onClick={clearCanvas}
                        className="btn btnClear"
                    >Reset</button>
                </div>
            </div>
        </>
    );
}

export default WritePad;