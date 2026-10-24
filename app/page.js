"use client";

import { motion } from "framer-motion";

const reveal = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] }
};

const topics = [
  ["Evolving retrieval", "Temporal and continual IR", "Changing collections and relevance", "Continual learning to rank"],
  ["Users & recommendation", "Evolving preferences", "Long-term personalisation", "Feedback loops and drift"],
  ["Knowledge & generation", "Dynamic knowledge graphs", "RAG over evolving corpora", "Memory and forgetting"],
  ["Evaluation & responsibility", "Longitudinal protocols", "Robustness and stability", "Fairness and exposure over time"]
];

const submissions = [
  ["Full papers", "12 pages", "Original research with a clear contribution, detailed methodology, repeatable experiments, and comparison with the state of the art."],
  ["Reproducibility papers", "12 pages", "Replications or reproductions of prior work, including studies that test established methods in new domains, datasets, or evaluation settings."],
  ["Short papers", "6 pages", "Novel and thought-provoking ideas, early results, and innovative applications relevant to evolving information access."],
  ["Position papers", "4 pages", "New perspectives, research visions, open challenges, or experience reports connected to the workshop themes."]
];

const organisers = [
  { name: "Het Darshan Mehta", affiliation: "Otto von Guericke University Magdeburg, Germany", image: "het.webp", url: "https://hetmehta.eu" },
  { name: "Erasmo Purificato", affiliation: "European Commission, Joint Research Centre, Ispra, Italy", image: "erasmo.webp", url: "https://erasmopurif.com" },
  { name: "Federica Cena", affiliation: "University of Turin, Italy", image: "federica.webp", url: "https://www.didattica-cps.unito.it/do/docenti.pl/Alias?federica.cena#tab-profilo" },
  { name: "Ernesto William De Luca", affiliation: "Otto von Guericke University Magdeburg, Germany", image: "ernesto.webp", url: "https://ernestodeluca.eu" }
];

function Label({ n, children }) {
  return <div className="label"><span>{n}</span>{children}</div>;
}

