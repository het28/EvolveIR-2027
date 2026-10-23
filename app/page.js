"use client";
import { motion } from "framer-motion";

const reveal = { initial:{opacity:0,y:24}, whileInView:{opacity:1,y:0}, viewport:{once:true,margin:"-80px"}, transition:{duration:.7,ease:[.22,1,.36,1]} };
const topics=[
  ["Evolving retrieval","Temporal and continual IR","Changing collections and relevance","Continual learning to rank"],
  ["Users & recommendation","Evolving preferences","Long-term personalisation","Feedback loops and drift"],
  ["Knowledge & generation","Dynamic knowledge graphs","RAG over evolving corpora","Memory and forgetting"],
  ["Evaluation & responsibility","Longitudinal protocols","Robustness and stability","Fairness and exposure over time"]
];
const people=[
  ["Het Darshan Mehta","Otto von Guericke University Magdeburg · Leibniz Institute for Educational Media","https://hetmehta.eu"],
  ["Giulia Coucourde","Università di Torino","https://dott-informatica.campusnet.unito.it/do/studenti.pl/Show?_id=802321"],
  ["Erasmo Purificato","European Commission, Joint Research Centre","https://erasmopurif.com"],
  ["Federica Cena","Università di Torino","https://www.didattica-cps.unito.it/do/docenti.pl/Alias?federica.cena#tab-profilo"],
  ["Ernesto William De Luca","Otto von Guericke University Magdeburg · Leibniz Institute for Educational Media","https://ernestodeluca.eu"]
];
function Label({n,children}){return <div className="label"><span>{n}</span>{children}</div>}

export default function Home(){return <main>
  <nav><a className="wordmark" href="#top">EvolveIR <span>2027</span></a><div className="navlinks"><a href="#about">About</a><a href="#topics">Topics</a><a href="#submit">Submit</a><a href="#people">People</a></div><a className="navdate" href="#dates">25.03.27</a></nav>
  <header className="hero" id="top">
    <div className="meta"><span>ECIR 2027 Workshop</span><span>Southampton, UK</span></div>
    <motion.div className="title" initial={{opacity:0}} animate={{opacity:1}} transition={{duration:1}}><h1>EvolveIR <em>2027</em></h1><div className="line"><i/><i/><i/></div></motion.div>
    <div className="herofoot"><motion.p initial={{opacity:0,y:16}} animate={{opacity:1,y:0}} transition={{delay:.2,duration:.7}}>Workshop on Evolving Information Retrieval and Recommendation Systems</motion.p><motion.a initial={{opacity:0}} animate={{opacity:1}} transition={{delay:.4}} href="#about">Discover <b>↓</b></motion.a></div>
  </header>

  <section className="about" id="about"><Label n="01">About</Label><motion.h2 {...reveal}>Information access<br/>does not stand still.</motion.h2><div className="twocol"><motion.p {...reveal}>Collections evolve, users and information needs shift, interactions accumulate, and models are updated. Yet these systems are often evaluated at isolated snapshots.</motion.p><motion.p {...reveal}>EvolveIR brings together research on retrieval and recommendation under continuous change—and asks how effectiveness, robustness, diversity, exposure, and fairness evolve over time.</motion.p></div><motion.blockquote {...reveal}>How should information retrieval and recommendation systems adapt and be evaluated when users, information, interactions, knowledge, and models evolve?</motion.blockquote></section>

  <section className="topics dark" id="topics"><Label n="02">Topics</Label><motion.div className="sectionhead" {...reveal}><h2>Research across<br/><em>the whole timeline.</em></h2><p>We welcome methodological, empirical, resource, and position contributions.</p></motion.div><div className="topiclist">{topics.map((t,i)=><motion.article {...reveal} key={t[0]}><span>0{i+1}</span><h3>{t[0]}</h3><ul>{t.slice(1).map(x=><li key={x}>{x}</li>)}</ul></motion.article>)}</div></section>

  <section className="submit" id="submit"><Label n="03">Call for papers</Label><motion.div className="sectionhead" {...reveal}><h2>Bring your work<br/>into the conversation.</h2><p>Original research, emerging ideas, benchmarks, datasets, tools, and resources are welcome.</p></motion.div><div className="paperlist">{["Full research papers","Short & position papers","Benchmark & dataset papers","Demo & resource papers"].map((x,i)=><motion.div {...reveal} key={x}><span>0{i+1}</span><h3>{x}</h3><b>Length TBA</b></motion.div>)}</div><p className="note">Each submission will be reviewed by at least two programme committee members for relevance, originality, technical soundness, and clarity. Formatting and submission details will be announced soon.</p></section>

  <section className="dates" id="dates"><Label n="04">Important dates</Label><motion.h2 {...reveal}>Save the date.</motion.h2><div className="datelist">{["Submission deadline","Acceptance notification","Camera-ready deadline"].map(x=><motion.div {...reveal} key={x}><span>{x}</span><strong>To be announced</strong></motion.div>)}<motion.div {...reveal} className="confirmed"><span>Workshop</span><strong>25 March 2027</strong></motion.div></div><p>All deadlines are 23:59 Anywhere on Earth (AoE).</p></section>

  <section className="keynote dark" id="people"><Label n="05">Invited speaker</Label><div className="keygrid"><motion.div className="initials" {...reveal}>LB</motion.div><motion.div {...reveal}><p className="overline">Invited keynote</p><h2>Ludovico<br/><em>Boratto</em></h2><p className="role">Associate Professor of Computer Science<br/>University of Cagliari, Italy</p><p className="bio">Researcher in recommender systems, user modelling, algorithmic fairness, multi-stakeholder recommendation, and responsible evaluation.</p><a href="https://www.ludovicoboratto.com/" target="_blank" rel="noreferrer">Speaker website ↗</a></motion.div></div></section>

  <section className="organisers"><Label n="06">Organisers</Label><motion.h2 {...reveal}>The organising committee.</motion.h2><div className="peoplelist">{people.map(([name,aff,url],i)=><motion.a {...reveal} key={name} href={url} target="_blank" rel="noreferrer"><span>0{i+1}</span><h3>{name}</h3><p>{aff}</p><b>↗</b></motion.a>)}</div></section>
  <footer><div className="meta"><span>25 March 2027</span><span>Southampton, United Kingdom</span></div><h2>EvolveIR <em>2027</em></h2><div className="footerlinks"><a href="https://www.ecir2027.co.uk/" target="_blank" rel="noreferrer">ECIR 2027 ↗</a><a href="mailto:het.mehta@ovgu.de">Contact ↗</a></div></footer>
</main>}
