import Countdown from "../../components/Countdown";
import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const Home = () => {
  return (
    <>
      <Navigation />
      <div
        className={` h-screen w-auto  flex items-center bg-[url('../img/hero.jpg')] bg-blend-multiply bg-[#6463a8]  justify-center text-center  z-10  bg-center  bg-no-repeat  `}
      >
        <div className="bg-[#101016] bg-opacity-50 w-50 text-white rounded-md w-100 m-5 p-5 sm:m-10 sm:p-10 md:max-w-xl lg:rounded-lg">
          <h1 className="font-bold text-xl mb-2 md:mb-4 md:text-4xl">
            ALPHA-BETA RESEARCH SOCIETY
          </h1>
          <p className="mb-2 text-xl">Theme</p>
          <p className="mb-2 text-xl">
            THE ROLE OF STATISTICS IN NATION-BUILDING: CHALLENGES AND SOLUTIONS
          </p>
        </div>
      </div>
      <main>
        {/* <div className="flex justify-center py-5 md:py-10 px-5">
            <div className=" inset-0 h-auto z-10  pt-5 md:pt-0">
              <img
                src="/banner.jpeg"
                alt=""
                className="md:h-96 md:w-96 object-fit-cover"
              />
            </div>
          </div> */}
        <div
          className="px-5 sm:px-10 md:px-20 lg:px-10 xl:px-20 py-8 bg-[#d7c7fd] lg:mt-20"
          id="info"
        >
          <div className="max-w-screen-xl mx-auto">
            <div className="flex flex-col items-center  lg:flex-row  lg:justify-between">
              <div className="md:w-1/4  mt-6 lg:mt-8 bg-white rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-[#606060] rounded-lg">
                  <svg
                    className="fill-white w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 448 512"
                  >
                    <path d="M0 464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V192H0v272zm320-196c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM192 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12h-40c-6.6 0-12-5.4-12-12v-40zM64 268c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zm0 128c0-6.6 5.4-12 12-12h40c6.6 0 12 5.4 12 12v40c0 6.6-5.4 12-12 12H76c-6.6 0-12-5.4-12-12v-40zM400 64h-48V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H160V16c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v48H48C21.5 64 0 85.5 0 112v48h448v-48c0-26.5-21.5-48-48-48z" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                  Date
                </div>

                <div className="text-sm">
                  Monday, 17th July - Wednesday, 19th July, 2023
                  {/* <span className="invisible">
                    ...............
                  </span> */}
                </div>
                <div className="text-sm py-0 md:py-6"></div>
              </div>
              <div className="md:w-1/4  mt-6 lg:mt-8 bg-white rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12 ">
                <div className="p-4 inline-block bg-[#606060] rounded-lg">
                  <svg
                    className="fill-white w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 512 512"
                  >
                    <path d="M256,8C119,8,8,119,8,256S119,504,256,504,504,393,504,256,393,8,256,8Zm92.49,313h0l-20,25a16,16,0,0,1-22.49,2.5h0l-67-49.72a40,40,0,0,1-15-31.23V112a16,16,0,0,1,16-16h32a16,16,0,0,1,16,16V256l58,42.5A16,16,0,0,1,348.49,321Z" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                  Time
                </div>

                <div className="text-sm">
                  {" "}
                  9:00am and 4:00pm (WAT)
                  <span className="invisible">
                    .....................................
                  </span>
                </div>
                <div className="text-sm py-0 md:py-8"></div>
              </div>
              <div className="md:w-1/4  mt-6 lg:mt-8 bg-white rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-[#606060] rounded-lg">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 384 512"
                    className="fill-white w-10"
                  >
                    <path d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                  Venue
                </div>
                <div className="text-sm">
                  Adeojo Lecture Hall, Ladoke Akintola University of Technology,
                  Ogbomoso, Nigeria
                </div>
              </div>
              <div className="md:w-1/4  mt-8 bg-white rounded shadow-lg p-12 lg:p-8 lg:mx-4 xl:p-12">
                <div className="p-4 inline-block bg-[#606060] rounded-lg">
                  <svg
                    className="fill-white w-10"
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 640 512"
                  >
                    <path d="M624 208h-64v-64c0-8.8-7.2-16-16-16h-32c-8.8 0-16 7.2-16 16v64h-64c-8.8 0-16 7.2-16 16v32c0 8.8 7.2 16 16 16h64v64c0 8.8 7.2 16 16 16h32c8.8 0 16-7.2 16-16v-64h64c8.8 0 16-7.2 16-16v-32c0-8.8-7.2-16-16-16zm-400 48c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm89.6 32h-16.7c-22.2 10.2-46.9 16-72.9 16s-50.6-5.8-72.9-16h-16.7C60.2 288 0 348.2 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-74.2-60.2-134.4-134.4-134.4z" />
                  </svg>
                </div>
                <div className="mt-4 font-extrabold text-2xl tracking-wide">
                  Register
                </div>
                <div className="text-sm">
                  Interested applicants can make use of the following link to
                  register:{" "}
                  <span>
                    <a
                      href="https://forms.gle/7J5bQgE4D9Pt64AT7"
                      target="blank"
                      className="font-bold text-blue-600 text-sm"
                    >
                      Here
                    </a>
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div id="countdown">
            <Countdown/>
        </div>
        <section className="bg-[#d7c7fd] p-8 lg:px-20 w-full lg:mt-20 lg:max-w-[1920px] ">
          {" "}
          <div className="max-w-screen-xl mx-auto relative">
            <h2 className="font-bold text-2xl md:text-4xl mt-4 mb-8 text-center">
              Background
            </h2>

            <p className="mt-4 ">
              The Alpha-Beta Research Society, abbreviated as ABRS, was
              inaugurated on 12th September, 2022 with the goal of promoting
              statistical research and its applications in Nigeria and beyond
              with the use of R software as well as other programming languages.
              The ABRS was established with the mission to contribute to the
              development of society through applications of results of
              cutting-edge advanced research in Statistics by decision makers,
              policy advisers and investors. We also intend to promote, at any
              time we conduct public event, the use of R syntax to solve
              mathematical and statistical problems. The vision of the society
              is also to promote and advance statistical research with R (and/or
              Posit) software and its applications through conferences,
              workshops, and publication of statistical journals and conference
              proceedings in conjunction with university-based journal outlets.
              This is to disseminate the research results to meet the
              governmental, industrial and societal needs.
            </p>
            <p className="mt-4">Sub-Theme:</p>
            <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
              <li className="font-medium text-md">
                Principal Component Analysis (PCA)
              </li>

              <li className="font-medium text-md">
                Statistical Theory and Methods
              </li>
              <li className="font-medium text-md">
                Bayesian Statistics: Theories and Methods
              </li>
              <li className="font-medium text-md">
                Time Series Analysis with Big Data
              </li>
              <li className="font-medium text-md">Statistics and Economy</li>
              <li className="font-medium text-md">Statistics and Governance</li>
              <li className="font-medium text-md">
                Statistics and Educational System
              </li>
              <li className="font-medium text-md">
                Statistics and Agriculture
              </li>
              <li className="font-medium text-md">Statistics and Sports</li>
              <li className="font-medium text-md">
                Statistics and other relevant sectors where elements of
                statistics are being used.
              </li>
            </ul>
          </div>
          <div className="max-w-screen-xl mx-auto relative">
            <h2 className="font-bold text-2xl md:text-4xl mt-4 mb-8 text-center">
              Call For Abstracts/Papers:
            </h2>

            <p className="mt-4">
              We are pleased to announce that Alpha-Beta Research Society is
              organizing a day pre-conference workshop plus two full days
              physical conference on the theme: The Role of Nation Building:
              Challenges and Solutions. The pre-conference is 100% free for
              students but attract a sum of N1,500 for the professionals while
              payments for the main conference are classified accordingly. Each
              intending participant is expected to submit at least one abstract
              on or before June 30th, 2023 after which notifications would be
              sent out accordingly. Presenters will be informed of acceptance or
              otherwise of their abstract as from 7th July through 10th July,
              2023. Presenters must register for this event before 30th June,
              2023 to be included in the final program. Each presentation lasts
              for 10 minutes while questions and answers take 5 minutes. All
              presentations are physical and guidelines must be strictly
              followed. Details of account will be shared with all registrants
              of the conference. The link for the registration is provided{" "}
              <a
                href="https://forms.gle/7J5bQgE4D9Pt64AT7"
                className="text-blue-800 text-bold"
              >
                here.
              </a>
              Kindly follow the following guides:
            </p>
            <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
              <li className="font-medium text-md">
                All abstract must have a title and at least one author’s name
                and affiliation including email address.
              </li>

              <li className="font-medium text-md">
                It must have at least 3 keywords and at most 5 keywords.
              </li>
              <li className="font-medium text-md">
                It must not be more than 250 word counts and must be clearly
                stated.
              </li>
              <li className="font-medium text-md">
                Abstract should be prepared in English.
              </li>
              <li className="font-medium text-md">
                The use of R syntax should be used for the analysis as its
                considered as our major statistical tool for all computational
                tasks.
              </li>
              <li className="font-medium text-md">
                All abstracts should be written in time new roman with size 10
                and a single paragraph.
              </li>
            </ul>
          </div>
          <div className="max-w-screen-xl mx-auto relative">
            <h2 className="font-bold text-2xl md:text-4xl mt-4 mb-8 text-center">
              Purpose
            </h2>

            <p className="mt-4">
              The main purpose of organizing the conference is to promote the
              use of R software among others while the major objectives of the
              ABRS include but not limited to:
            </p>
            <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
              <li className="font-medium text-md">
                Advancing statistical knowledge through collaboration and
                supporting research activities.
              </li>

              <li className="font-medium text-md">
                Disseminating statistical research findings as widely as
                possible for the benefits of decision-makers, policy advisers,
                funders, and the users of statistics.
              </li>
              <li className="font-medium text-md">
                Partnering with the industry by organizing regular workshops
                where the captains of industries can put to bear their
                statistical challenges so that solutions can be provided by a
                consortium of erudite researchers.
              </li>
              <li className="font-medium text-md">
                Cooperating with other bodies or societies nationally and
                internationally with similar objectives in making the
                statistical community a vibrant one while ensuring the
                socio-economic development of Nigeria and beyond.
              </li>
            </ul>
          </div>
        </section>

        <div id="countdown">{/* <Countdown /> */}</div>

        <section
          id="agenda"
          className="bg-[#d7c7fd] p-8 lg:px-40 w-full lg:mt-28 lg:max-w-[1920px] "
        >
          <div className="lg:flex flex-wrap text-center justify-center ">
            <div className="w-full  px-4">
              <h2 className="lg:text-4xl text-4xl font-semibold text-black">
                Schedule of Talks and Events
              </h2>
            </div>
          </div>
          <div className="flex flex-col items-center   lg:py-8 ">
            <div className="flex ">
              <ul className="list-none mt-6 space-y-2 accordion items-center ">
                <li className="py-2">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-1"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-1"
                    className="relative flex flex-col bg-white text-2xl font-semibold  text-black pt-4 pb-2 px-4 shadow border-b border-[#B0AEA4]"
                  >
                    <span className="pb-7 ">
                      <p className="text-xl">
                        Day 1: Pre-Conference Workshop (Monday, 17th July, 2023)
                      </p>
                    </span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-white">
                    <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
                      <li className="font-medium font-mono">
                        {" "}
                        9:00 - 9:30 (WAT): Registration of participants for the
                        workshop
                      </li>
                      <li className="font-medium font-mono">
                        9:30 - 9:45 (WAT): Introduction of Guests and invited
                        Facilitator
                      </li>
                      <li className="font-medium font-mono">
                        9:45 - 10:00 (WAT): Opening Remarks
                      </li>
                      <li className="font-medium font-mono">
                        10:00 - 10:30 (WAT): Tea break 10:30 - 11:30 (WAT): 1st
                        Session on Principal Component Analysis (PCA) - Theory
                        Part
                      </li>
                      <li className="font-medium font-mono">
                        11:30 - 11:40 (WAT): Short break 11:40 - 12:00 (WAT):
                        Questions and Answers
                      </li>
                      <li className="font-medium font-mono">
                        12:00 - 13:00 (WAT): 2nd Session on PCA (Practical
                        Session) with R Software
                      </li>
                      <li className="font-medium font-mono">
                        13:00 - 13:10 (WAT): Short break
                      </li>
                      <li className="font-medium font-mono">
                        13:10 - 13:30 (WAT): Questions and Answers
                      </li>
                      <li className="font-medium font-mono">
                        13:30 - 14:30 (WAT): 3rd Session on PCA (Hands-on
                        real-life Project) with R Software
                      </li>
                      <li className="font-medium font-mono">
                        14:30 - 15:30 (WAT): Lunch
                      </li>
                      <li className="font-medium font-mono">
                        15:30 - 15:50 (WAT): Revision / Testing participants’
                        knowledge on the topic taught.
                      </li>
                      <li className="font-medium font-mono">
                        15:50 - 16:00 (WAT): Closing Remarks
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-2">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-2"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-2"
                    className="relative flex flex-col bg-white text-2xl font-semibold  text-black pt-4 pb-2 px-4 shadow border-b border-[#B0AEA4]"
                  >
                    <span className="pb-7">
                      <p className="text-xl">
                        Day 2: Conference (Tuesday, 18th July, 2023)
                      </p>
                    </span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-white">
                    <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
                      <li className="font-medium font-mono">
                        9:00 - 9:30 (WAT): Registration of participants for the
                        Conference
                      </li>
                      <li className="font-medium font-mono">
                        9:30 - 9:45 (WAT): Introduction of Guests and invited
                        Speakers
                      </li>
                      <li className="font-medium font-mono">
                        9:45 - 10:00 (WAT): Opening Remarks
                      </li>
                      <li className="font-medium font-mono">
                        10:00 - 10:30 (WAT): Tea break
                      </li>
                      <li className="font-medium font-mono">
                        10:30 - 11:10 (WAT): 1st Lecture (Keynote Address) to be
                        delivered by Prof. Eyitayo Kazeem Lasisi
                      </li>
                      <li className="font-medium font-mono">
                        11:10 - 11:40 (WAT): 2nd Lecture (Lead Paper) to be
                        delivered by Dr (Mrs) Adeyinka J. Oresanya
                      </li>
                      <li className="font-medium font-mono">
                        11:40 - 11:50 (WAT): Interaction with audience and/ or a
                        short break
                      </li>
                      <li className="font-medium font-mono">
                        11:50 - 12:20 (WAT): 3rd Lecture to be delivered by
                        Zainab I. Musa
                      </li>
                      <li className="font-medium font-mono">
                        12:20 - 12:50 (WAT): 4th Lecture to be delivered by Dr
                        Olumide Adesina
                      </li>
                      <li className="font-medium font-mono">
                        12:50 - 13:20 (WAT): Lunch{" "}
                      </li>
                      <li className="font-medium font-mono">
                        13:20 - 13:50 (WAT): 5th Lecture to be delivered by Dr
                        Oyebayo R. Olaniran{" "}
                      </li>
                      <li className="font-medium font-mono">
                        13:50 - 14:00 (WAT): Short break
                      </li>
                      <li className="font-medium font-mono">
                        14:00 - 16:00 (WAT): Papers/Abstract Presentation
                        simultaneously at three rooms
                      </li>
                    </ul>
                  </div>
                </li>
                <li className="py-2">
                  <input
                    type="checkbox"
                    name="panel"
                    id="panel-3"
                    className="hidden"
                  />
                  <label
                    htmlFor="panel-3"
                    className="relative flex flex-col bg-white text-2xl font-semibold  text-black pt-4 pb-2 px-4 shadow border-b border-[#B0AEA4]"
                  >
                    <span className="pb-7">
                      <p className="text-xl">
                        Day 3: Conference (Wednesday, 19th July, 2023)
                      </p>
                    </span>
                  </label>
                  <div className="accordion__content overflow-hidden bg-white">
                    <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
                      <li className="font-medium font-mono">
                        9:00 - 9:30 (WAT): Registration of participants for the
                        Conference
                      </li>
                      <li className="font-medium font-mono">
                        9:30 - 10:30 (WAT): Parallel Presentations of Papers
                        (and/ or abstract)
                      </li>
                      <li className="font-medium font-mono">
                        10:30 - 11:00 (WAT): Tea break
                      </li>
                      <li className="font-medium font-mono">
                        11:00 - 14:00 (WAT): Parallel Presentations of Papers
                        (and/ or abstract)
                      </li>
                      <li className="font-medium font-mono">
                        14:00 - 14:40 (WAT): Lunch
                      </li>
                      <li className="font-medium font-mono">
                        14:40 - 15:45 (WAT): Parallel Presentations of Papers
                        (and/ or abstract)
                      </li>
                      <li className="font-medium font-mono">
                        15:45 - 16:00 (WAT): Closing Remarks and Photographs
                      </li>
                    </ul>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </section>

        {/* <section className="bg-[#d7c7fd] p-8 lg:px-20 w-full lg:mt-10 lg:max-w-[1920px] ">
          {" "}
          <div className="max-w-screen-xl mx-auto relative">
            <h2 className="font-bold text-2xl md:text-4xl mt-4 mb-8">
              Brief Explanation on Survival Anaylsis
            </h2>
            <p className="mt-4">
              Survival analysis, or more generally, time-to-event analysis,
              refers to a set of methods for analyzing the length of time until
              the occurrence of a well-defined end point of an interest. A
              unique feature of survival data is that typically not all patients
              experience the event (e.g, death) by the end of the observation
              period, so the actual survival times for some patients are
              unknown. This phenomenon, referred to as censoring, must be
              accounted for in the analysis to allow for valid inferences.
              Moreover, survival times are usually skewed, limiting the
              usefulness of analysis methods that assume a normal data
              distribution. Analyzing survival data is unique in that the
              research interest is typically a combination of whether the event
              has occurred (binary outcome) and when it has occurred (continuous
              outcome).
            </p>
            <p className="mt-4">
              Appropriate analysis of survival data requires specific
              statistical methods that can deal with censored data. As the
              assessed outcome is frequently mortality, these techniques are
              subsumed under the term survival analysis. More generally,
              however, these techniques can be used for the analysis of the time
              until any event of interest occurs (e.g, recurrence of a disease;
              initial, breakthrough postoperative pain; or failure of an
              implanted medical device), and such data can thus also be called
              time-to-event or failure time data (Schober, 2018). In medicine,
              time duration, from the patient had been diagnosed up to the time
              of his death. The objective of a survival data analysis may be
              just to describe a single sample of data to describe the lifetimes
              of a single population or to compare the lifetimes of two or more
              groups of subjects; for example, the two groups may have received
              different medical treatments and the lengths of survival time
              measure how effective the treatments are. The main two
              characteristics of data on times until failure are:
            </p>
            <ul className="list-outside list-disc pl-10 lg:pl-0 pt-5 lg:pt-5 lg:p-10">
              <li className="font-medium text-md">
                The times are non-negative and have skewed distributions with
                long tails.
              </li>

              <li className="font-medium text-md">
                A distinctive feature of survival data is that some observations
                may be censored: often the event of interest (e.g. death of
                patient, failure of component, recovery of patient) has not
                occurred by the time of recording so that all is known is that
                the lifetime for that subject is at least some value (and may
                well be greater than this value). Such censoring cannot just be
                ignored since they carry important information about the
                effectiveness of the treatment. This introduces a complication
                in the statistical description and analysis of the data.
                (Fieller, 2011) There are five different types of censoring,
                namely: right, left, interval, double and middle censoring
                (Jammalamadaka and Mangalam, 2003; Collett, 2003; Turnbull,
                1974). Kaplan Meier is derived from the names of two
                statisticians; Edward L. Kaplan and Paul Meier, in 1958 when
                they made a collaborative effort and published a paper on how to
                deal with time to event data. Therefore, they introduced the
                Kaplan-Meier estimator which serves as a tool for measuring the
                frequency or the number of patients surviving medical treatment.
                Later on, the Kaplan-Meier curves and estimates of survival data
                have become a better way of analyzing data in cohort study.
                Kaplan- Meier (KM) is non-parametric estimates of survival
                function that is commonly used to describe survivorship of a
                study population and to compare two study populations. KM
                estimate is one of the best statistical methods used to measure
                the survival probability of patients living for a certain period
                of time after treatment. It is an intuitive graphical
                presentation approach. In clinical trials or community trials,
                the intervention effect is assessed by measuring the number of
                participants saved or survived after that intervention over a
                period of time. KM estimate is the simplest procedure of
                determining the survival over time in spite of all the
                difficulties associated with subjects or situations. Curves are
                used in Kaplan Meier estimate to determine the events, censoring
                and the survival probability. Kaplan-Meier survival curve is
                used in epidemiology to analyze time to event data and to
                compare two groups of subjects. The survival curve is used to
                determine a fraction of patients surviving a specified event,
                like death during a given period of time. This can be calculated
                for two groups of patients or subjects and also their
                statistical difference in the survivals. Product Limit estimate
                (PLI) is another name of Kaplan Meier estimate. The
                product-limit formula estimates the fraction of organisms or
                physical devices surviving beyond any age t, even when some of
                the items are not observed to die or fail, and the sample is
                rather small. It involves computing the probabilities of
                occurrence of event at a certain point of time. These successive
                probabilities will be multiplied by any earlier computed
                probabilities to determine the final estimate. For example, the
                probability of a sub-fertile woman surviving the pregnancy three
                months after laparoscopy and hydrotubation can be considered to
                be the probability of surviving the first month multiplied by
                the probabilities surviving the second and third months
                respectively given that the woman survived the first two months.
                The third probability is known as a conditional probability
                (Etikan, 2017).
              </li>
            </ul>
          </div>
        </section> */}
        <section className="bg-[#d7c7fd] p-8 lg:px-20 w-full lg:mt-10 lg:max-w-[1920px] ">
          {" "}
          <div className="max-w-screen-xl mx-auto relative">
            <h2 className="font-bold text-2xl md:text-4xl mt-4 mb-8">
              Code of Conduct
            </h2>
            <p className="mt-4">
              In every society, there is bound to be existence of some rules and
              regulations to guide society’s operations. As a result,
              participants are expected to behave well before, during and even
              after the conference so as to avoid being embarrassed. It is our
              policy to treat every participant equally without being biased. In
              all our events and communications, participants are expected to
              show natural love, respect and courtesy to one another and all
              interactions should be professional, most especially during
              physical meetings
              <br /> <b>Expected behaviour:</b>Focus on what is best for the
              community, show courtesy and respect towards every member of the
              community, be respectful of different viewpoints and experiences,
              gracefully accept constructive criticism, use welcoming and
              inclusive language, adhere to the Code of Conduct and report
              incidences promptly, be direct, but professional, ask for consent
              and respect people’s boundaries, be aware of the dynamics of power
              and privilege (be mindful of how much time and space you are
              taking up), etc.
            </p>
            {/* <ul className="list-outside list-disc pl-10 lg:pl-10 pt-5 lg:pt-5 lg:p-10">
              <li className="font-medium text-md">
                The times are non-negative and have skewed distributions with
                long tails.
              </li>

              <li className="font-medium text-md">
                Focus on what is best for the workshop community
              </li>
              <li className="font-medium text-md">
                {" "}
                Show courtesy and respect towards every member of the workshop
              </li>
              <li className="font-medium text-md">
                Be respectful of different viewpoints and experiences
              </li>
              <li className="font-medium text-md">
                Gracefully accept constructive criticism
              </li>
              <li className="font-medium text-md">
                {" "}
                Use welcoming and inclusive language{" "}
              </li>
              <li className="font-medium text-md">
                {" "}
                Adhere to the Code of Conduct and report incidences promptly
              </li>
              <li className="font-medium text-md">
                {" "}
                Be direct, but professional • Ask for consent and respect
                people’s boundaries
              </li>
              <li className="font-medium text-md">
                {" "}
                Be aware of the dynamics of power and privilege (be mindful of
                how much time and space you are taking up). Unacceptable
                behaviour: Examples of unacceptable behaviour include the
                following but not limited:
              </li>
              <li className="font-medium text-md">
                Publication of private communication without consent
              </li>
              <li className="font-medium text-md">Excessive swearing</li>
              <li className="font-medium text-md">Improper gestures</li>
              <li className="font-medium text-md">Use of stereotypes</li>
              <li className="font-medium text-md">
                Incitement to violence, suicide or self-harm • Sustained
                disruptions of talks, workshops events or communications
              </li>
              <li className="font-medium text-md">
                The display of violent images • Causing someone to fear for
                their safety through stalking, following, intimidation, /
                threatening
              </li>
              <li className="font-medium text-md">
                {" "}
                Unwelcome and repeated flirtations, propositions, advances, or
                other sexual attention – including gratuitous or off-topic
                sexual images or behaviour
              </li>
              <li className="font-medium text-md">
                {" "}
                Non-consensual or unwelcome physical contact{" "}
              </li>
              <li className="font-medium text-md">
                {" "}
                Continuing to initiate interaction with someone after being
                explicitly asked to stop Demands for sexual favours in exchange
                for favourable or preferential treatment{" "}
              </li>
              <li className="font-medium text-md">
                {" "}
                Offensive, insulting, derogatory, or degrading remarks{" "}
              </li>
              <li className="font-medium text-md">
                {" "}
                Sexist, racist, homophobic, transphobic, ableist, or
                exclusionary jokes
              </li>
            </ul> */}
            <div className="md:flex mt-4 lg:gap-20 items-center">
              <div className="">
                <p className="">
                  <br /> <b>Unacceptable behaviour: </b> Publication of private
                  communication without consent, excessive Swearing, improper
                  gestures, use of stereotypes, incitement to violence, suicide
                  or self-harm, sustained disruptions of talks, webinars,
                  workshops events or communications, display of violent images,
                  causing someone to fear for their safety through stalking,
                  following, intimidation, or threatening, unwelcome and
                  repeated flirtations, propositions, advances, or other sexual
                  attention – including gratuitous or off-topic sexual images or
                  behaviour, non-consensual or unwelcome physical contact,
                  sexist, racist, homophobic, transphobic, ableist, or
                  exclusionary jokes, continuing to initiate interaction with
                  someone after being explicitly asked to stop, offensive,
                  insulting, derogatory, or degrading remarks, demands for
                  sexual favour in exchange for favourable or preferential
                  treatment, advocating for, or encouraging any of the above
                  behaviours, etc.<br/> (With reference to Linux Foundation and R Consortium).
                </p>
                <p className="text-md md:flex items-center">
                  {" "}
                  For any
                  further communication or inquiry, contact:
                  <span>
                    <a
                      href="mailto:ayobamisolaniyi@gmail.com "
                      className="text-blue-600 pr-1 text-lg"
                    >
                      ayobamisolaniyi@gmail.com 
                    </a>
                  </span>
                 
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Home;
