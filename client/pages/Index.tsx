export default function Index() {
  const onboardingSteps = [
    {
      title: "1. Hyperguest Connectivity",
      description:
        "Establish secure connection between your property management system/Channel Manager and our platform.",
      imageOnLeft: true,
    },
    {
      title: "2. Website Integration",
      description:
        "Create a customized offer page on your hotel website featuring strategically positioned call-to-action buttons with the BOOKCOMBO or BOOKNOW functionality.",
      imageOnLeft: false,
    },
    {
      title: "3. Rate Strategy",
      description:
        "Map your rates and design special promotions in Hyperguest to incentivize guests to book multi-city hotel combinations.",
      imageOnLeft: true,
    },
    {
      title: "4. Testing",
      description: "Verify bookings, payments and user experience.",
      imageOnLeft: false,
    },
    {
      title: "5. Launch",
      description:
        "Officially deploy your Tripkaa booking solution and begin offering Multi City Hotels combinations of Cross Hotels & Resorts.",
      imageOnLeft: true,
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-tripkaa-purple-lightest via-tripkaa-purple-lightest to-tripkaa-purple-light">
        <div className="px-4 sm:px-6 lg:px-10 pt-20 sm:pt-32 lg:pt-40 pb-16 sm:pb-24 lg:pb-30">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12 lg:gap-16 mb-16 sm:mb-20 lg:mb-24">
              {/* Left Text Content */}
              <div className="flex flex-col gap-6 w-full lg:w-[548px] lg:flex-shrink-0">
                <h1 className="text-3xl sm:text-4xl lg:text-[48px] font-bold leading-[110%] tracking-[-0.48px]">
                  <span className="text-black">
                    For the First Time Ever: COMBO Hotel Bookings via{" "}
                  </span>
                  <span className="text-tripkaa-purple">Tripkaa Widget</span>
                  <span className="text-black"> – Right on Your Website!</span>
                </h1>

                <p className="text-lg leading-[130%] tracking-[0.18px] opacity-70">
                  <span className="font-normal">
                    Offer your hotel website visitor an appetite to book your
                    chain hotel in the second destination with ease of{" "}
                  </span>
                  <span className="font-bold">Combo Booking</span>
                </p>

                <button className="bg-tripkaa-purple text-white px-6 py-3.5 rounded-xl font-normal text-base self-start hover:bg-tripkaa-purple/90 transition-colors">
                  Enquire now
                </button>
              </div>

              {/* Right Video/Placeholder */}
              <div className="w-full lg:w-[780px] h-[400px] sm:h-[480px] lg:h-[560px] p-4 rounded-3xl border border-white bg-tripkaa-video-bg backdrop-blur-sm">
                <div className="w-full h-full rounded-2xl bg-gray-50 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/50 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-gray-500 text-sm">Video Preview</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Partners Section */}
            <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4 sm:gap-6">
              {Array.from({ length: 8 }, (_, i) => (
                <div
                  key={i}
                  className="w-full aspect-[3/2] bg-white rounded-xl flex items-center justify-center shadow-sm"
                >
                  <div className="text-gray-300 text-xs font-medium">
                    Partner {i + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* How to Onboard Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="px-4 sm:px-6 lg:px-8 py-20 text-center border-l border-r border-gray-200">
            <h2 className="text-3xl sm:text-4xl font-bold tracking-[-0.8px] text-black mb-4">
              How to Onboard
            </h2>
            <p className="text-lg leading-[130%] tracking-[0.18px] opacity-70 max-w-2xl mx-auto">
              Our expert implementation team will guide you through each phase,
              ensuring a smooth transition and maximizing results for your
              property.
            </p>
          </div>

          {/* Steps */}
          <div className="border-l border-r border-b border-gray-200">
            {onboardingSteps.map((step, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row border-t border-gray-200 ${
                  !step.imageOnLeft ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* Image placeholder */}
                <div className="w-full lg:w-1/2 h-64 lg:h-[440px] bg-tripkaa-purple-light flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-16 h-16 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white/60"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <p className="text-white/60 text-sm">Step Image</p>
                  </div>
                </div>

                {/* Text content */}
                <div className="w-full lg:w-1/2 flex flex-col justify-center p-8 lg:p-20 bg-gray-50">
                  <h3 className="text-2xl lg:text-[32px] font-normal tracking-[-0.64px] text-black mb-4">
                    {step.title}
                  </h3>
                  <p className="text-base leading-[130%] tracking-[0.16px] opacity-70 max-w-md">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Final CTA Section */}
      <div className="bg-gray-50">
        <div className="max-w-6xl mx-auto">
          {/* Decorative top border */}
          <div className="border-l border-r border-gray-200 h-4 relative">
            <div className="absolute inset-0 flex">
              {Array.from({ length: 69 }, (_, i) => (
                <div
                  key={i}
                  className="w-4 border-r border-gray-200 h-full"
                ></div>
              ))}
            </div>
          </div>

          {/* CTA Content */}
          <div className="border border-gray-200 bg-gradient-to-r from-[#EEEBFA] to-[#DDD8F4] py-20">
            <div className="text-center max-w-lg mx-auto px-8">
              <h2 className="text-3xl lg:text-4xl font-bold tracking-[-0.72px] text-black mb-4">
                Ready to revolutionize your hotel bookings?
              </h2>
              <p className="text-base leading-[130%] tracking-[0.16px] opacity-70 mb-6">
                Streamline your hotel bookings
              </p>
              <button className="bg-tripkaa-purple text-white px-6 py-2.5 rounded-xl font-normal text-base hover:bg-tripkaa-purple/90 transition-colors">
                Enquire now
              </button>
            </div>
          </div>

          {/* Decorative bottom border */}
          <div className="border-l border-r border-t border-gray-200 h-4 relative">
            <div className="absolute inset-0 flex">
              {Array.from({ length: 69 }, (_, i) => (
                <div
                  key={i}
                  className="w-4 border-r border-gray-200 h-full"
                ></div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 pb-10">
          <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 mb-6">
            {/* Logo */}
            <div className="flex items-center gap-1.5">
              <div className="w-10 h-10 bg-tripkaa-purple rounded-[9px] flex items-center justify-center relative">
                <svg
                  className="w-3 h-3 absolute left-2 top-3"
                  viewBox="0 0 13 14"
                  fill="none"
                >
                  <path
                    d="M2.10598 13.2445C2.54429 13.6828 3.29346 13.3676 3.28663 12.7478L3.25912 10.2508C3.21943 6.64799 6.15024 3.71719 9.75305 3.7569L12.2501 3.78443C12.8699 3.79126 13.1851 3.04208 12.7468 2.60377L10.8512 0.708191C10.7215 0.578484 10.5455 0.505615 10.3621 0.505615L1.56509 0.505628C0.705068 0.505629 0.00788207 1.20281 0.00787588 2.06283L0.0078125 10.8598C0.00781118 11.0433 0.0806798 11.2192 0.210388 11.3489L2.10598 13.2445Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="w-2.5 h-2.5 absolute left-1.5 top-1.5"
                  viewBox="0 0 10 11"
                  fill="none"
                >
                  <path
                    d="M5.0332 0.566895C7.77443 0.567024 9.99707 2.78951 9.99707 5.53076V10.2153C9.99707 10.3693 9.87175 10.4946 9.71777 10.4946H5.0332C2.29195 10.4946 0.0694656 8.27199 0.0693359 5.53076C0.0693359 2.78943 2.29187 0.566895 5.0332 0.566895ZM5.13086 3.87646C4.16333 3.87646 3.37891 4.66089 3.37891 5.62842C3.37902 6.59585 4.1634 7.38037 5.13086 7.38037C6.09819 7.38021 6.8827 6.59575 6.88281 5.62842C6.88281 4.66099 6.09826 3.87662 5.13086 3.87646Z"
                    fill="white"
                  />
                </svg>
                <svg
                  className="w-2.5 h-2.5 absolute right-1.5 top-1.5"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.71191 0.566895C8.45314 0.567024 10.6758 2.78951 10.6758 5.53076V10.2153C10.6758 10.3693 10.5505 10.4946 10.3965 10.4946H5.71191C2.97066 10.4946 0.748177 8.27199 0.748047 5.53076C0.748047 2.78943 2.97058 0.566895 5.71191 0.566895ZM5.80957 3.87646C4.84204 3.87646 4.05762 4.66089 4.05762 5.62842C4.05773 6.59585 4.84211 7.38037 5.80957 7.38037C6.77697 7.38029 7.56141 6.59581 7.56152 5.62842C7.56152 4.66093 6.77704 3.87654 5.80957 3.87646Z"
                    fill="white"
                  />
                </svg>
              </div>
              <div className="flex items-baseline">
                <span className="text-tripkaa-purple font-bold text-[19px] leading-none">
                  Tripk
                </span>
                <svg
                  className="w-2.5 h-2.5 mx-0.5 mb-1"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.89062 0.54541C8.63185 0.54554 10.8545 2.76802 10.8545 5.50928V10.1938C10.8545 10.3478 10.7292 10.4731 10.5752 10.4731H5.89062C3.14937 10.4731 0.926887 8.2505 0.926758 5.50928C0.926758 2.76794 3.14929 0.54541 5.89062 0.54541ZM5.98828 3.85498C5.02089 3.85498 4.23656 4.63862 4.23633 5.60596C4.23633 6.57349 5.02075 7.35791 5.98828 7.35791C6.95563 7.3577 7.74023 6.57336 7.74023 5.60596C7.74001 4.63875 6.95549 3.85519 5.98828 3.85498Z"
                    fill="#563BC9"
                  />
                </svg>
                <svg
                  className="w-2.5 h-2.5 mr-1 mb-1"
                  viewBox="0 0 11 11"
                  fill="none"
                >
                  <path
                    d="M5.57031 0.54541C8.31154 0.54554 10.5342 2.76802 10.5342 5.50928V10.1938C10.5342 10.3478 10.4089 10.4731 10.2549 10.4731H5.57031C2.82906 10.4731 0.606575 8.2505 0.606445 5.50928C0.606445 2.76794 2.82898 0.54541 5.57031 0.54541ZM5.66797 3.85498C4.70066 3.85508 3.91624 4.63868 3.91602 5.60596C3.91602 6.57343 4.70052 7.35781 5.66797 7.35791C6.6355 7.35791 7.41992 6.57349 7.41992 5.60596C7.41969 4.63862 6.63536 3.85498 5.66797 3.85498Z"
                    fill="#563BC9"
                  />
                </svg>
                <span className="text-tripkaa-purple text-[9px] font-normal">
                  .com
                </span>
              </div>
            </div>

            {/* Right section with social links and footer nav */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-8">
              {/* Social Media Icons */}
              <div className="flex items-center gap-5">
                <a
                  href="#"
                  className="text-black hover:text-tripkaa-purple transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M25.3749 13.9999C25.3714 16.78 24.3514 19.4629 22.507 21.5431C20.6627 23.6234 18.1213 24.9574 15.3617 25.294C15.3002 25.3009 15.238 25.2948 15.1791 25.2759C15.1202 25.2571 15.066 25.226 15.02 25.1846C14.974 25.1433 14.9373 25.0927 14.9123 25.0361C14.8873 24.9795 14.8746 24.9183 14.8749 24.8565V16.6249H17.4999C17.6199 16.6252 17.7386 16.6008 17.8487 16.5532C17.9589 16.5057 18.058 16.436 18.1401 16.3485C18.2222 16.261 18.2853 16.1576 18.3257 16.0446C18.3662 15.9317 18.3829 15.8116 18.3749 15.6919C18.3556 15.4669 18.2518 15.2576 18.0844 15.106C17.917 14.9544 17.6984 14.8719 17.4726 14.8749H14.8749V12.2499C14.8749 11.7858 15.0593 11.3407 15.3875 11.0125C15.7157 10.6843 16.1608 10.4999 16.6249 10.4999H18.3749C18.4949 10.5002 18.6136 10.4758 18.7237 10.4282C18.8339 10.3807 18.933 10.311 19.0151 10.2235C19.0972 10.136 19.1603 10.0326 19.2007 9.91962C19.2412 9.80668 19.2579 9.68663 19.2499 9.56694C19.2306 9.34156 19.1265 9.1319 18.9586 8.98027C18.7907 8.82863 18.5716 8.74631 18.3454 8.74991H16.6249C15.6967 8.74991 14.8065 9.11866 14.1501 9.77504C13.4937 10.4314 13.1249 11.3217 13.1249 12.2499V14.8749H10.4999C10.38 14.8746 10.2613 14.8991 10.1512 14.9466C10.041 14.9942 9.94186 15.0638 9.8598 15.1513C9.77774 15.2388 9.71455 15.3423 9.67415 15.4552C9.63375 15.5681 9.617 15.6882 9.62495 15.8079C9.6443 16.0333 9.74842 16.2429 9.91629 16.3946C10.0842 16.5462 10.3033 16.6285 10.5295 16.6249H13.1249V24.8587C13.1253 24.9204 13.1126 24.9815 13.0877 25.038C13.0628 25.0945 13.0262 25.145 12.9803 25.1864C12.9344 25.2277 12.8803 25.2588 12.8216 25.2778C12.7628 25.2967 12.7007 25.303 12.6393 25.2962C9.80581 24.9511 7.2051 23.5548 5.35197 21.3837C3.49884 19.2125 2.52835 16.4248 2.63261 13.5723C2.85136 7.666 7.63542 2.86444 13.546 2.63476C15.0763 2.57548 16.6028 2.82545 18.0342 3.36972C19.4656 3.91398 20.7726 4.74136 21.8769 5.80236C22.9812 6.86336 23.8601 8.13619 24.4612 9.54471C25.0622 10.9532 25.373 12.4685 25.3749 13.9999Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-black hover:text-tripkaa-purple transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M17.5 14C17.5 14.6922 17.2947 15.3689 16.9101 15.9445C16.5256 16.5201 15.9789 16.9687 15.3394 17.2336C14.6999 17.4985 13.9961 17.5678 13.3172 17.4327C12.6383 17.2977 12.0146 16.9644 11.5251 16.4749C11.0356 15.9854 10.7023 15.3617 10.5673 14.6828C10.4322 14.0039 10.5015 13.3001 10.7664 12.6606C11.0313 12.0211 11.4799 11.4744 12.0555 11.0899C12.6311 10.7053 13.3078 10.5 14 10.5C14.9283 10.5 15.8185 10.8687 16.4749 11.5251C17.1313 12.1815 17.5 13.0717 17.5 14ZM25.375 8.75V19.25C25.3733 20.8739 24.7274 22.4308 23.5791 23.5791C22.4308 24.7274 20.8739 25.3733 19.25 25.375H8.75C7.12608 25.3733 5.56917 24.7274 4.42089 23.5791C3.27261 22.4308 2.62674 20.8739 2.625 19.25V8.75C2.62674 7.12608 3.27261 5.56917 4.42089 4.42089C5.56917 3.27261 7.12608 2.62674 8.75 2.625H19.25C20.8739 2.62674 22.4308 3.27261 23.5791 4.42089C24.7274 5.56917 25.3733 7.12608 25.375 8.75ZM19.25 14C19.25 12.9616 18.9421 11.9466 18.3652 11.0833C17.7883 10.2199 16.9684 9.54699 16.0091 9.14963C15.0498 8.75227 13.9942 8.64831 12.9758 8.85088C11.9574 9.05345 11.0219 9.55346 10.2877 10.2877C9.55346 11.0219 9.05345 11.9574 8.85088 12.9758C8.64831 13.9942 8.75227 15.0498 9.14963 16.0091C9.54699 16.9684 10.2199 17.7883 11.0833 18.3652C11.9466 18.9421 12.9616 19.25 14 19.25C15.3919 19.2486 16.7265 18.695 17.7107 17.7107C18.695 16.7265 19.2486 15.3919 19.25 14ZM21.875 7.4375C21.875 7.17791 21.798 6.92415 21.6538 6.70831C21.5096 6.49247 21.3046 6.32425 21.0648 6.22491C20.8249 6.12557 20.561 6.09958 20.3064 6.15022C20.0518 6.20086 19.818 6.32587 19.6344 6.50942C19.4509 6.69298 19.3259 6.92684 19.2752 7.18144C19.2246 7.43604 19.2506 7.69994 19.3499 7.93977C19.4492 8.1796 19.6175 8.38458 19.8333 8.5288C20.0492 8.67302 20.3029 8.75 20.5625 8.75C20.9106 8.75 21.2444 8.61172 21.4906 8.36558C21.7367 8.11944 21.875 7.7856 21.875 7.4375Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
                <a
                  href="#"
                  className="text-black hover:text-tripkaa-purple transition-colors"
                >
                  <svg className="w-7 h-7" viewBox="0 0 28 28" fill="none">
                    <path
                      d="M16.6884 15.8845L19.2041 17.1401C19.0848 17.736 18.7625 18.272 18.2922 18.6567C17.8219 19.0415 17.2327 19.2512 16.625 19.25C14.5371 19.2477 12.5354 18.4172 11.0591 16.9409C9.58275 15.4645 8.75232 13.4628 8.75 11.375C8.74983 10.7681 8.95996 10.1799 9.34463 9.71044C9.7293 9.24102 10.2647 8.91939 10.8598 8.80029L12.1155 11.3159L11.0469 12.9062C10.967 13.026 10.918 13.1636 10.904 13.3069C10.8901 13.4502 10.9117 13.5947 10.967 13.7276C11.5931 15.2155 12.7768 16.3992 14.2647 17.0253C14.398 17.083 14.5436 17.1067 14.6884 17.0941C14.8331 17.0815 14.9724 17.033 15.0938 16.9531L16.6884 15.8845ZM25.375 14C25.3754 15.9638 24.8674 17.8944 23.9004 19.6036C22.9333 21.3129 21.5403 22.7427 19.8567 23.7538C18.1732 24.765 16.2565 25.323 14.2933 25.3737C12.3301 25.4243 10.3872 24.9658 8.65375 24.0428L4.92953 25.2842C4.62119 25.387 4.2903 25.4019 3.97395 25.3273C3.6576 25.2526 3.3683 25.0913 3.13846 24.8615C2.90863 24.6317 2.74734 24.3424 2.67268 24.026C2.59803 23.7097 2.61295 23.3788 2.71578 23.0704L3.95719 19.3462C3.14579 17.8207 2.69259 16.1304 2.632 14.4035C2.5714 12.6767 2.90501 10.9588 3.60748 9.38012C4.30996 7.80147 5.36284 6.4036 6.68622 5.29262C8.0096 4.18164 9.56869 3.38674 11.2451 2.96827C12.9216 2.5498 14.6713 2.51875 16.3616 2.87749C18.0518 3.23622 19.6381 3.9753 21.0001 5.03863C22.3621 6.10196 23.4639 7.46159 24.2219 9.01433C24.98 10.5671 25.3743 12.2721 25.375 14ZM21 16.625C21.0001 16.4624 20.9549 16.303 20.8696 16.1647C20.7842 16.0264 20.6619 15.9146 20.5166 15.8418L17.0166 14.0918C16.8788 14.0232 16.7253 13.9921 16.5717 14.0017C16.4181 14.0113 16.2697 14.0613 16.1416 14.1465L14.5348 15.2184C13.7973 14.8129 13.1903 14.206 12.7848 13.4684L13.8567 11.8617C13.942 11.7335 13.992 11.5852 14.0016 11.4315C14.0112 11.2779 13.9801 11.1245 13.9114 10.9867L12.1614 7.48669C12.0889 7.34021 11.9768 7.21697 11.8378 7.13094C11.6988 7.04492 11.5385 6.99955 11.375 6.99997C10.2147 6.99997 9.10188 7.46091 8.28141 8.28138C7.46094 9.10185 7 10.2147 7 11.375C7.00289 13.9268 8.01788 16.3733 9.82229 18.1777C11.6267 19.9821 14.0732 20.9971 16.625 21C17.1995 21 17.7684 20.8868 18.2992 20.6669C18.83 20.4471 19.3123 20.1248 19.7186 19.7186C20.1248 19.3123 20.4471 18.83 20.667 18.2992C20.8868 17.7684 21 17.1995 21 16.625Z"
                      fill="currentColor"
                    />
                  </svg>
                </a>
              </div>

              {/* Footer Navigation */}
              <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-sm">
                <a
                  href="#"
                  className="text-black hover:text-tripkaa-purple transition-colors"
                >
                  Privacy Policy
                </a>
                <a
                  href="#"
                  className="text-black hover:text-tripkaa-purple transition-colors"
                >
                  Terms
                </a>
                <a
                  href="#"
                  className="text-black hover:text-tripkaa-purple transition-colors"
                >
                  Company details
                </a>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-gray-200 mb-6"></div>

          {/* Copyright */}
          <p className="text-sm text-black opacity-70">
            © 2024 Tripkaa pte ltd
          </p>
        </div>
      </footer>
    </div>
  );
}
