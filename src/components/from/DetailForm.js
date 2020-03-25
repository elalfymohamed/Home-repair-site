import React from 'react';

import Form from './Form';

export default function DetailForm() {
    return (
        <>
            <div className="container">
                <div className="form__col">
                    <h3 className="title__form">
                        Leave a request for free
                        departure of the measurer
                    </h3>
                    <Form />
                </div>
            </div>
            <div className="save">
                <div className="save__p">
                    <span className="img" role="img" />
                    <p className="p__style">
                        Help save 10 - 20% of the
                        <br />
                        cost of materials
                    </p>
                </div>
            </div>
        </>
    );
}
