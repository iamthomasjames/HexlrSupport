import React, { useState, useEffect } from "react";
import "../../App.css";
import "../../Test.css";
import axios from "axios";
import loading1 from "../../Assets/Images/loading.gif";
import Webcam from "react-webcam";
import camera from "../../Assets/Images/camera.svg";
import welldone from "../../Assets/Images/welldone.svg";
import error from "../../Assets/Images/error.svg";
import over from "../../Assets/Images/over.svg";



const Info = () => {
  const hour = new Date();
  const [flow, setFlow] = useState("Start");
  const [Name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();
  const [isStart, setisStart] = useState(true);
  const [questions, setQuestions] = useState();
  const [questionCount, setquestionCount] = useState(0);
  const [answers, setAnswers] = useState([]);
  const [isQuiz, setisQuiz] = useState(true);
  const [isMakeQuiz, setMakeQuiz] = useState();
  const [isCamera, setCameraStatus] = useState(false);
  const [screenCaptureList, setscreenCaptureList] = useState([]);

  const videoConstraints = {
    width: 1280,
    height: 720,
    facingMode: "user",
  };

  useEffect(() => {
    getQuestions();
  }, []);
  useEffect(() => {
    getStatus();
  }, [isCamera]);

  const getStatus = () => {
    setInterval(() => {
      // capture();
    }, 15000);

    // if (localStorage.getItem("quiz_ended")) {
    //   setFlow("ended");
    // }
    // if (localStorage.getItem("_werrty")) {
    //   if (isMakeQuiz && isMakeQuiz[0].isAvailable === true) {
    //     setFlow("profile");
    //     localStorage.clear();
    //   } else {
    //     setFlow("wrong");
    //   }
    // }

    // document.addEventListener("visibilitychange", () => {
    //   document.title = document.visibilityState;
    //   if (document.visibilityState === "hidden") {
    //     localStorage.setItem("_werrty", document.visibilityState);
    //     setFlow("wrong");
    //   }
    // });
  };

  const webcamRef = React.useRef(null);

  const capture = React.useCallback(() => {
    if (webcamRef.current) {
      const imageSrc = webcamRef.current.getScreenshot({
        width: 150,
        height: 150,
      });
      let scList = screenCaptureList;
      scList.push(imageSrc);
      setscreenCaptureList(scList);
      console.log(screenCaptureList);
    }
  }, [1]);

  const getQuestions = () => {
    axios
      .get("https://trusting-dubinsky-942dd3.netlify.app/isQuiz")
      .then(function (response) {
        setMakeQuiz(response.data);
        if (response.data[0].isQuiz === false) {
          setFlow("Timeout");
        }
      });
    axios
      .get("https://trusting-dubinsky-942dd3.netlify.app/getQuestions")
      .then(function (response) {
        response.data.sort(function (a, b) {
          return Math.random() - 0.5;
        });
        setQuestions(response.data);
      });
  };

  return (
    <>
      {isMakeQuiz ? (
        <div
          style={{
            height: "700px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {flow === "profile" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://d2slcw3kip6qmk.cloudfront.net/marketing/techblog/how-to-plan-a-programming-competition-header@2x.png"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#323580",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div>
                  <h2 style={{ color: "white" }}>Job description</h2>
                  <hr />
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        fontWeight: 800,
                        color: "gold",
                        fontSize: "18px",
                      }}
                    >
                      Hexlr Technologies
                    </span>{" "}
                    looking for junior programmers (0yrs-1yrs) who has knowledge
                    on html,ccs and javascript.
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        fontWeight: 800,
                        color: "gold",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Selection procedure:{" "}
                    </span>
                    <br />A test will ve conducted on the bases of html,css and
                    javascript. Selected candidates will be given an assignment
                    to explore the ideas. Once that is submitted our team will
                    check the assigment and on basis of test result and
                    assignment submission, candidates will be selected for the
                    next round.
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        fontWeight: 800,
                        color: "gold",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Training Structure:{" "}
                    </span>
                    <br />
                    Selected candidates will undergo a traning based on "React
                    js/React Native" for 2 months.
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        fontWeight: 800,
                        color: "gold",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Final Hiring:{" "}
                    </span>
                    <br />
                    If the candidates shows interest and improvements on all the
                    basis, Hexlr Technologies will continue with the hiring
                    process.
                  </p>
                  <p style={{ color: "white" }}>
                    <span
                      style={{
                        fontWeight: 800,
                        color: "gold",
                        fontSize: "18px",
                      }}
                    >
                      {" "}
                      Terms and consitions:{" "}
                    </span>

                    <p style={{ color: "white" }}>
                      1. Company wont be responsible for any damages cause by
                      you.
                    </p>
                    <p style={{ color: "white" }}>
                      2. During Training period all the expenses will be taken
                      by the candidate.
                    </p>
                    <p style={{ color: "white" }}>
                      3. Traning will be completely free of cost and environment
                      arranges taken by candidate.
                    </p>
                    <p style={{ color: "white" }}>
                      4. Certificates will be provided only after completing the
                      courses.
                    </p>
                    <p style={{ color: "white" }}>
                      5. Candidate must complete the traning process in order to
                      get into hiring process
                    </p>
                  </p>
                  <input
                    className="agreeContine"
                    type="button"
                    value="Agree and continue"
                    style={{
                      width: "300px",
                      height: "50px",
                      borderRadius: "30px",
                      backgroundColor: "tomato",
                      color: "white",
                    }}
                    onClick={() => {
                      setFlow("instruction");
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {flow === "instruction" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://i.redd.it/fg75of4vuma41.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#080C24",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div>
                  <h2 style={{ color: "white" }}>Test Instructions</h2>

                  <p style={{ color: "white" }}>
                    <p style={{ color: "white" }}>
                      1. Total you will be provided 30 objective questions.
                    </p>
                    <p style={{ color: "white" }}>
                      2. All right answer will carry 1 mark each and no negative
                      marks.
                    </p>
                    <p style={{ color: "white" }}>
                      3. If you try to close the window or switch the tab test
                      will be closed.
                    </p>
                    <p style={{ color: "white" }}>
                      4. Web cam will be turned on turing the test.
                    </p>
                    <p style={{ color: "white" }}>
                      5. Total time given will be 25 minutes.
                    </p>
                    <p style={{ color: "white" }}>
                      6. After 25 minutes test will be closed and we no longer
                      can accept the answers.
                    </p>
                    <p style={{ color: "white" }}>
                      7. Please try to complete all the question since all are
                      mandatory questions.
                    </p>
                    <p style={{ color: "white" }}>
                      8. Provide your details correctly so that team can connect
                      with the results.
                    </p>
                  </p>
                  <br />
                  <input
                    className="agreeContine"
                    type="button"
                    value="Agree and continue"
                    style={{
                      width: "300px",
                      height: "50px",
                      borderRadius: "30px",
                      backgroundColor: "tomato",
                      color: "white",
                    }}
                    onClick={() => {
                      setFlow("register");
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {flow === "register" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://images.unsplash.com/photo-1495476479092-6ece1898a101?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#0B1C2A",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div>
                  <h2 style={{ color: "white" }}>Register yourself</h2> <br />
                  <div className="register-container">
                    <p style={{ color: "white" }}>Name</p>
                    <input
                      type="text"
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <p style={{ color: "white" }}>Email</p>
                    <input
                      type="text"
                      onChange={(e) => {
                        setEmail(e.target.value);
                      }}
                    />
                    <p style={{ color: "white" }}>Phone</p>
                    <input
                      type="text"
                      onChange={(e) => {
                        setPhone(e.target.value);
                      }}
                    />

                    <br />
                  </div>
                  <input
                    className="agreeContine"
                    type="button"
                    value="Get Started!!"
                    style={{
                      width: "300px",
                      height: "50px",
                      borderRadius: "30px",
                      backgroundColor: "tomato",
                      color: "white",
                    }}
                    onClick={() => {
                      if (Name && phone && email) {
                        localStorage.setItem("Name", Name);
                        localStorage.setItem("Email", email);
                        localStorage.setItem("Phone", phone);
                        setFlow("Start");
                      } else {
                        alert("Please fill all the fields");
                      }
                    }}
                  />
                </div>
              </div>
            </div>
          )}

          {flow === "Start" && questions && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://i.pinimg.com/originals/8e/18/f8/8e18f8a8be978d951a0ad0b6b9eeb7fe.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#21201E",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <Webcam
                  audio={false}
                  height={200}
                  ref={webcamRef}
                  screenshotFormat="image/jpeg"
                  width={200}
                  videoConstraints={videoConstraints}
                  onUserMedia={() => {
                    setCameraStatus(true);
                  }}
                />
                <p style={{marginTop:-50,color:'red'}}>🔴Recording....</p>
                {!isCamera && (
                  <div
                    style={{
                      display: "flex",
                      justifyItems: "center",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img src={camera} width="400" height="400" />
                    <h2 style={{ color: "white" }}>
                      Please accept the web camera pop to start the test
                    </h2>
                    <h2 style={{ color: "white" }}>
                      Take a note that you are under camera surveillance during
                      the test!!
                    </h2>
                  </div>
                )}
                {isCamera && (
                  <div>
                    <h3 style={{ color: "white" }}>
                      Question {questionCount + 1}
                    </h3>{" "}
                    <br />
                    <p
                      style={{
                        color: "white",
                        width: "100%",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                      }}
                    >
                      {questions && questions[questionCount].question}
                    </p>
                    {questions && questions[questionCount].isImage && (
                      <img
                        src={questions[questionCount].isImage}
                        width="90%"
                        height="400px"
                        style={{ objectFit: "contain" }}
                      />
                    )}
                    <h3 style={{ color: "white" }}>Choose one answer</h3> <br />
                    <input
                      type="radio"
                      style={{ width: "30px", height: "30px" }}
                      value="answer1"
                      name="answer"
                      id="answer1"
                    />
                    <p
                      style={{
                        color: "white",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                      }}
                    >
                      {questions && questions[questionCount].option1}
                    </p>{" "}
                    <br />
                    <input
                      type="radio"
                      style={{ width: "30px", height: "30px" }}
                      value="answer2"
                      name="answer"
                      id="answer2"
                    />
                    <p
                      style={{
                        color: "white",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                      }}
                    >
                      {questions && questions[questionCount].option2}
                    </p>{" "}
                    <br />
                    <input
                      type="radio"
                      style={{ width: "30px", height: "30px" }}
                      value="answer3"
                      name="answer"
                      id="answer3"
                    />
                    <p
                      style={{
                        color: "white",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                      }}
                    >
                      {questions && questions[questionCount].option3}
                    </p>{" "}
                    <br />
                    <input
                      type="radio"
                      style={{ width: "30px", height: "30px" }}
                      value="answer4"
                      name="answer"
                      id="answer4"
                    />
                    <p
                      style={{
                        color: "white",
                        whiteSpace: "pre-wrap",
                        overflowWrap: "break-word",
                      }}
                    >
                      {questions && questions[questionCount].option4}
                    </p>{" "}
                    <br />
                    {questions && questions.length > questionCount + 1 ? (
                      <input
                        className="agreeContine"
                        type="button"
                        value="Save and Next"
                        style={{
                          width: "300px",
                          height: "50px",
                          borderRadius: "30px",
                          backgroundColor: "tomato",
                          color: "white",
                        }}
                        onClick={() => {
                          if (
                            document.querySelector(
                              'input[name="answer"]:checked'
                            )
                          ) {
                            setquestionCount(questionCount + 1);
                            let useranswer;
                            if (
                              document.querySelector(
                                'input[name="answer"]:checked'
                              )
                            ) {
                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer1"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option1;
                              }
                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer2"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option2;
                              }

                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer3"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option3;
                              }

                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer4"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option4;
                              }
                            }

                            let answers1 = {
                              number: questionCount + 1,
                              question:
                                questions && questions[questionCount].question,
                              answer: useranswer,
                            };
                            setAnswers((oldArray) => [...oldArray, answers1]);
                            var radio = document.querySelector(
                              "input[type=radio][name=answer]:checked"
                            );
                            radio.checked = false;
                          } else {
                            alert("Please select one answer");
                          }
                        }}
                      />
                    ) : (
                      <input
                        className="agreeContine"
                        type="button"
                        value="Submit"
                        style={{
                          width: "300px",
                          height: "50px",
                          borderRadius: "30px",
                          backgroundColor: "tomato",
                          color: "white",
                        }}
                        onClick={() => {
                          if (
                            document.querySelector(
                              'input[name="answer"]:checked'
                            )
                          ) {
                            let useranswer;
                            if (
                              document.querySelector(
                                'input[name="answer"]:checked'
                              )
                            ) {
                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer1"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option1;
                              }
                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer2"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option2;
                              }

                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer3"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option3;
                              }

                              if (
                                document.querySelector(
                                  'input[name="answer"]:checked'
                                ).value === "answer4"
                              ) {
                                useranswer =
                                  questions && questions[questionCount].option4;
                              }
                            }
                            let answers1 = {
                              number: questionCount + 1,
                              question:
                                questions && questions[questionCount].question,
                              answer: useranswer,
                            };
                            setAnswers((oldArray) => [...oldArray, answers1]);
                            let postAnswers = {
                              name: localStorage.getItem("Name"),
                              phone: localStorage.getItem("Phone"),
                              email: localStorage.getItem("Email"),
                              answers: answers,
                              screenshots: screenCaptureList,
                            };
                            axios
                              .post(
                                "https://trusting-dubinsky-942dd3.netlify.app/post/answers",
                                postAnswers
                              )
                              .then((res) => {
                                localStorage.setItem("quiz_end", "ended");
                                setFlow("ended");
                              });
                          } else {
                            alert("Please select one answer");
                          }
                        }}
                      />
                    )}
                  </div>
                )}
              </div>
            </div>
          )}

          {flow === "ended" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://i.pinimg.com/originals/8e/18/f8/8e18f8a8be978d951a0ad0b6b9eeb7fe.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#21201E",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection:'column'
                  }}
                >
                  <div
                    style={{
                      display:'flex',
                      alignItems: "center",
                      justifyContent: "center",
                     
                    }}
                  >
                    <img src={welldone} alt="" width={300} height={300}  />
                  </div>
                  <div
                    style={{
                       display:'flex',
                       flexDirection:'column',
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <>
                    <h2 style={{ color: "gold" }}>
                    Congratulations.....
                    </h2>
                    <h2 style={{ color: "white" }}>
                      Your Test Result has been submitted. Thanks for your time
                      with Hexlr. 
                    </h2>
                    <h2 style={{ color: "white" }}>
                    We  will keep in touch with you shortly.Enjoy your rest of the day :)
                    </h2>
                    </>
                  </div>
                </div>
              </div>
            </div>
          )}

          {flow === "wrong" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://wallpaperaccess.com/full/736146.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#21201E",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection:'column'
                  }}
                >
                  <div
                    style={{
                      display:'flex',
                      alignItems: "center",
                      justifyContent: "center",
                     
                    }}
                  >
                    <img src={error} alt="" width={300} height={300}  />
                  </div>
                  <div
                    style={{
                      display:'flex',
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection:'column'
                    }}
                  >
                    <>
                    <h2 style={{ color: "white" }}>
                    Sorry we have noticed some malpractice from you during the
                    course. <br /> Test is now closed and you no longer be able
                    to continue the test.
                  </h2>
                  <h2 style={{ color: "white" }}>
                    Thank you for your time and better luck next time :)
                  </h2>
                  <h3 style={{ color: "tomato" }}> Test Status: Ended</h3>
                    </>
                  </div>
                </div>
              </div>
            </div>
          )}


