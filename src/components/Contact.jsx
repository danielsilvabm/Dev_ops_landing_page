export default function Contact() {
  return (
    <section className="contact" id="contact">
      <h2>Contato</h2>
      <form>
        <input type="text" placeholder="Nome" required />
        <input type="email" placeholder="Email" required />
        <textarea placeholder="Mensagem" required />
        <button type="submit">Enviar</button>
      </form>
    </section>
  )
}
