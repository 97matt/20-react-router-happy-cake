const Contact = () => {
  return (
    <div className="contact-container">
      <form>
        <h1>Cuentanos, en que te podemos ayudar?</h1>
        <div className="form-group">
          <label for="exampleFormControlInput1">Correo</label>
          <input
            type="email"
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="nombre@example.com"
          />
        </div>
        <div className="form-group">
          <label for="exampleFormControlTextarea1">Descripcion</label>
          <textarea
            className="form-control"
            id="exampleFormControlTextarea1"
            rows="3"
          ></textarea>
        </div>
        <button className="btn btn-outline-danger" type="submit">
          Enviar
        </button>
      </form>
    </div>
  );
};

export default Contact;
