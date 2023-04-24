export default function Contact() {
  return (
    <section className="container pb-5 pt-3" id="contact">
      <div className="row">
        <div className="col-xs-12 col-md-4">
          <h1>Contact</h1>
          <address className="mb-3">
            <strong>Dans ma librairie</strong>
            <br />
            32 rue Garonne
            <br />
            47000 Agen
            <br />
            <abbr title="Téléphone">Tél :</abbr> (+33) 5 53 48 25 68
          </address>

          <address>
            <strong>Email</strong>
            <br />
            <a href="mailto:contact@dansmalibrairie.com">
              contact@dansmalibrairie.com
            </a>
          </address>

          <p className="pt-5">
            <strong>Horaires d'ouverture</strong>
          </p>

          <dl className="row">
            <dt className="col-sm-3">Lundi</dt>
            <dd className="col-sm-9">15h00 - 18h45</dd>

            <dt className="col-sm-3">Mardi au samedi</dt>
            <dd className="col-sm-9">10h30 - 12h30 / 14h - 18h45</dd>

            <dt className="col-sm-3">Dimanche</dt>
            <dd className="col-sm-9">FERMÉ</dd>
          </dl>
        </div>
        <div className="col-xs-12 col-md-8">
          <iframe
            title="Carte pointé avec Dans ma librairie"
            className="w-100"
            width="450"
            height="400"
            src="https://www.google.com/maps/embed/v1/place?key=AIzaSyBvQZT8HUhTmBJCiYha7I2n8qT81f6SQeg&q=Dans ma librairie, 32 rue garonne, 47000 Agen"
            allowFullScreen
          ></iframe>
        </div>

        <hr />

        <form
          action="https://formspree.io/f/xoqyzvrr"
          method="POST"
          className="col-xs-12 col-md-8"
        >
          <h1>Envoyez-nous un mail :)</h1>
          <input type="hidden" name="_language" value="fr" />

          <div class="mb-3">
            <label className="form-label" for="name">
              Nom/Prénom
            </label>
            <input
              type="name"
              class="form-control"
              id="email"
              aria-describedby="Nom et prénom"
              name="name"
              placeholder="Hagrid"
              required
            />
          </div>
          <div class="mb-3">
            <label className="form-label" for="email">
              Adresse email
            </label>
            <input
              type="email"
              class="form-control"
              id="email"
              aria-describedby="emailHelp"
              name="email"
              placeholder="hagrid@poudlard.co.uk"
              required
            />
            <small id="emailHelp" class="form-text">
              Cette adresse email ne sera jamais partagée.
            </small>
          </div>
          <div class="mb-3">
            <label className="form-label" for="message">
              Message
            </label>
            <textarea
              type="password"
              class="form-control"
              id="message"
              name="message"
              placeholder='Auriez-vous le livre "Les créatures fantastiques" de Norbert Dragonneau ?'
              rows="6"
              required
            ></textarea>
          </div>

          <div
            class="g-recaptcha"
            data-sitekey="6LfwqtIZAAAAALnU9OrBleanMX0b-Sv8dWpx0vvn"
          ></div>

          <button type="submit" class="btn btn-primary mt-2">
            Envoyer
          </button>
        </form>
      </div>
    </section>
  );
}
