import React, { Fragment } from "react";
import Nav from "./Nav";
import SideNav from "./sidenav";
import Row from "react-bootstrap/Row";
import { Link } from "react-router-dom";
import Col from "react-bootstrap/Col";
import "./pythonH.css";
import { PropsWithChildren } from "react";
import End from "./end";
// class Operator extends React.Component {
export const Date = () => {
  const dsmaller = <img id="Dsmaller" src="./double small.png" alt="" />;

  const smaller = <img id="Dsmaller" src="./smaller.png" alt="" />;
  const greater = <img id="Dgreater" src="./greater.jpg" alt="" />;
  const dgreater = <img id="Dgreater" src="./double greater.png" alt="" />;
  const self = <img id="self" src="./self.jpg" alt="" />;
  const openb = <img id="bracket1" src="./openbracket.png" alt="" />;
  const closeb = <img id="bracket" src="./closebracket.jpg" alt="" />;
  return (
    <Fragment>
      <Nav />
      <Row>
        <Col>
          <SideNav />
        </Col>
        <Col>
          <div id="date" className="container">
            <h3>Python Datetime</h3> <br />
            <div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/module">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/math">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}
            <hr />
            <h4>Python Dates</h4>
            <p>
              A date in Python is not a data type of its own, but we can import
              a module named datetime to work with dates as date objects.
            </p>
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>
                Import the datetime module and display the current date:
              </span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">datetime </span> <br /> <br />
                <span className="text-dark">
                  x = datetime.datetime.now() <br /> <br />
                  <span className="brown"> print</span>(x)
                </span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <hr />
            <h4>Date Output</h4>
            <p>
              When we execute the code from the example above the result will
              be:
            </p>
            <p className="text-danger">2023-05-23 14:53:26.504075</p>
            <p>
              The date contains year, month, day, hour, minute, second, and
              microsecond.
            </p>
            <p>
              The <span className="text-danger">datetime</span> module has many
              methods to return information about the date object.
            </p>
            <p>
              Here are a few examples, you will learn more about them later in
              this chapter:
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Return the year and name of weekday:</span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">datetime </span> <br /> <br />
                <span className="text-dark">
                  x = datetime.datetime.now()
                  <br /> <br />
                  <span className="brown"> print</span>(x.year)
                </span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <hr />
            <br />
            <h4>Creating Date Objects</h4>
            <p>
              To create a date, we can use the{" "}
              <span className="text-danger">datetime()</span> class
              (constructor) of the <span className="text-danger">datetime</span>{" "}
              module.
            </p>
            <p>
              The <span className="text-danger">datetime()</span>
              class requires three parameters to create a date: year, month,
              day.
            </p>
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Create a date object:</span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">datetime </span> <br /> <br />
                <span className="text-dark">
                  x = datetime.datetime({" "}
                  <span className="text-danger">2020, 5, 17</span> )
                  <br /> <br />
                  <span className="brown"> print</span>(x)
                </span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <p>
              The <span className="text-danger">datetime()</span> class also
              takes parameters for time and timezone (hour, minute, second,
              microsecond, tzone), but they are optional, and has a default
              value of <span className="text-danger">0</span>, ({" "}
              <span className="text-danger">None</span> for timezone).
            </p>{" "}
            <hr />
            <br />
            <h4>The strftime() Method</h4>
            <p>
              The <span className="text-danger">datetime</span> object has a
              method for formatting date objects into readable strings.
            </p>
            <p>
              The method is called{" "}
              <span className="text-danger">strftime() </span>, and takes one
              parameter, format, to specify the{" "}
              <span className="text-danger"> format </span>
              of the returned string:
            </p>
            <br />
            <br />
            <div id="tryit4" className="container">
              <h3>EXAMPLE</h3>
              <span>Display the name of the month:</span>
              <br /> <br />
              <p className="text-primary">
                import
                <span className="text-dark">datetime </span> <br /> <br />
                <span className="text-dark">
                  x = datetime.datetime({" "}
                  <span className="text-danger">2018, 6, 1</span> )
                  <br /> <br />
                  <span className="brown"> print</span>(x.strftime({" "}
                  <span className="brown">"%B"</span> ))
                </span>
              </p>
              <Link to="/c">
                <button className="btn btn-primary text-warning">
                  Try it Yourself
                </button>
              </Link>
            </div>{" "}
            <br />
            <p>A reference of all the legal format codes:</p>
            <br />
            <div id="datatypes" className="container">
              <Row>
                <Col sm={2}>
                  <h6>Directive</h6> <br />
                </Col>

                <Col sm={5}>
                  <h6> Description</h6>
                </Col>

                <Col sm={3}>
                  <h6> Example</h6>
                </Col>
                <Col sm={2}>
                  <h6>Try it</h6>
                </Col>
              </Row>

              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%a</span>
                  </Col>

                  <Col sm={5}>
                    <p> Weekday, short version</p>
                  </Col>

                  <Col sm={3}>
                    <p> Wed</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%A</span>
                  </Col>

                  <Col sm={5}>
                    <p> Weekday, full version</p>
                  </Col>

                  <Col sm={3}>
                    <p> Wednesday</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%w</span>
                  </Col>

                  <Col sm={5}>
                    <p> Weekday as a number 0-6, 0 is Sunday</p>
                  </Col>

                  <Col sm={3}>
                    <p> 3</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%d</span>
                  </Col>

                  <Col sm={5}>
                    <p> Day of month 01-31</p>
                  </Col>

                  <Col sm={3}>
                    <p> 31</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%b</span>
                  </Col>

                  <Col sm={5}>
                    <p> Month name, short version</p>
                  </Col>

                  <Col sm={3}>
                    <p> Dec</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%B</span>
                  </Col>

                  <Col sm={5}>
                    <p> Month name, full version</p>
                  </Col>

                  <Col sm={3}>
                    <p> December</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%m</span>
                  </Col>

                  <Col sm={5}>
                    <p> Month as a number 01-12</p>
                  </Col>

                  <Col sm={3}>
                    <p> 12</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%y</span>
                  </Col>

                  <Col sm={5}>
                    <p> Year, short version, without century</p>
                  </Col>

                  <Col sm={3}>
                    <p> 18</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%Y</span>
                  </Col>

                  <Col sm={5}>
                    <p> Year, full version</p>
                  </Col>

                  <Col sm={3}>
                    <p> 2018</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%H</span>
                  </Col>

                  <Col sm={5}>
                    <p> Hour 00-23</p>
                  </Col>

                  <Col sm={3}>
                    <p> 17</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%I</span>
                  </Col>

                  <Col sm={5}>
                    <p> Hour 00-12</p>
                  </Col>

                  <Col sm={3}>
                    <p> 05</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%p</span>
                  </Col>

                  <Col sm={5}>
                    <p> AM/PM</p>
                  </Col>

                  <Col sm={3}>
                    <p> PM</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%M</span>
                  </Col>

                  <Col sm={5}>
                    <p> Minute 00-59</p>
                  </Col>

                  <Col sm={3}>
                    <p> 41</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%S</span>
                  </Col>

                  <Col sm={5}>
                    <p> Second 00-59</p>
                  </Col>

                  <Col sm={3}>
                    <p> 08</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%f</span>
                  </Col>

                  <Col sm={5}>
                    <p> Microsecond 000000-999999</p>
                  </Col>

                  <Col sm={3}>
                    <p> 548513</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%z</span>
                  </Col>

                  <Col sm={5}>
                    <p> UTC offset</p>
                  </Col>

                  <Col sm={3}>
                    <p> +0100</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%Z</span>
                  </Col>

                  <Col sm={5}>
                    <p> Timezone</p>
                  </Col>

                  <Col sm={3}>
                    <p> CST</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%j</span>
                  </Col>

                  <Col sm={5}>
                    <p> Day number of year 001-366</p>
                  </Col>

                  <Col sm={3}>
                    <p> 365</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey2">
                <Row>
                  <Col sm={2}>
                    <span>%U</span>
                  </Col>

                  <Col sm={5}>
                    <p>
                      {" "}
                      Week number of year, Sunday as the first day of week,
                      00-53
                    </p>
                  </Col>

                  <Col sm={3}>
                    <p> 52</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite2">
                <Row>
                  <Col sm={2}>
                    <span>%W</span>
                  </Col>

                  <Col sm={5}>
                    <p>
                      {" "}
                      Week number of year, Monday as the first day of week,
                      00-53
                    </p>
                  </Col>

                  <Col sm={3}>
                    <p> 52</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%c</span>
                  </Col>

                  <Col sm={5}>
                    <p> Local version of date and time</p>
                  </Col>

                  <Col sm={3}>
                    <p> Mon Dec 31 17:41:00 2018</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%C</span>
                  </Col>

                  <Col sm={5}>
                    <p> Century</p>
                  </Col>

                  <Col sm={3}>
                    <p> 20</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%x</span>
                  </Col>

                  <Col sm={5}>
                    <p> Local version of date</p>
                  </Col>

                  <Col sm={3}>
                    <p> 12/31/18</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%X</span>
                  </Col>

                  <Col sm={5}>
                    <p> Local version of time</p>
                  </Col>

                  <Col sm={3}>
                    <p> 17:41:00</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%%</span>
                  </Col>

                  <Col sm={5}>
                    <p> A % character</p>
                  </Col>

                  <Col sm={3}>
                    <p> %</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%G</span>
                  </Col>

                  <Col sm={5}>
                    <p> ISO 8601 year</p>
                  </Col>

                  <Col sm={3}>
                    <p> 2018</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>

              <div id="helogrey">
                <Row>
                  <Col sm={2}>
                    <span>%u</span>
                  </Col>

                  <Col sm={5}>
                    <p> ISO 8601 weekday (1-7)</p>
                  </Col>

                  <Col sm={3}>
                    <p> 1</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
              <div id="helowhite">
                <Row>
                  <Col sm={2}>
                    <span>%V</span>
                  </Col>

                  <Col sm={5}>
                    <p> ISO 8601 weeknumber (01-53)</p>
                  </Col>

                  <Col sm={3}>
                    <p> 01</p>
                  </Col>

                  <Col sm={2}>
                    <Link to="/c">
                      {" "}
                      <button>Try it</button>
                    </Link>
                  </Col>
                </Row>
              </div>
            </div>
<br />
<div className="container">
              {" "}
              <Row>
                <Col>
                  <Link to="/module">
                    <button className="btn btn-primary" id="previous">
                      {" "}
                      Previous
                    </button>
                  </Link>
                </Col>
                <Col>
                  <Link to="/math">
                    {" "}
                    <button className="btn btn-primary" id="Next">
                      Next
                    </button>
                  </Link>
                </Col>
              </Row>{" "}
            </div>{" "}


          </div>
        </Col>{" "}
      </Row>
      <End/>
    </Fragment>
  );
};