{flow === "over" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://wallpaperaccess.com/full/736146.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#21201E",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    flexDirection:'column'
                  }}
                >
                  <div
                    style={{
                      display:'flex',
                      alignItems: "center",
                      justifyContent: "center",
                     
                    }}
                  >
                    <img src={over} alt="" width={300} height={300}  />
                  </div>
                  <div
                    style={{
                      display:'flex',
                      alignItems: "center",
                      justifyContent: "center",
                      flexDirection:'column'
                    }}
                  >
                    <>
                    <h2 style={{ color: "white" }}>
                    You have already submited the test.
                  </h2>
                  <h2 style={{ color: "white" }}>
                    Our team will connect with you with the test result soon :)
                  </h2>
                  <h3 style={{ color: "tomato" }}> Test Status: Ended</h3>
                    </>
                  </div>
                </div>
              </div>
            </div>
          )}

          {flow === "Timeout" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://wallpaperaccess.com/full/736146.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#21201E",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2 style={{ color: "white" }}>
                    You have exeeded the time bound for the test.
                  </h2>
                  <h2 style={{ color: "white" }}>
                    Thank you for your time and better luck next time :)
                  </h2>
                  <h3 style={{ color: "tomato" }}> Test Status: Ended</h3>
                </div>
              </div>
            </div>
          )}

          {flow === "camera" && (
            <div
              style={{
                height: "95%",
                width: "90%",
                backgroundColor: "white",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ width: "100%" }}>
                <img
                  src="https://wallpaperaccess.com/full/736146.jpg"
                  width="100%"
                  height="100px"
                  style={{
                    objectFit: "cover",
                    borderTopLeftRadius: 45,
                    borderTopRightRadius: 45,
                  }}
                />
              </div>
              <div
                style={{
                  flex: 3,
                  backgroundColor: "#21201E",
                  marginTop: "-10px",
                  padding: "30px 20px 0px 20px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    justifyContent: "center",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <h2 style={{ color: "white" }}>
                    Please enable the camera in your system to start with the
                    test.
                  </h2>
                </div>
              </div>
            </div>
          )}
        </div>
      ) : (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: "column",
          }}
        >
          <img src={loading1} alt="loading" />
          <p>Loading....</p>
        </div>
      )}
    </>
  );
};
export default Info;
