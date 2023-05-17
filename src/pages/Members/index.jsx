import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";
import { FaLinkedin } from "react-icons/fa";

const Members = () => {
  return (
    <>
      <Navigation />
      <div className="py-28 bg-[#d7c7fd]">
        <h2 className="lg:text-4xl text-4xl text-center font-semibold text-black pb-10">
          List of Speakers
        </h2>
        <div className="  mx-auto px-4">
          <div className="lg:flex  justify-center lg:mx-40">
            <div className="w-full md:w-6/12 lg:w-1/2 lg:mb-0 mb-12 ">
              <div className="px-6 flex flex-col justify-center items-center">
                <img
                  alt="John Doe"
                  src="/speakerone.jpg"
                  className="rounded-xl shadow-lg w-72 h-72  border-none undefined"
                />
                <div className="pt-6 text-center ">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    Prof. Lasisi Eyitayo Kazeem
                  </h1>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <a href=" https://www.linkedin.com/in/kazeem-lasisi-36026163/?originalSubdomain=ng">    <FaLinkedin className="text-2xl" /></a>
                  
                    </div>
                    <p className="text-blue-gray-700 text-sm font-light leading-relaxed ">
                      (Keynote Address)
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                      <i className="fab fa-twitter undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                      <i className="fab fa-facebook-f undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                      <i className="fab fa-dribbble undefined text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-6/12 lg:mb-0 mb-12 px-4">
              <div className="px-6 flex flex-col justify-center items-center">
                <img
                  alt="Jack Wales"
                  src="/speakertwo.jpg"
                  className="rounded-xl shadow-lg w-72 h-72  border-none undefined"
                />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    Dr Oyebayo R. Olaniran
                  </h1>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <a href="https://www.linkedin.com/in/oyebayo-ridwan-olaniran-76520578/"> <FaLinkedin className="text-2xl" /></a>
                     
                    </div>
                    <p className="text-blue-gray-700 text-sm font-light leading-relaxed ">
                      (Lead Paper Presenter)
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                      <i className="fab fa-twitter undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                      <i className="fab fa-facebook-f undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                      <i className="fab fa-dribbble undefined text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-wrap">
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6 flex flex-col justify-center items-center">
                <img
                  alt="John Doe"
                  src="/speakerthree.jpg"
                  className="rounded-xl object-cover w-72 h-72 shadow-lg  align-middle border-none undefined"
                />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    Dr (Mrs) Adeyinka J. Oresanya
                  </h1>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <a href="https://www.linkedin.com/in/adeyinkaoresanya/?originalSubdomain=ng">  <FaLinkedin className="text-2xl" /></a>
                    
                    </div>
                    <p className="text-blue-gray-700 text-sm font-light leading-relaxed ">
                      (Conference Speaker)
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                      <i className="fab fa-twitter undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                      <i className="fab fa-facebook-f undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                      <i className="fab fa-dribbble undefined text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6 flex flex-col justify-center items-center">
                <img
                  alt="Jack Wales"
                  src="/speakerfour.jpg"
                  className="rounded-xl object-cover w-72 h-72 shadow-lg  align-middle border-none undefined"
                />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    Mrs Zainab I. Musa
                  </h1>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <a href="https://www.linkedin.com/in/zainab-ishaq-musa"><FaLinkedin className="text-2xl" /></a>
                   
                    </div>
                    <p className="text-blue-gray-700 text-sm font-light leading-relaxed ">
                      (Conference Speaker)
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                      <i className="fab fa-twitter undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                      <i className="fab fa-facebook-f undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                      <i className="fab fa-dribbble undefined text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6 flex flex-col justify-center items-center">
                <img
                  alt="George Hoyt"
                  src="/speakerfive.jpg"
                  className="rounded-xl object-cover w-72 h-72 shadow-lg  align-middle border-none undefined"
                />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    Dr Olumide Adesina
                  </h1>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <a href="https://www.linkedin.com/in/olumide-adesina-ph-d-bb296a111/">
                        {" "}
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </div>
                    <p className="text-blue-gray-700 text-sm font-light leading-relaxed ">
                      (Conference Speaker)
                    </p>
                  </div>

                  <div className="flex items-center justify-center">
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                      <i className="fab fa-twitter undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                      <i className="fab fa-facebook-f undefined text-lg"></i>
                    </button>
                    <button className="false flex items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                      <i className="fab fa-dribbble undefined text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-6/12 lg:w-3/12 lg:mb-0 mb-12 px-4">
              <div className="px-6 flex flex-col justify-center items-center">
                <img
                  alt="Jenna Kardi"
                  src="/speakersix.jpg"
                  className="rounded-xl object-cover w-72 h-72 shadow-lg  align-middle border-none undefined"
                />
                <div className="pt-6 text-center">
                  <h1 className="text-gray-900 text-xl font-serif font-bold leading-normal mt-0 mb-2">
                    Mr. Azeez Akintunde Yusuf
                  </h1>
                  <div className="flex justify-center items-center gap-2">
                    <div>
                      <a href="https://www.linkedin.com/in/azeez-yusuf-b519806a/">
                        {" "}
                        <FaLinkedin className="text-2xl" />
                      </a>
                    </div>
                    <p className="text-blue-gray-700 text-sm font-light leading-relaxed ">
                      (Workshop Facilitator)
                    </p>
                  </div>

                  <div className="flex items-center justify-center ">
                    <button className="false  items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-light-blue-500 hover:bg-light-blue-50 hover:text-light-blue-700 hover:bg-light-blue-50 active:bg-light-blue-100 undefined">
                      <i className="fab fa-twitter undefined text-lg"></i>
                    </button>
                    <button className="false  items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-blue-500 hover:bg-blue-50 hover:text-blue-700 hover:bg-blue-50 active:bg-blue-100 undefined">
                      <i className="fab fa-facebook-f undefined text-lg"></i>
                    </button>
                    <button className="false  items-center justify-center gap-1 font-bold outline-none uppercase tracking-wider focus:outline-none focus:shadow-none transition-all duration-300 rounded-full w-10 h-10 p-0 grid place-items-center text-xs leading-normal bg-transparent text-pink-500 hover:bg-pink-50 hover:text-pink-700 hover:bg-pink-50 active:bg-pink-100 undefined">
                      <i className="fab fa-dribbble undefined text-lg"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <section className="md:px-20 px-4 py-10">
          <h2 className="lg:text-4xl text-4xl font-semibold text-black">
            Committees
          </h2>
          <p className="mt-4">
            Members of Conference Scientific Committee are:
          </p>
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full text-sm text-white">
                    <thead className="bg-gray-800 text-xs uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left tracking-wider"
                        >
                          Members
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left tracking-wider"
                        >
                          Roles
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800">
                      <tr className="bg-black bg-opacity-20">
                        <td className="pl-4">1</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          Dr Olaniyi Simeon Ayobami
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Chair and ABRS President
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-4">2</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          Dr Gafar Hammed
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>

                      <tr>
                        <td className="pl-4">3</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          Dr Ajitoni Simeon Amusan
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                      <tr>
                        <td className="pl-4">4</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          Dr Ajisafe Kaleed
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                      <tr>
                        <td className="pl-4">5</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          Dr (Mrs) Victoria James
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                      <tr>
                        <td className="pl-4">6</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                          Mrs Elizabeth Eleko{" "}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Secretary
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="md:px-20 px-4 py-10">
          
          <p className="mt-4 text-xl">
          Members of Local Organizing Committee are:
          </p>
          <div className="flex flex-col mt-6">
            <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
              <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
                <div className="shadow overflow-hidden sm:rounded-lg">
                  <table className="min-w-full text-sm text-white">
                    <thead className="bg-gray-800 text-xs uppercase font-medium">
                      <tr>
                        <th></th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left tracking-wider"
                        >
                          Members
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-left tracking-wider"
                        >
                          Roles
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-gray-800">
                      <tr className="bg-black bg-opacity-20">
                        <td className="pl-4">1</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                        Prof. Okunloye Ayinde Adepoju
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Chair 
                        </td>
                      </tr>
                      <tr>
                        <td className="pl-4">2</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                        Dr Saheed Alao
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                     

                      <tr>
                        <td className="pl-4">3</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                        Dr (Mrs) A.D. Adepoju
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                      <tr>
                        <td className="pl-4">4</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                        Mr Akeem Salawu	
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                      <tr>
                        <td className="pl-4">5</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                        Mrs Atinuke Gbadebo	
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">Member</td>
                      </tr>
                      <tr>
                        <td className="pl-4">6</td>
                        <td className="flex px-6 py-4 whitespace-nowrap">
                        Mr. Abiola Owolabi
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          Secretary
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default Members;
