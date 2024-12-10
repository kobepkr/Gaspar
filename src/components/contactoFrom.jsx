import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
  // Conexión con el formulario de Formspree utilizando tu ID único
  const [state, handleSubmit] = useForm("xwpkjnrl");

  if (state.succeeded) {
      return <p>¡Gracias por tu mensaje!</p>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">Correo Electrónico</label>
      <input
        id="email"
        type="email"
        name="email"
        required
      />
      <ValidationError 
        prefix="Correo"
        field="email"
        errors={state.errors}
      />

      <label htmlFor="message">Mensaje</label>
      <textarea
        id="message"
        name="message"
        required
      />
      <ValidationError 
        prefix="Mensaje"
        field="message"
        errors={state.errors}
      />

      <button type="submit" disabled={state.submitting}>
        Enviar
      </button>
    </form>
  );
}

function App() {
  return (
    <div>
      <h2>Formulario de Contacto</h2>
      <ContactForm />
    </div>
  );
}

export default App;
