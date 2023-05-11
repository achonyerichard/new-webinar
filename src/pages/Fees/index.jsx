import Footer from "../../components/Footer";
import Navigation from "../../components/Navigation";

const Fees = () => {
  return (
    <>
      <Navigation />
      <div className="pricing-table-2 bg-[#d7c7fd] py-12 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl  text-[#6463a8] font-bold mb-4 md:mb-6">
              Fees
            </h1>
            <p className="text-gray-500 xl:mx-12">
            After registration, details of bank account to which conference fees are expected to be paid will be shared with the registrants. 
            </p>
          </div>

          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Members
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">N15,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Non-Members
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div>
                    <span className="text-4xl font-semibold">N20,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/3 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Non Nigerians
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">$75</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-table-2 bg-[#d7c7fd] ">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl  text-[#6463a8] font-bold mb-4 md:mb-6">
              Membership Registration Requirements and Fees
            </h1>
            <p className="text-gray-500 xl:mx-12">
              Anticipated member is expected to hold a minimum of Higher
              National Diploma (HND) Certificate in Statistics for professional
              while students of statistics in any tertiary institution can apply
              to be a student member. However, holders of higher-level
              certificate related to statistics (including mathematics) are also
              welcome. Financial details are as follows:
            </p>
          </div>

          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12 gap-4">
            <div className="pricing-plan-wrap lg:w-1/4 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Fresh Member (Student)
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">N2,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/4 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Fresh Member (Professional)
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div>
                    <span className="text-4xl font-semibold">N5,000</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pricing-plan-wrap lg:w-1/4 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Annual Due (Student)
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">N1,000</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="pricing-plan-wrap lg:w-1/4 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Annual Due (Professional)
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">N3,000</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="pricing-table-2 bg-[#d7c7fd] py-6 md:py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-3xl md:text-4xl  text-[#6463a8] font-bold mb-4 md:mb-6">
            Pre-Conference Registration Fee:
            </h1>
          </div>

          <div className="pricing-plans lg:flex lg:-mx-4 mt-6 md:mt-12">
            <div className="pricing-plan-wrap lg:w-1/2 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Student
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">Free</span>
                  </div>
                </div>
              </div>
            </div>

           

            <div className="pricing-plan-wrap lg:w-1/2 my-4 md:my-6">
              <div className="pricing-plan border-t-4 border-solid border-white bg-white text-center max-w-sm mx-auto hover:border-indigo-600 transition-colors duration-300">
                <div className="p-6 md:py-8">
                  <h4 className="font-medium leading-tight text-2xl mb-2">
                    Professional
                  </h4>
                </div>
                <div className="pricing-amount bg-indigo-100 p-6 transition-colors duration-300">
                  <div className="">
                    <span className="text-4xl font-semibold">N1,500</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer/>
    </>
  );
};

export default Fees;