export default function Home() {
  const base = process.env.NEXT_PUBLIC_BASE_PATH || "";

  return <main>
    <nav>
      <a className="wordmark" href="#top">EvolveIR <span>2027</span></a>
      <div className="navlinks"><a href="#about">About</a><a href="#topics">Topics</a><a href="#submit">Call for papers</a><a href="#people">People</a><a href="#committee">Committee</a></div>
      <a className="navdate" href="#submit">Submit</a>
    </nav>

    <header className="hero" id="top">
      <div className="heroimage" style={{ backgroundImage: `url(${base}/southampton-photo.webp)` }} aria-hidden="true" />
      <div className="meta"><span>49th European Conference on Information Retrieval</span><span>Southampton, United Kingdom</span></div>
      <motion.div className="title" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
        <p className="heroedition">1st International Workshop on Evolving Information Retrieval and Recommendation Systems</p>
        <h1>EvolveIR <em>2027</em></h1>
        <div className="line"><i /><i /><i /></div>
      </motion.div>
      <div className="herofoot">
        <motion.p initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.7 }}>Information access under change.</motion.p>
        <motion.a initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.4 }} href="#submit">Call for papers <b>↓</b></motion.a>
      </div>
    </header>

    <section className="about" id="about">
      <Label n="01">About</Label>
      <motion.h2 {...reveal}>Information access<br />does not stand still.</motion.h2>
      <div className="twocol">
        <motion.p {...reveal}>Collections evolve, users and information needs shift, interactions accumulate, and models are updated. Yet these systems are often evaluated at isolated snapshots.</motion.p>
        <motion.p {...reveal}>EvolveIR brings together research on retrieval and recommendation under continuous change—and asks how effectiveness, robustness, diversity, exposure, and fairness evolve over time.</motion.p>
      </div>
      <motion.blockquote {...reveal}>How should information retrieval and recommendation systems adapt and be evaluated when users, information, interactions, knowledge, and models evolve?</motion.blockquote>
    </section>

    <section className="topics dark" id="topics">
      <Label n="02">Topics</Label>
      <motion.div className="sectionhead" {...reveal}><h2>Research across<br /><em>the whole timeline.</em></h2><p>We welcome methodological, empirical, resource, and position contributions.</p></motion.div>
      <div className="topiclist">{topics.map((topic, i) => <motion.article {...reveal} key={topic[0]}><span>0{i + 1}</span><h3>{topic[0]}</h3><ul>{topic.slice(1).map(item => <li key={item}>{item}</li>)}</ul></motion.article>)}</div>
    </section>

    <section className="submit" id="submit">
      <Label n="03">Call for papers</Label>
      <motion.div className="sectionhead" {...reveal}><h2>Submit your work.</h2><p>We invite unpublished original papers in English on information retrieval and recommendation systems operating under change.</p></motion.div>
      <div className="submissiongrid">{submissions.map(([name, length, description], i) => <motion.article {...reveal} key={name}><span>0{i + 1}</span><div><h3>{name}</h3><strong>{length} + references</strong><p>{description}</p></div></motion.article>)}</div>
      <motion.div className="submissionrules" {...reveal}>
        <div><span>Language</span><strong>English</strong></div><div><span>Format</span><strong>PDF · Template TBA</strong></div><div><span>Review</span><strong>Double-blind · 3 reviewers</strong></div><div><span>Presentation</span><strong>At least one author must attend</strong></div>
      </motion.div>
      <div className="submitactions"><a className="primarybutton disabledbutton" aria-disabled="true">Submit your paper</a><span>Submission link will be announced.</span></div>
      <p className="note">Page limits exclude references. Submissions must be anonymised and not previously published or accepted in substantially similar form. Proceedings information and the paper template will be announced after confirmation of the ECIR 2027 publication arrangements.</p>
      <motion.aside className="participate" {...reveal}><span>Participation</span><div><h3>Join the discussion.</h3><p>An accepted paper is not required to attend. ECIR participants interested in evolving retrieval, recommendation, user modelling, continual learning, RAG, and responsible information access are welcome.</p><a href="#submit">Read the call for papers ↑</a></div></motion.aside>
    </section>

    <section className="dates" id="dates">
      <Label n="04">Important dates</Label>
      <motion.h2 {...reveal}>Save the date.</motion.h2>
      <div className="datelist">{["Submission deadline", "Acceptance notification", "Camera-ready deadline"].map(item => <motion.div {...reveal} key={item}><span>{item}</span><strong>To be announced</strong></motion.div>)}<motion.div {...reveal} className="confirmed"><span>Workshop</span><strong>25 March 2027</strong></motion.div></div>
      <p>All paper deadlines are 23:59 Anywhere on Earth (AoE).</p>
    </section>

    <section className="keynote dark" id="people">
      <Label n="05">Invited speaker</Label>
      <div className="keygrid">
        <motion.div className="speakerphoto" {...reveal}><img src={`${base}/people/ludovico.webp`} alt="Ludovico Boratto" /></motion.div>
        <motion.div {...reveal}><p className="overline">Invited keynote</p><h2>Ludovico<br /><em>Boratto</em></h2><p className="role">Associate Professor of Computer Science<br />University of Cagliari, Italy</p><p className="bio">His research spans recommender systems, user modelling, algorithmic fairness, multi-stakeholder recommendation, and responsible evaluation.</p><div className="talktitle"><span>Keynote title</span><strong>To be announced</strong></div><a href="https://www.ludovicoboratto.com/" target="_blank" rel="noreferrer">Speaker website ↗</a></motion.div>
      </div>
    </section>

    <section className="organisers">
      <Label n="06">Organisers</Label>
      <motion.h2 {...reveal}>The organising committee.</motion.h2>
      <div className="peoplecards">{organisers.map(({ name, affiliation, image, url }) => <motion.a {...reveal} key={name} href={url} target="_blank" rel="noreferrer"><img src={`${base}/people/${image}`} alt={name} /><div><h3>{name}</h3><p>{affiliation}</p><b>View profile ↗</b></div></motion.a>)}</div>
    </section>

    <section className="committee" id="committee">
      <Label n="07">Programme committee</Label>
      <motion.div {...reveal}><p>Programme committee</p><h2>To be announced.</h2><span>Members will be added following confirmation and invitation.</span></motion.div>
    </section>

    <footer><div className="meta"><span>25 March 2027</span><span>Southampton, United Kingdom</span></div><h2>EvolveIR <em>2027</em></h2><div className="footerlinks"><a href="https://www.ecir2027.co.uk/" target="_blank" rel="noreferrer">ECIR 2027 ↗</a><a href="mailto:het.mehta@ovgu.de">Contact ↗</a><a href="https://commons.wikimedia.org/wiki/File:Town_quay_southampton_march_2025.JPG" target="_blank" rel="noreferrer">Photo: Geni · CC BY-SA 4.0 ↗</a></div></footer>
  </main>;
}
