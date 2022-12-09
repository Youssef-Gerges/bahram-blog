import React, { useRef } from 'react';
import api from '../utils/api.config';
import './SubscribtionForm.scss';

const SubscribtionForm: React.FC = () => {
  const emailRef = useRef<HTMLInputElement>();
  const handlSubcribtion = async () => {
    api
      .post('/subscribers', {
        email: emailRef.current?.value,
      })
      .then(() => alert('Subscriped successfully'))
      .catch((err) => alert(err));
  };
  return (
    <section className="container sub-form">
      <h1>Get free web design insights...</h1>
      <p className="title-small">
        In your inbox, every other week. And unsubscribe in a click, if you
        want.
      </p>
      <section className="container">
        <div className="input-group">
          <input
            type="email"
            className="input-email"
            placeholder="Email"
            ref={emailRef}
          />
          <button onClick={handlSubcribtion}>Subscribe</button>
        </div>
      </section>
    </section>
  );
};

export default SubscribtionForm;
