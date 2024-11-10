import React from 'react';
import "./App.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "tachyons/css/tachyons.min.css";
import v1 from "./exam.mp4";

const Nav = () => {
  return (
    <>
      <Router>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
        <div>
          <header className="black tc pv4 avenir">
            <div className="bg">
              <h1
                className="mt2 mb0 baskerville i fw1 f1 animate__animated animate__backInDown"
                id="typewriter"
              >
                PROCTORLY
              </h1>
              <h2
                className="mt2 mb0 f6 fw4 ttu tracked animate__animated animate__jackInTheBox animate__delay-1s"
                id="typewriterr"
              >
                "Changing the way teachers take examinations"
              </h2>
              <br />
            </div>

            <nav className="bt bb tc mw7 center dib mt4 bold">
              <div className="bt bb tc mw7 dib center mt4 ">
                <div className="dib flex">
                  <div className="edits">
                    <Link to="/" className="f6 f5-l link bg-animate white hover-bg-navy dib pa3 ph4-l animate__animated" id="nav1">
                      Home
                    </Link>
                  </div>
                  <div>
                    <Link to="/About" className="bombRightOut f6 f5-l link bg-animate black hover-bg-light-green dib pa3 ph4-l" id="nav2">
                      Register
                    </Link>
                  </div>
                  <div>
                    <Link to="/users" className="f6 f5-l link bg-animate white hover-bg-navy2 dib pa3 ph4-l animate__animated" id="nav3">
                      Preview
                    </Link>
                  </div>
                  <div>
                    <Link to="/CON" className="f6 f5-l link bg-animate black hover-bg-navy dib pa3 ph4-l animate__animated" id="nav4">
                      Contact us
                    </Link>
                  </div>
                </div>
              </div>
            </nav>
          </header>

          <Routes>
            <Route path="/About" element={<About />} />
            <Route path="/users" element={<Users />} />
            <Route path="/" element={<Home />} />
            <Route path="/CON" element={<Contact />} />
          </Routes>
        </div>
      </Router>
    </>
  );
};

function Home() {
  return (
    <div>
      <video
        autoPlay
        loop
        muted
        style={{
          position: "absolute",
          width: "100%",
          left: "50%",
          top: "50%",
          height: "100%",
          objectFit: "cover",
          transform: "translate(-50%,-50%)",
          zIndex: "-1",
        }}
      >
        <source src={v1} type="video/mp4" />
      </video>
      <div className="f3 tc white">
        <br />
        <br />
        ProctorLy is an AI-based system to provide a secure and live exam proctoring system.
        <br />
        <br />
        We work with colleges, universities, employers, and certification providers to create secure, high-quality educational experiences – and ensure that learners who play by the rules are honored for their work.
      </div>
    </div>
  );
}

function About() {
  return (
    <div className="">
      <h1 className="about1">Sign in</h1>
      <form onSubmit={(e) => e.preventDefault()} className="about2">
        <label>
          E-mail address <br /> <br />
          <input type="email" name="name" />
        </label>
        <br /> <br /> <br />

        <label>
          Password <br /> <br />
          <input type="text" name="name" />
        </label>{" "}
        <br /> <br />
        <input className="f6 link dim br2 ph3 pv2 mb2 dib white bg-dark-gray" type="submit" value="Submit" /> <br /> <br /> <br /> <br />
      </form>
    </div>
  );
}

function Users() {
  document.addEventListener("visibilitychange", function () {
    console.log(document.visibilityState);
    if (document.visibilityState !== "visible") {
      alert("Please do not change the tab");
    }
  });

  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.keyCode === 86) {
        alert("You used keyboard shortcuts to copy and paste.");
      }
    };
    window.addEventListener("keydown", handleEsc);
    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, []);

  const HEIGHT = 400;
  const WIDTH = 300;

  function startVideo() {
    console.log("Hello");
    setPlaying(true);
    navigator.getUserMedia(
      {
        video: true,
      },
      (stream) => {
        let video = document.getElementsByClassName("app__videoFeed")[0];
        if (video) {
          video.srcObject = stream;
        }
      },
      (err) => console.error(err)
    );
  }

  function stopVideo() {
    setPlaying(false);
    let video = document.getElementsByClassName("app__videoFeed")[0];
    video.srcObject.getTracks()[0].stop();
  }

  return (
    <div className="grad">
      <div className="for">
        <section className="flex dib">
          <div className="app dib flex">
            <div className="app__container">
			<video
  className="app__videoFeed t2"
  height={HEIGHT}
  width={WIDTH}
  muted
  autoPlay
></video>
            </div>
            <div className="app__input">
              {playing ? (
                <button onClick={stopVideo} className="f6 grow no-underline br-pill ph3 pv2 mb2 dib black bg-light-purple">
                  Stop
                </button>
              ) : (
                <button className="f6 grow no-underline br-pill ph3 pv2 mb2 dib white bg-dark-green" onClick={startVideo}>
                  Start
                </button>
              )}
            </div>
            <div className="appp">
              <img src="https://extensions.libreoffice.org/assets/screenshots/z/question-paper_0af0fc3d-4b69-4367-b5d1-904b5d5aeeb0__FitMaxWzEwMDAsMTAwMF0.png" />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

function Contact() {
  return (
    <div className="">
      <ul>
        <br />
        <pre className="tc">
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
          <a href="https://github.com/madhavc9" className="link underline green tc hover-silver no-underline near-white bg-animate bg-near-black inline-flex items-center ma2 tc br2 pa2">
            Madhav Choudhary
          </a>
        </pre>
      </ul>
    </div>
  );
}

export default Nav;